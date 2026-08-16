"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ShieldCheck, ArrowRight, Award, Globe, Users } from "lucide-react";

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is the difference between Citizenship by Investment and Residency by Investment?",
      a: "Citizenship by Investment grants you a full legal passport and permanent nationality of the country immediately upon approval, typically with zero residency or language requirements. Residency by Investment (Golden Visas) grants permanent legal settlement and Schengen visa-free travel, which may lead to full naturalization after a statutory qualification period (e.g. 5 years in Portugal).",
    },
    {
      q: "Can I include my spouse, children, and dependent parents in a single application?",
      a: "Yes. All accredited sovereign programmes permit the main applicant to include their spouse, biological or legally adopted children up to age 28–30 (in full-time education), dependent parents aged 55–65+, and in select Caribbean jurisdictions, unmarried dependent siblings.",
    },
    {
      q: "Do I have to live in or physically visit the country to maintain my status?",
      a: "For Caribbean programmes (St. Kitts, Antigua, Dominica, Grenada, Saint Lucia) and Vanuatu, there are zero physical residency requirements. For European Golden Visas, requirements are minimal: Portugal requires just 7 days per year, Greece and Spain require zero days to maintain the golden visa residence card.",
    },
    {
      q: "What are the primary investment routes available across programmes?",
      a: "The two primary pathways are: (1) Non-refundable statutory contributions to government sovereign development funds (starting from USD 200,000); (2) Government-approved luxury freehold real estate or CMVM-regulated venture capital funds (starting from USD 200,000 – EUR 250,000), which can be liquidated after a statutory holding period of 5 to 7 years.",
    },
    {
      q: "How does Izzy Immigration protect client confidentiality and guarantee compliance?",
      a: "We operate under strict statutory legal privilege. All due diligence documents are handled through bank-grade encrypted protocols. Funds are paid exclusively to official central bank and government-designated escrow accounts. We perform pre-vetting World-Check and AML compliance screening before submission to ensure a 99.4% approval rate.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#f4f5f8] border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column (5 cols): Private Advisory Card & Live Stats */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-navy-950 text-white rounded-3xl p-8 border border-white/10 shadow-2xl space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
                  Private Advisory
                </span>
                <h3 className="text-2xl font-bold font-heading text-white">
                  Need Private Consultation?
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Our senior solicitors provide confidential pre-vetting assessments and bespoke family mobility structuring.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-2xl font-extrabold text-gold-400 font-heading block">55+</span>
                  <span className="text-[11px] text-gray-400 font-medium">Sovereign Programmes</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-2xl font-extrabold text-emerald-400 font-heading block">100%</span>
                  <span className="text-[11px] text-gray-400 font-medium">Pre-Vetted Dossiers</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-2xl font-extrabold text-white font-heading block">3,850+</span>
                  <span className="text-[11px] text-gray-400 font-medium">Approved Families</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-2xl font-extrabold text-gold-400 font-heading block">30+ Yrs</span>
                  <span className="text-[11px] text-gray-400 font-medium">Advisory Heritage</span>
                </div>
              </div>

              <div className="pt-2">
                <Link href="/contact" className="btn-hero-gold w-full justify-center">
                  Book a Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Interactive Accordion */}
          <div className="lg:col-span-7 space-y-4">
            <div className="space-y-2 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
                Frequently Asked Questions
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 font-heading">
                Clear Answers to Critical Sovereign Questions
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-xs transition-all"
                  >
                    <button
                      onClick={() => setOpenIdx(isOpen ? null : idx)}
                      className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-navy-900 hover:text-gold-600 transition-colors"
                    >
                      <span>{faq.q}</span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? "bg-gold-500 text-navy-950" : "bg-gray-100 text-gray-700"
                      }`}>
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-body leading-relaxed border-t border-gray-100">
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
  );
}
