"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { submitLead } from "@/lib/lead";

interface QuickInquiryFormProps {
  programTitle: string;
  className?: string;
}

/** Compact sidebar lead form seen on programme detail pages. */
export function QuickInquiryForm({ programTitle, className }: QuickInquiryFormProps) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "", website: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError("");
    const res = await submitLead({
      ...formData,
      program: programTitle,
      subject: `Fast Inquiry: ${programTitle}`,
      type: "consultation",
    });
    if (res.ok) setStatus("success");
    else {
      setStatus("error");
      setError(res.error ?? "Submission failed. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className={`p-6 text-center ${className ?? ""}`}>
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white">
          <CheckCircle2 size={24} />
        </span>
        <h4 className="mt-3 text-base font-extrabold text-navy-900">Inquiry Submitted</h4>
        <p className="mt-1 text-[12.5px] text-ink-light">
          We will contact you shortly regarding <strong>{programTitle}</strong>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-3.5 ${className ?? ""}`}>
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
        <div className="form-msg form-msg--error">
          <AlertCircle size={15} className="mt-0.5 shrink-0" /> {error}
        </div>
      )}
      <label className="block">
        <span className="mb-1.5 block text-[12px] font-bold text-navy-900">Your Name *</span>
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
        <span className="mb-1.5 block text-[12px] font-bold text-navy-900">Email *</span>
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
        <span className="mb-1.5 block text-[12px] font-bold text-navy-900">Phone / WhatsApp *</span>
        <input
          type="tel"
          required
          className="field"
          placeholder="e.g. +1 555 019 2345"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </label>
      <Button type="submit" variant="gold" size="sm" className="mt-1 w-full justify-center" disabled={status === "loading"}>
        {status === "loading" ? (
          <>
            <Loader2 size={15} className="animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send size={15} /> Request Free Assessment
          </>
        )}
      </Button>
    </form>
  );
}