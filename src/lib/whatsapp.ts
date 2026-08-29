import { siteConfig } from "@/data/siteConfig";

export interface WhatsAppEnquiryData {
  name?: string;
  email?: string;
  phone?: string;
  program?: string;
  country?: string;
  subject?: string;
  budget?: string;
  timeline?: string;
  familySize?: string;
  message?: string;
  type?: "consultation" | "inquiry" | "brochure" | "ancestry" | "matcher" | "contact";
}

/**
 * Creates an executive, well-formatted WhatsApp message tailored for Izzy Migration Mentors advisors
 */
export function formatWhatsAppMessage(data: WhatsAppEnquiryData): string {
  const parts: string[] = [];

  // Header
  let header = "🏛️ *IZZY MIGRATION MENTORS — PRIVATE CLIENT ENQUIRY*";
  if (data.type === "consultation") {
    header = "🏛️ *IZZY MIGRATION MENTORS — CONSULTATION BOOKING*";
  } else if (data.type === "brochure") {
    header = "🏛️ *IZZY MIGRATION MENTORS — OFFICIAL DOSSIER REQUEST*";
  } else if (data.type === "ancestry") {
    header = "🏛️ *IZZY MIGRATION MENTORS — ANCESTRY CITIZENSHIP CHECK*";
  } else if (data.type === "matcher") {
    header = "🏛️ *IZZY MIGRATION MENTORS — SOVEREIGN ROUTE ASSESSMENT*";
  } else if (data.type === "inquiry") {
    header = "🏛️ *IZZY MIGRATION MENTORS — STATUTORY PROGRAMME INQUIRY*";
  }

  parts.push(header);
  parts.push("━━━━━━━━━━━━━━━━━━━━━━━━");

  // Client Info
  if (data.name && data.name.trim()) {
    parts.push(`👤 *Client Name:* ${data.name.trim()}`);
  }
  if (data.email && data.email.trim()) {
    parts.push(`📧 *Email Address:* ${data.email.trim()}`);
  }
  if (data.phone && data.phone.trim()) {
    parts.push(`📞 *Phone / WhatsApp:* ${data.phone.trim()}`);
  }

  // Programme & Context
  const targetProgram = data.program || (data.country ? `${data.country} Sovereign Route` : "");
  if (targetProgram) {
    parts.push(`🌐 *Programme / Corridor:* ${targetProgram}`);
  }
  if (data.budget && data.budget.trim()) {
    parts.push(`💰 *Capital Deployment Range:* ${data.budget.trim()}`);
  }
  if (data.timeline && data.timeline.trim()) {
    parts.push(`⏱️ *Preferred Timeline:* ${data.timeline.trim()}`);
  }
  if (data.familySize && data.familySize.trim()) {
    parts.push(`👨‍👩‍👧‍👦 *Family Members Included:* ${data.familySize.trim()}`);
  }
  if (data.subject && data.subject !== targetProgram && data.subject.trim()) {
    parts.push(`📋 *Subject / Focus:* ${data.subject.trim()}`);
  }

  // Case Brief / Message
  if (data.message && data.message.trim()) {
    parts.push("");
    parts.push("📝 *Confidential Case Brief:*");
    parts.push(`"${data.message.trim()}"`);
  }

  // Footer
  parts.push("━━━━━━━━━━━━━━━━━━━━━━━━");
  parts.push("🔒 *Statutory Confidentiality & Legal Privilege Protected*");

  return parts.join("\n");
}

/**
 * Builds the wa.me deep link with prefilled message
 */
export function createWhatsAppLink(data: WhatsAppEnquiryData): string {
  const text = formatWhatsAppMessage(data);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Dispatches the prefilled message directly to WhatsApp in a new tab/window
 */
export function dispatchToWhatsApp(data: WhatsAppEnquiryData): string {
  const link = createWhatsAppLink(data);
  if (typeof window !== "undefined") {
    try {
      window.open(link, "_blank", "noopener,noreferrer");
    } catch {
      // Fallback if pop-up blocker prevents auto-opening
    }
  }
  return link;
}

/**
 * Saves and retrieves client contact details from browser session / local storage
 * so forms auto-fill automatically when a user visits different pages or forms!
 */
export function saveClientProfile(profile: { name?: string; email?: string; phone?: string }): void {
  if (typeof window === "undefined") return;
  try {
    const existing = getClientProfile();
    const updated = {
      name: profile.name?.trim() || existing.name || "",
      email: profile.email?.trim() || existing.email || "",
      phone: profile.phone?.trim() || existing.phone || "",
    };
    localStorage.setItem("izzy_client_profile", JSON.stringify(updated));
  } catch {}
}

export function getClientProfile(): { name: string; email: string; phone: string } {
  if (typeof window === "undefined") return { name: "", email: "", phone: "" };
  try {
    const saved = localStorage.getItem("izzy_client_profile");
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        name: parsed.name || "",
        email: parsed.email || "",
        phone: parsed.phone || "",
      };
    }
  } catch {}
  return { name: "", email: "", phone: "" };
}
