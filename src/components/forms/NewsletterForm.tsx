"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface NewsletterFormProps {
  className?: string;
}

export function NewsletterForm({ className }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          type: "newsletter",
          subject: "Sovereign Intelligence Newsletter Subscription",
        }),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex items-center gap-2 text-emerald-400 text-xs py-2">
        <CheckCircle2 className="w-4 h-4" />
        <span>Subscribed to Sovereign Intelligence updates!</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("relative flex items-center", className)}>
      <input
        type="email"
        required
        placeholder="Enter your private email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-5 py-3.5 pr-14 rounded-full bg-navy-950/80 border border-gray-700/80 text-white placeholder-gray-400 text-xs focus:outline-none focus:border-gold-500 transition-colors"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        aria-label="Subscribe"
        className="absolute right-1.5 w-9 h-9 rounded-full bg-gold-500 hover:bg-gold-400 text-navy-950 flex items-center justify-center transition-colors disabled:opacity-50"
      >
        {status === "loading" ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <ArrowRight className="w-4 h-4" />
        )}
      </button>
    </form>
  );
}
