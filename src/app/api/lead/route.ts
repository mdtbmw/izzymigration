import { NextRequest, NextResponse } from "next/server";

const RATE_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_MAX = 5; // submissions per window per ip/email

const attempts = new Map<string, { at: number; count: number }>();

function keyOf(ip: string, email: string): string {
  return `${ip || "unknown"}|${email || "unknown"}`;
}

function rateLimited(key: string): boolean {
  const now = Date.now();
  const rec = attempts.get(key);
  if (!rec || now - rec.at > RATE_WINDOW_MS) {
    attempts.set(key, { at: now, count: 1 });
    return false;
  }
  rec.count += 1;
  return rec.count > RATE_MAX;
}

function cleanString(value: any, max: number = 500): string {
  if (typeof value !== "string") return "";
  return value.replace(/<[^>]*>?/g, "").trim().slice(0, max);
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

async function deliverWhatsApp(lead: any, env: any): Promise<boolean> {
  if (!env.WHATSAPP_CLOUD_TOKEN || !env.WHATSAPP_PHONE_ID || !env.WHATSAPP_TO) return false;
  const text = [
    `New ${lead.type || "contact"} lead from izzyimmigration.com`,
    `Name: ${lead.name || "—"}`,
    `Email: ${lead.email || "—"}`,
    `Phone: ${lead.phone || "—"}`,
    lead.program ? `Program: ${lead.program}` : "",
    lead.subject ? `Subject: ${lead.subject}` : "",
    `Message: ${lead.message || "—"}`,
  ]
    .filter(Boolean)
    .join("\n");

  try {
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
  } catch {
    return false;
  }
}

async function deliverSheet(lead: any, env: any): Promise<boolean> {
  if (!env.SHEET_WEBHOOK) return false;
  try {
    const res = await fetch(env.SHEET_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: lead.type || "contact",
        name: lead.name,
        email: lead.email,
        phone: lead.phone,
        program: lead.program,
        subject: lead.subject,
        message: lead.message,
        received_at: new Date().toISOString(),
        source: "izzyimmigration.com",
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

async function deliverEmail(lead: any, env: any): Promise<boolean> {
  if (!env.RESEND_API_KEY || !env.RESEND_TO) return false;
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Izzy Migration Mentors <onboarding@resend.dev>",
        to: [env.RESEND_TO],
        subject: `New ${lead.type || "contact"} lead: ${lead.name || lead.email || "no name"}`,
        text: [
          `Name: ${lead.name || "—"}`,
          `Email: ${lead.email || "—"}`,
          `Phone: ${lead.phone || "—"}`,
          lead.program ? `Program: ${lead.program}` : "",
          lead.subject ? `Subject: ${lead.subject}` : "",
          `Message: ${lead.message || "—"}`,
        ]
          .filter(Boolean)
          .join("\n"),
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    let body: any = {};
    const contentType = req.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      body = await req.json();
    } else {
      const formData = await req.formData();
      body = Object.fromEntries(formData.entries());
    }

    // Honeypot check: bots fill "website" field
    if (body.website) {
      return NextResponse.json({ ok: true });
    }

    const email = cleanString(body.email, 200).toLowerCase();
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
    if (rateLimited(keyOf(ip, email))) {
      return NextResponse.json(
        { ok: false, error: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    const lead = {
      name: cleanString(body.name, 200),
      email,
      phone: cleanString(body.phone, 50),
      program: cleanString(body.program, 200),
      subject: cleanString(body.subject, 200),
      message: cleanString(body.message, 3000),
      type: cleanString(body.type, 50) || "contact",
    };

    const env = process.env;
    const channels = [
      deliverWhatsApp(lead, env),
      deliverSheet(lead, env),
      deliverEmail(lead, env),
    ];

    const results = await Promise.allSettled(channels);
    const delivered = results.filter((r) => r.status === "fulfilled" && r.value === true).length;

    // Log receipt in dev / preview
    console.log(`[Lead Capture] Received ${lead.type} lead from ${lead.email} (channels: ${delivered})`);

    return NextResponse.json({ ok: true, delivered });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err.message || "Internal server error" },
      { status: 500 }
    );
  }
}
