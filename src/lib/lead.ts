"use client";

import { useEffect } from "react";
import { siteConfig } from "@/data/siteConfig";

/**
 * Sends a formatted lead to /api/lead.
 * Returns { ok, error? } so callers can render the shared form-msg UI.
 */
export async function submitLead(payload: {
  name: string;
  email: string;
  phone?: string;
  program?: string;
  subject?: string;
  message?: string;
  type?: string;
  website?: string;
}): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => ({ ok: false }));
    if (!res.ok || data.ok === false) {
      return { ok: false, error: data.error || "Something went wrong. Please try again." };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "Network error. Please try again or call us directly." };
  }
}

export function ContactInline() {
  useEffect(() => {
    // no-op kept for parity when future analytics lands
  }, []);
  void siteConfig;
  return null;
}