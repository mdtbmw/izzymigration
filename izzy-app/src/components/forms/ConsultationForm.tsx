"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { programs } from "@/data/programs";
import { cn } from "@/lib/utils";

interface ConsultationFormProps {
  initialProgram?: string;
  className?: string;
  onSuccess?: () => void;
}

export function ConsultationForm({
  initialProgram = "",
  className,
  onSuccess,
}: ConsultationFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: initialProgram,
    subject: "Private Client Consultation Booking",
    message: "",
    website: "", // honeypot
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          type: "consultation",
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Submission failed. Please try again.");
      }

      setStatus("success");
      if (onSuccess) onSuccess();
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className={cn("p-8 rounded-3xl bg-emerald-50 border border-emerald-200 text-center", className)}>
        <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto mb-4 shadow-md">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold font-heading text-navy-900 mb-2">
          Consultation Request Received
        </h3>
        <p className="text-sm text-body max-w-md mx-auto mb-6">
          Thank you. A Senior Sovereign Mobility Advisor from Izzy Immigration will review your profile and contact you within 2 business hours.
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setStatus("idle");
            setFormData({
              name: "",
              email: "",
              phone: "",
              program: initialProgram,
              subject: "Private Client Consultation Booking",
              message: "",
              website: "",
            });
          }}
        >
          Submit Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-4", className)}>
      {/* Honeypot field (hidden from real users) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          value={formData.website}
          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === "error" && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs md:text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 shrink-0 text-red-500 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-navy-900 uppercase tracking-wider mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Lord Alexander Wright"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 text-sm outline-none transition-all bg-white"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-navy-900 uppercase tracking-wider mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            placeholder="e.g. alexander@familyoffice.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 text-sm outline-none transition-all bg-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-navy-900 uppercase tracking-wider mb-1.5">
            Phone / WhatsApp <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            required
            placeholder="e.g. +44 7946 019234"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 text-sm outline-none transition-all bg-white"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-navy-900 uppercase tracking-wider mb-1.5">
            Programme of Interest
          </label>
          <select
            value={formData.program}
            onChange={(e) => setFormData({ ...formData, program: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 text-sm outline-none transition-all bg-white font-medium"
          >
            <option value="">General Advisory / Not Sure Yet</option>
            {programs.map((p) => (
              <option key={p.id} value={p.title}>
                {p.country} — {p.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-navy-900 uppercase tracking-wider mb-1.5">
          Confidential Case Summary / Objectives
        </label>
        <textarea
          rows={4}
          placeholder="Please describe your family requirements, preferred timeline, budget, and citizenship goals..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 text-sm outline-none transition-all bg-white"
        />
      </div>

      <p className="text-xs text-gray-500">
        🔒 All communications are protected under strict international legal confidentiality & GDPR.
      </p>

      <Button
        type="submit"
        variant="gold"
        size="lg"
        disabled={status === "loading"}
        className="w-full justify-center"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin mr-2" />
            Connecting to Secure Advisory Channel...
          </>
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Book Confidential Assessment
          </>
        )}
      </Button>
    </form>
  );
}
