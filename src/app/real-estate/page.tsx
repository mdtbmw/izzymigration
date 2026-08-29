"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/home/CtaBand";
import {
  Building2,
  ShieldCheck,
  TrendingUp,
  FileCheck2,
  ArrowRight,
  ChevronDown,
  MessageSquare,
  CheckCircle2,
  Globe2,
} from "lucide-react";
import { createWhatsAppLink } from "@/lib/whatsapp";

const STEPS = [
  {
    num: "01",
    title: "Statutory Qualification Vetting",
    desc: "We verify minimum investment thresholds, location zoning, property classification, and mandatory holding periods against the latest 2026 immigration statutes.",
  },
  {
    num: "02",
    title: "Title & Due Diligence Clearance",
    desc: "Every property in our portfolio undergoes forensic title audits, encumbrance searches, and valuation checks by licensed in-country real estate solicitors.",
  },
  {
    num: "03",
    title: "Capital Yield & Resale Strategy",
    desc: "We evaluate rental yields, currency stability, property management infrastructure, and exit liquidity to ensure your asset performs commercially.",
  },
  {
    num: "04",
    title: "Turnkey Acquisition & Filing",
    desc: "From escrow fund routing and sales agreements to land registry deed registration and residency application lodgement, we manage the entire process.",
  },
];

const CORRIDORS = [
  { country: "Greece Golden Visa", min: "EUR 250,000 / EUR 400,000 / EUR 800,000", desc: "Residential & Commercial conversions across Athens and Aegean Islands." },
  { country: "Cyprus Permanent Residency", min: "EUR 300,000 + VAT", desc: "New residential luxury villas and coastal apartments with fast EU permanent residency." },
  { country: "UAE Golden Visa (Dubai)", min: "AED 2,000,000 (~$545,000)", desc: "Prime freehold properties with 10-year renewable residency and 0% personal tax." },
  { country: "Caribbean CBI Real Estate", min: "USD 200,000 – 400,000", desc: "Government-approved 5-star resort fractional and full titles with direct passport issuance." },
  { country: "Spain Golden Visa", min: "EUR 500,000", desc: "Prime residential portfolios in Madrid, Barcelona, and the Costa del Sol." },
  { country: "Panama Qualified Investor", min: "USD 300,000", desc: "Fast-track permanent residency via prime Panama City commercial and residential assets." },
];

const FAQS = [
  {
    q: "Can I rent out my qualifying real estate investment?",
    a: "Yes. The vast majority of sovereign programmes (including Greece, Cyprus, UAE, and the Caribbean) allow investors to lease their qualifying property for rental income while holding residency or citizenship.",
  },
  {
    q: "Must I visit the country in person to purchase the property?",
    a: "No. Our in-country legal counsel can act on your behalf under a Power of Attorney (PoA) to inspect titles, sign deeds, and register ownership without requiring initial travel.",
  },
  {
    q: "How long must I retain the property to maintain my residency or passport?",
    a: "For Citizenship by Investment (Caribbean), the mandatory holding period is typically 5 to 7 years, after which the property can be resold without forfeiting citizenship. For Golden Visas (Greece, Spain, Cyprus), you retain the property as long as you maintain your permanent resident status.",
  },
];

export default function GlobalRealEstatePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="w-full min-w-0 max-w-full overflow-hidden">
      <PageHero
        title="Prime International Real Estate"
        subtitle="The foundation of many sovereign residency and citizenship programmes is qualifying prime property. We curate government-approved real estate assets with sound capital growth and bulletproof legal title."
        bgImage="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85"
        crumb={[{ label: "Global Real Estate" }]}
      />

      {/* 4 Step Acquisition Framework */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="container-izzy">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="eyebrow eyebrow--center justify-center">Property Meets Programme</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 mt-2">
              End-to-End Real Estate Advisory
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-ink-light mt-2">
              We eliminate regulatory pitfalls, hidden encumbrances, and overinflated prices so your property investment succeeds on all fronts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {STEPS.map((s) => (
              <div
                key={s.num}
                className="card rounded-2xl sm:rounded-3xl p-5 sm:p-6 bg-white border border-surface-200 shadow-sm hover:border-gold-400/50 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-gold-500 font-display block mb-2">
                    {s.num}
                  </span>
                  <h3 className="text-sm sm:text-base font-extrabold text-navy-900 mb-2 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-ink-light leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Corridors & FAQs */}
      <section className="py-12 sm:py-16 md:py-20 bg-surface-50">
        <div className="container-izzy">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left: Corridors List */}
            <div className="lg:col-span-6 w-full min-w-0 space-y-4">
              <span className="eyebrow">Approved Inventory</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 leading-tight">
                Prime Property Corridors We Manage
              </h2>
              <p className="text-xs sm:text-sm text-ink-light leading-relaxed mb-4">
                Direct government-approved developments with title insurance and sovereign pre-clearance.
              </p>

              <div className="space-y-3">
                {CORRIDORS.map((c) => (
                  <div
                    key={c.country}
                    className="p-4 rounded-2xl bg-white border border-surface-200 shadow-2xs hover:border-gold-400/50 transition-all"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="text-sm font-extrabold text-navy-900">{c.country}</h4>
                      <span className="text-xs font-extrabold text-gold-600 shrink-0">{c.min}</span>
                    </div>
                    <p className="text-xs text-ink-light leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link href="/programmes" className="btn btn-gold text-xs sm:text-sm">
                  View Property-Linked Programmes <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Right: FAQs */}
            <div className="lg:col-span-6 w-full min-w-0 space-y-4">
              <span className="eyebrow">Essential Knowledge</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 leading-tight">
                Frequently Asked Questions
              </h2>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={faq.q}
                      className="rounded-2xl bg-white border border-surface-200 shadow-2xs overflow-hidden transition-all"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between gap-3 p-4 sm:p-5 text-left font-bold text-xs sm:text-sm text-navy-900"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          size={16}
                          className={`shrink-0 text-gold-600 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-[13.5px] text-ink-light leading-relaxed border-t border-surface-100 pt-3">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand />
    </main>
  );
}
