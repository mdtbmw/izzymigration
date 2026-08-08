// Vercel Serverless Function — lead capture pipeline.
// Validates submissions, blocks spam, and delivers leads to every configured channel:
//   - WhatsApp Business Cloud API   (WHATSAPP_CLOUD_TOKEN / WHATSAPP_PHONE_ID / WHATSAPP_TO)
//   - Google Apps Script / Sheets    (SHEET_WEBHOOK)
//   - Email via Resend               (RESEND_API_KEY / RESEND_TO)
// Zero runtime dependencies. Node 18+ required (global fetch).

const RATE_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_MAX = 5;                    // submissions per window per ip/email

// In-memory rate limiter. Stateless on warm instances only; adequate for a low-traffic
// lead form. Swap for Upstash/Vercel KV if you need hard guarantees.
const attempts = new Map();

function keyOf(ip, email) {
  return `${ip || "unknown"}|${email || "unknown"}`;
}

function rateLimited(key) {
  const now = Date.now();
  const rec = attempts.get(key);
  if (!rec || now - rec.at > RATE_WINDOW_MS) {
    attempts.set(key, { at: now, count: 1 });
    return false;
  }
  rec.count += 1;
  return rec.count > RATE_MAX;
}

function cleanString(value, max = 500) {
  if (typeof value !== "string") return "";
  return value.replace(/<[^>]*>?/g, "").trim().slice(0, max);
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

function parseBody(rawBody, contentType) {
  const data = { name: "", email: "", phone: "", subject: "", message: "", type: "" };
  if (!rawBody) return data;

  if ((contentType || "").includes("application/json")) {
    try {
      return { ...data, ...JSON.parse(rawBody) };
    } catch {
      return data;
    }
  }

  // form-encoded fallback
  const params = new URLSearchParams(rawBody);
  return {
    ...data,
    name: params.get("name") || "",
    email: params.get("email") || "",
    phone: params.get("phone") || "",
    subject: params.get("subject") || "",
    message: params.get("message") || params.get("textarea") || "",
    type: params.get("type") || "",
  };
}

async function deliverWhatsApp(lead, env) {
  if (!env.WHATSAPP_CLOUD_TOKEN || !env.WHATSAPP_PHONE_ID || !env.WHATSAPP_TO) return false;
  const text = [
    `New ${lead.type || "contact"} lead from izzyimmigration.com`,
    `Name: ${lead.name || "—"}`,
    `Email: ${lead.email || "—"}`,
    `Phone: ${lead.phone || "—"}`,
    lead.subject ? `Subject: ${lead.subject}` : "",
    `Message: ${lead.message || "—"}`,
  ]
    .filter(Boolean)
    .join("\n");

  const res = await fetch(
    `https://graph.facebook.com/v19.0/${env.WHATSAPP_PHONE_ID}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.WHATSAPP_CLOUD_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: env.WHATSAPP_TO,
        type: "text",
        text: { body: text },
      }),
    }
  );
  return res.ok;
}

async function deliverSheet(lead, env) {
  if (!env.SHEET_WEBHOOK) return false;
  const res = await fetch(env.SHEET_WEBHOOK, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      type: lead.type || "contact",
      name: lead.name,
      email: lead.email,
      phone: lead.phone,
      subject: lead.subject,
      message: lead.message,
      received_at: new Date().toISOString(),
      source: "izzyimmigration.com",
    }),
  });
  return res.ok;
}

async function deliverEmail(lead, env) {
  if (!env.RESEND_API_KEY || !env.RESEND_TO) return false;
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Izzy Immigration <onboarding@resend.dev>",
      to: [env.RESEND_TO],
      subject: `New ${lead.type || "contact"} lead: ${lead.name || lead.email || "no name"}`,
      text: [
        `Name: ${lead.name || "—"}`,
        `Email: ${lead.email || "—"}`,
        `Phone: ${lead.phone || "—"}`,
        lead.subject ? `Subject: ${lead.subject}` : "",
        `Message: ${lead.message || "—"}`,
      ].join("\n"),
    }),
  });
  return res.ok;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "Method not allowed" });
    return;
  }

  const raw = await (async () => {
    try {
      return await new Promise((resolve) => {
        let body = "";
        req.on("data", (c) => {
          body += c;
          if (body.length > 10_000) req.destroy();
        });
        req.on("end", () => resolve(body));
        req.on("error", () => resolve(""));
      });
    } catch {
      return "";
    }
  })();

  const lead = parseBody(raw, req.headers["content-type"]);

  // Honeypot: bots fill hidden "website" field.
  if (lead.website) {
    res.status(200).json({ ok: true });
    return;
  }

  if (!isValidEmail(lead.email)) {
    res.status(400).json({ ok: false, error: "Please enter a valid email address." });
    return;
  }

  const ip = (req.headers["x-forwarded-for"] || "").split(",")[0].trim() || req.socket?.remoteAddress;
  if (rateLimited(keyOf(ip, lead.email))) {
    res.status(429).json({ ok: false, error: "Too many submissions. Please try again later." });
    return;
  }

  lead.name = cleanString(lead.name);
  lead.phone = cleanString(lead.phone, 30);
  lead.subject = cleanString(lead.subject, 150);
  lead.message = cleanString(lead.message, 2000);
  lead.email = cleanString(lead.email, 200).toLowerCase();

  const env = process.env;
  const channels = [deliverWhatsApp(lead, env), deliverSheet(lead, env), deliverEmail(lead, env)];
  const results = await Promise.allSettled(channels);
  const delivered = results.filter((r) => r.status === "fulfilled" && r.value === true).length;

  if (delivered === 0) {
    // No channel configured or all failed — surface it so it is not silently dropped.
    res.status(503).json({
      ok: false,
      error: "Lead capture is not configured. Contact the site owner.",
    });
    return;
  }

  res.status(200).json({ ok: true, delivered });
}
