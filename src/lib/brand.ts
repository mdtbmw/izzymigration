/** Normalize asset paths from data files (e.g. "assets/imgs/x.png" -> "/assets/imgs/x.png"). */
export function assetPath(p: string): string {
  if (!p) return "";
  return p.startsWith("/") ? p : `/${p}`;
}

/** WhatsApp deep link with a prefilled message. */
export function whatsappHref(message?: string): string {
  const { siteConfig } = require("@/data/siteConfig");
  const text = message || siteConfig.whatsappMessage;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
}