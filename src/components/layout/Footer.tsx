"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Send, CheckCircle2, ChevronRight, Check, ShieldCheck, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, type: "newsletter" }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <footer className="bg-[#050548] text-white border-t border-white/10 relative overflow-hidden">
      {/* Top Support Banner */}
      <div className="border-b border-white/10 py-10 bg-navy-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gold-500/20 text-gold-400 flex items-center justify-center shrink-0 border border-gold-400/30">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white leading-tight">
                Need any support for <br /> residency &amp; citizenship?
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-start md:justify-end gap-4">
              <Link href="/contact" className="rr-btn bg-gold-500 text-navy-950 hover:bg-white hover:text-navy-900 shadow-lg">
                Book A Consultation <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 4-Column Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1 (4 cols): Brand & Social */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              <img
                src="/assets/imgs/logo/logo-3.svg"
                alt={siteConfig.name}
                className="h-11 w-auto object-contain"
              />
            </Link>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-sm">
              Izzy Immigration Limited is an accredited sovereign mobility and investment migration firm delivering government-approved residency and citizenship solutions worldwide.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold-500 hover:text-navy-950 flex items-center justify-center transition-colors text-white"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f text-xs"></i>
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold-500 hover:text-navy-950 flex items-center justify-center transition-colors text-white"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram text-xs"></i>
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold-500 hover:text-navy-950 flex items-center justify-center transition-colors text-white"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin text-xs"></i>
              </a>
            </div>
          </div>

          {/* Col 2 (2 cols): Practice Services */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-base font-bold font-heading text-white border-b border-white/10 pb-2">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>
                <Link href="/about" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-gold-400 shrink-0" /> Strategic Advisory
                </Link>
              </li>
              <li>
                <Link href="/citizenship" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-gold-400 shrink-0" /> Citizenship Programmes
                </Link>
              </li>
              <li>
                <Link href="/residency" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-gold-400 shrink-0" /> Residency Programmes
                </Link>
              </li>
              <li>
                <Link href="/real-estate" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-gold-400 shrink-0" /> Global Real Estate
                </Link>
              </li>
              <li>
                <Link href="/cruise-travel" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-gold-400 shrink-0" /> Luxury Cruise &amp; Travel
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 (3 cols): Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-bold font-heading text-white border-b border-white/10 pb-2">
              Useful Links
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>
                <Link href="/citizenship" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-400 shrink-0" /> Citizenship by Investment
                </Link>
              </li>
              <li>
                <Link href="/residency" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-400 shrink-0" /> Residency by Investment
                </Link>
              </li>
              <li>
                <Link href="/ancestry" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-400 shrink-0" /> Ancestry &amp; Descent
                </Link>
              </li>
              <li>
                <Link href="/compare" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-400 shrink-0" /> Compare 55+ Programmes
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-400 shrink-0" /> Contact Advisory Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4 (3 cols): Newsletter Subscription */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-bold font-heading text-white border-b border-white/10 pb-2">
              Subscribe Our Newsletter
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              Subscribe to receive the latest updates on global residency quotas, Caribbean accord updates, and golden visa law changes.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 pr-12 rounded-full bg-white/10 border border-white/20 text-xs text-white placeholder-gray-400 outline-none focus:border-gold-400"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="absolute right-1.5 top-1.5 w-8 h-8 rounded-full bg-gold-500 hover:bg-white text-navy-950 flex items-center justify-center transition-colors"
                  aria-label="Submit newsletter subscription"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {status === "success" && (
                <div className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1 pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Subscribed successfully!</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Legal */}
      <div className="border-t border-white/10 py-6 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>&copy; Izzy Immigration Limited 2026 | All Rights Reserved</p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="hover:text-gold-400 transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/privacy" className="hover:text-gold-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/disclaimer" className="hover:text-gold-400 transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
