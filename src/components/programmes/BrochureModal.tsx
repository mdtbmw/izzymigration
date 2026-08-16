"use client";

import { useState } from "react";
import { Download, CheckCircle2, Loader2, FileText, ShieldCheck, AlertCircle } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { submitLead } from "@/lib/lead";

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  programTitle: string;
  country: string;
}

export function BrochureModal({ isOpen, onClose, programTitle, country }: BrochureModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError("");
    const res = await submitLead({
      name,
      email,
      phone,
      program: programTitle,
      subject: `Brochure Dossier Download: ${programTitle}`,
      type: "brochure",
      website,
    });
    if (res.ok) setStatus("success");
    else {
      setStatus("error");
      setError(res.error ?? "Download authorization failed.");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Download Official ${country} Sovereign Dossier`}
    >
      {status === "success" ? (
        <div className="py-4 text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white">
            <CheckCircle2 size={28} />
          </span>
          <h4 className="mt-4 text-lg font-extrabold text-navy-900">Dossier Authorized & Dispatched</h4>
          <p className="mx-auto mt-2 max-w-sm text-sm text-ink-light">
            A secure download link for the official <strong>{programTitle}</strong> guide has been emailed to{" "}
            <strong>{email}</strong>.
          </p>
          <Button variant="gold" size="sm" className="mt-5" onClick={onClose}>
            Close & Continue Browsing
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {status === "error" && (
            <div className="form-msg form-msg--error">
              <AlertCircle size={16} className="mt-0.5 shrink-0" /> {error}
            </div>
          )}
          <div className="flex items-center gap-3 rounded-2xl border border-gold-500/25 bg-gold-50 px-4 py-3.5 text-[13px] font-bold text-navy-900">
            <FileText size={18} className="shrink-0 text-gold-600" />
            Official 2026 Sovereign Legal & Fee Dossier (PDF)
          </div>
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
          <label className="block">
            <span className="mb-1.5 block text-[12.5px] font-bold text-navy-900">Full Name *</span>
            <input
              type="text"
              required
              className="field"
              placeholder="e.g. Lord Alexander Wright"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-[12.5px] font-bold text-navy-900">Private Email *</span>
            <input
              type="email"
              required
              className="field"
              placeholder="e.g. alexander@familyoffice.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-[12.5px] font-bold text-navy-900">Phone / WhatsApp *</span>
            <input
              type="tel"
              required
              className="field"
              placeholder="e.g. +44 7946 019234"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <Button type="submit" variant="gold" className="w-full justify-center" disabled={status === "loading"}>
            {status === "loading" ? (
              <>
                <Loader2 size={16} className="animate-spin" /> Authorizing Document…
              </>
            ) : (
              <>
                <Download size={16} /> Instant Secure Download
              </>
            )}
          </Button>
          <p className="flex items-center justify-center gap-1.5 pt-1 text-[11.5px] font-semibold text-ink-light">
            <ShieldCheck size={14} className="text-emerald-600" /> Strict privacy. Direct statutory document dispatch.
          </p>
        </form>
      )}
    </Modal>
  );
}