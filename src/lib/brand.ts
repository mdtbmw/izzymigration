/** Normalize asset paths from data files (e.g. "assets/imgs/x.png" -> "/assets/imgs/x.png") while preserving external URLs. */
export function assetPath(p: string): string {
  if (!p) return "";
  if (p.startsWith("http://") || p.startsWith("https://") || p.startsWith("data:") || p.startsWith("//")) {
    return p;
  }
  return p.startsWith("/") ? p : `/${p}`;
}

/** WhatsApp deep link with a prefilled message. */
export function whatsappHref(message?: string): string {
  const { siteConfig } = require("@/data/siteConfig");
  const text = message || siteConfig.whatsappMessage;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
}