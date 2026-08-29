"use client";

import React, { useState, useEffect } from "react";
import { Download, CheckCircle2, AlertCircle, Loader2, FileText, ShieldCheck, MessageSquare } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { getClientProfile, saveClientProfile, dispatchToWhatsApp, createWhatsAppLink } from "@/lib/whatsapp";

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  programTitle: string;
  country: string;
}

export function BrochureModal({
  isOpen,
  onClose,
  programTitle,
  country,
}: BrochureModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [whatsappLink, setWhatsappLink] = useState("");

  useEffect(() => {
    if (isOpen) {
      const saved = getClientProfile();
      if (!name && saved.name) setName(saved.name);
      if (!email && saved.email) setEmail(saved.email);
      if (!phone && saved.phone) setPhone(saved.phone);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    saveClientProfile({ name, email, phone });

    const waData = {
      name,
      email,
      phone,
      program: programTitle,
      country,
      subject: `Official Statutory Brochure & Fee Schedule: ${programTitle}`,
      type: "brochure" as const,
    };

    const waLink = createWhatsAppLink(waData);
    setWhatsappLink(waLink);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          program: programTitle,
          subject: `Brochure Dossier Download: ${programTitle}`,
          type: "brochure",
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Download authorization failed.");
      }

      setStatus("success");
      dispatchToWhatsApp(waData);
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred.");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Download Official ${country} Sovereign Dossier`}
      subtitle={`Comprehensive statutory fee schedules, due diligence procedures, and family investment options for ${programTitle}.`}
      maxWidth="md"
    >
      {status === "success" ? (
        <div className="text-center py-6 space-y-4">
          <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h4 className="text-lg font-bold font-heading text-navy-900">
            Dossier Authorized &amp; Dispatched
          </h4>
          <p className="text-xs sm:text-sm text-body max-w-sm mx-auto">
            A secure download link for <strong>{programTitle}</strong> has been generated and prefilled on WhatsApp for instant receipt.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            {whatsappLink && (
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-extrabold text-xs tracking-wider uppercase transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4" /> Receive on WhatsApp
              </a>
            )}
            <Button variant="outline" size="sm" onClick={onClose}>
              Close &amp; Continue Browsing
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          {status === "error" && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="p-3.5 rounded-2xl bg-surface-100 border border-gray-200/80 flex items-center gap-3 text-xs text-navy-900 font-semibold">
            <FileText className="w-5 h-5 text-gold-500 shrink-0" />
            <span>Official 2026 Sovereign Legal &amp; Fee Dossier (PDF)</span>
          </div>

          <div>
            <label className="block text-xs font-semibold text-navy-900 mb-1">Full Name *</label>
            <input
              type="text"
              required
              placeholder="e.g. Lord Alexander Wright"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs outline-none focus:border-gold-500 bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-navy-900 mb-1">Private Email *</label>
            <input
              type="email"
              required
              placeholder="e.g. alexander@familyoffice.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs outline-none focus:border-gold-500 bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-navy-900 mb-1">Phone / WhatsApp *</label>
            <input
              type="tel"
              required
              placeholder="e.g. +44 7946 019234"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs outline-none focus:border-gold-500 bg-white"
            />
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              variant="gold"
              size="md"
              disabled={status === "loading"}
              className="w-full justify-center"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  Authorizing Document...
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 mr-2" />
                  Instant Secure Download
                </>
              )}
            </Button>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-500 pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Strict privacy. Direct statutory document dispatch.</span>
          </div>
        </form>
      )}
    </Modal>
  );
}
