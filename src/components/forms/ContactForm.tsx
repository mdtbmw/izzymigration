"use client";

import { useState, useEffect } from "react";
import { Send, CheckCircle2, Loader2, AlertCircle, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { submitLead } from "@/lib/lead";
import { getClientProfile, saveClientProfile, dispatchToWhatsApp, createWhatsAppLink } from "@/lib/whatsapp";

/** Full-page contact form; type "contact", optional program/budget prefilled via URL. */
export function ContactForm({ program: programProp }: { program?: string }) {
  const [program, setProgram] = useState(programProp || "");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    budget: "",
    website: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [whatsappLink, setWhatsappLink] = useState("");

  useEffect(() => {
    const saved = getClientProfile();
    let p = programProp || "";
    let b = "";
    if (typeof window !== "undefined") {
      const sp = new URLSearchParams(window.location.search);
      p = p || sp.get("program") || sp.get("pathway") || "";
      b = sp.get("budget") || "";
    }
    if (p) setProgram(p);

    setFormData((f) => ({
      ...f,
      name: f.name || saved.name || "",
      email: f.email || saved.email || "",
      phone: f.phone || saved.phone || "",
      budget: f.budget || b || "",
      subject: f.subject || (p ? `Enquiry: ${p}` : "General Advisory & Global Mobility"),
    }));
  }, [programProp]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    saveClientProfile({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    });

    const waData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      program: program || formData.subject,
      subject: formData.subject,
      budget: formData.budget,
      message: formData.message,
      type: "contact" as const,
    };

    const waLink = createWhatsAppLink(waData);
    setWhatsappLink(waLink);

    const res = await submitLead({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      program: formData.budget ? `${formData.subject} — Budget: ${formData.budget}` : formData.subject,
      type: "contact",
      website: formData.website,
    });

    if (res.ok) {
      setStatus("success");
      dispatchToWhatsApp(waData);
    } else {
      setStatus("error");
      setError(res.error ?? "Submission failed. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-[24px] border border-emerald-200 bg-emerald-50 px-8 py-14 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md">
          <CheckCircle2 size={32} />
        </span>
        <h2 className="mt-5 font-display text-2xl font-bold text-navy-900">Enquiry Received</h2>
        <p className="mt-2 max-w-md text-[14.5px] leading-relaxed text-slate-600">
          Thank you for contacting Izzy Migration Mentors. We have prefilled your enquiry on WhatsApp for immediate direct connection with our senior advisory desk.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
          {whatsappLink && (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-extrabold text-xs tracking-wider uppercase transition-all shadow-md shadow-emerald-600/20"
            >
              <MessageSquare size={16} /> Continue on WhatsApp
            </a>
          )}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setStatus("idle")}
          >
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[24px] border border-navy-100 bg-white p-6 shadow-lg shadow-navy-900/5 md:p-9"
    >
      <h2 className="font-display text-2xl font-bold text-navy-900">Ready to Start Your Application?</h2>
      <p className="mt-2 text-[14.5px] text-slate-500">
        Share a few details and a senior consultant will guide you through the best route for your goals.
      </p>

      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === "error" && (
        <div className="form-msg form-msg--error mt-5">
          <AlertCircle size={15} className="mt-0.5 shrink-0" /> {error}
        </div>
      )}

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-[12.5px] font-bold text-navy-900">Your Name *</span>
          <input
            type="text"
            required
            className="field"
            placeholder="e.g. Michael Vance"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-[12.5px] font-bold text-navy-900">Your Email *</span>
          <input
            type="email"
            required
            className="field"
            placeholder="e.g. michael@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-[12.5px] font-bold text-navy-900">Your Phone / WhatsApp</span>
          <input
            type="tel"
            className="field"
            placeholder="e.g. +1 555 019 2345"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-[12.5px] font-bold text-navy-900">Subject</span>
          <input
            type="text"
            className="field"
            placeholder="e.g. St. Kitts Citizenship Enquiry"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-[12.5px] font-bold text-navy-900">Investment Budget (optional)</span>
          <input
            type="text"
            className="field"
            placeholder="e.g. USD 250,000 – 500,000"
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-[12.5px] font-bold text-navy-900">Message *</span>
          <textarea
            required
            rows={5}
            className="field resize-y"
            placeholder="Tell us about your goals — target country, timeline, family members to include…"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </label>
      </div>

      <Button type="submit" variant="gold" size="lg" className="mt-6 w-full justify-center sm:w-auto" disabled={status === "loading"}>
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send size={16} /> Send Message
          </>
        )}
      </Button>
    </form>
  );
}