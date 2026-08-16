"use client";

import React, { useState, useEffect } from "react";
import { Send, ShieldCheck, AlertCircle, Loader2, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { getClientProfile, saveClientProfile, dispatchToWhatsApp, createWhatsAppLink } from "@/lib/whatsapp";

interface QuickInquiryFormProps {
  programTitle: string;
  className?: string;
  onSuccess?: () => void;
}

export function QuickInquiryForm({
  programTitle,
  className,
  onSuccess,
}: QuickInquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    website: "", // honeypot
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [whatsappLink, setWhatsappLink] = useState("");

  useEffect(() => {
    const saved = getClientProfile();
    setFormData((prev) => ({
      ...prev,
      name: prev.name || saved.name || "",
      email: prev.email || saved.email || "",
      phone: prev.phone || saved.phone || "",
    }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    saveClientProfile({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    });

    const waData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      program: programTitle,
      subject: `Official Dossier & Inquiry: ${programTitle}`,
      message: formData.message,
      type: "inquiry" as const,
    };

    const waLink = createWhatsAppLink(waData);
    setWhatsappLink(waLink);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          program: programTitle,
          subject: `Fast Inquiry: ${programTitle}`,
          type: "consultation",
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Submission failed. Please try again.");
      }

      setStatus("success");
      if (onSuccess) onSuccess();

      dispatchToWhatsApp(waData);
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred.");
    }
  };

  if (status === "success") {
    return (
      <div className={cn("p-6 rounded-2xl bg-gold-500/10 border border-gold-400/40 text-center space-y-3", className)}>
        <div className="w-12 h-12 rounded-full bg-navy-950 text-gold-400 flex items-center justify-center mx-auto shadow-md border border-gold-400/50">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <h4 className="text-base font-extrabold font-heading text-navy-900 mb-1">
          Dossier Request Submitted
        </h4>
        <p className="text-xs text-ink-light leading-relaxed">
          Your request for <strong>{programTitle}</strong> has been received. We have prefilled your statutory inquiry on WhatsApp for instant priority consultation.
        </p>
        {whatsappLink && (
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white font-extrabold text-[11.5px] uppercase tracking-wider transition-all shadow-md shadow-emerald-600/20 mt-2"
          >
            <MessageSquare className="w-3.5 h-3.5" /> Open WhatsApp Direct
          </a>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-3.5", className)}>
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
        <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div>
        <label className="block text-[11.5px] font-bold text-navy-900 mb-1">Full Legal Name *</label>
        <input
          type="text"
          required
          placeholder="e.g. Michael Vance"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl border border-surface-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 text-xs outline-none bg-surface-50 focus:bg-white transition-colors"
        />
      </div>

      <div>
        <label className="block text-[11.5px] font-bold text-navy-900 mb-1">Email Address *</label>
        <input
          type="email"
          required
          placeholder="e.g. michael@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl border border-surface-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 text-xs outline-none bg-surface-50 focus:bg-white transition-colors"
        />
      </div>

      <div>
        <label className="block text-[11.5px] font-bold text-navy-900 mb-1">Phone / WhatsApp Number *</label>
        <input
          type="tel"
          required
          placeholder="e.g. +1 555 019 2345"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl border border-surface-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 text-xs outline-none bg-surface-50 focus:bg-white transition-colors"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 rounded-xl bg-gold-500 hover:bg-navy-950 hover:text-white text-navy-950 font-extrabold px-5 py-3 text-xs shadow-md transition-all duration-300 mt-2"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-3.5 h-3.5 animate-spin mr-1.5" />
            <span>Processing Request...</span>
          </>
        ) : (
          <>
            <Send className="w-3.5 h-3.5" />
            <span>Request Official Fee Dossier</span>
          </>
        )}
      </button>
    </form>
  );
}
