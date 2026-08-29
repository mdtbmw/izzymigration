import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Globe } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white relative overflow-hidden border-y border-gold-500/20">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
              Direct Government Escrow Accounts
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading leading-tight">
              Your Second Passport Is Closer Than You Think
            </h2>
            <p className="text-sm md:text-base text-gray-300">
              Schedule a confidential pre-vetting assessment with our senior legal counsel and receive statutory fee breakdowns within 24 hours.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <Link href="/contact" className="btn-hero-gold shadow-xl">
              Book a Free Assessment
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/compare" className="btn-hero-outline">
              Compare 55+ Programmes
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
