"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/home/CtaBand";
import { AncestryWizard } from "@/components/ancestry/AncestryWizard";
import {
  TreePine,
  FileCheck2,
  Scale,
  Award,
  ArrowRight,
  ChevronDown,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";
import { createWhatsAppLink } from "@/lib/whatsapp";

const PILLARS = [
  {
    icon: TreePine,
    title: "Free Lineage Assessment",
    desc: "We analyze birth records and descent claims across Italy, Ireland, Poland, Germany, and Portugal to establish your legal qualification path.",
  },
  {
    icon: FileCheck2,
    title: "Archival Record Sourcing",
    desc: "Our genealogy researchers obtain certified archival birth, marriage, and naturalization certificates directly from international municipal registries.",
  },
  {
    icon: Scale,
    title: "Legalization & Apostilles",
    desc: "Every record is sworn-translated, apostilled, and assembled into an airtight statutory petition ready for consular or judicial lodging.",
  },
  {
    icon: Award,
    title: "Passport Issuance & Settlement",
    desc: "From consulate appointments to physical passport collection, citizenship certificates, and registering your children.",
  },
];

const FAQS = [
  {
    q: "How far back can ancestry claims go?",
    a: "It depends on the country. Italy has no generation limit under Jus Sanguinis provided the chain is unbroken and the ancestor did not naturalize prematurely. Ireland requires a grandparent born on the island of Ireland. Poland and Germany can extend to great-grandparents.",
  },
  {
    q: "Is citizenship by descent different from citizenship by investment?",
    a: "Yes. Ancestry routes are based on statutory birthright rather than capital deployment. While they involve document research rather than investment funds, they result in full sovereign citizenship that passes automatically to future generations.",
  },
  {
    q: "Can my spouse and children be included?",
    a: "Yes. Minor children typically obtain citizenship automatically upon registration. Spouses can often apply for expedited citizenship or permanent residency once your citizenship is recognized.",
  },
];

export default function CitizenshipbyAncestryPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="w-full min-w-0 max-w-full overflow-hidden">
      <PageHero
        title="Citizenship by Descent & Ancestry"
        subtitle="Your family history may already hold the key to a tier-1 European passport. We trace qualifying lineage, retrieve municipal archives, and manage the entire statutory petition."
        bgImage="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1600&q=85"
        crumb={[{ label: "Citizenship by Descent" }]}
      />

      {/* Interactive Ancestry Wizard Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-surface-50">
        <div className="container-izzy">
          <div className="max-w-4xl mx-auto">
            <AncestryWizard />
          </div>
        </div>
      </section>

      {/* 4 Pillars */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="container-izzy">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="eyebrow eyebrow--center justify-center">What We Do</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 mt-2">
              How Ancestry-Based Routes Work
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-ink-light mt-2">
              Our archival research team handles the complex multinational paperwork so you don't have to.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {PILLARS.map((p) => (
              <div
                key={p.title}
                className="card rounded-2xl sm:rounded-3xl p-5 sm:p-6 bg-white border border-surface-200 shadow-sm hover:shadow-md hover:border-gold-400/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-950 text-gold-400 mb-4 shadow-md">
                    <p.icon size={22} />
                  </span>
                  <h3 className="text-sm sm:text-base font-extrabold text-navy-900 mb-2 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-ink-light leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages & FAQs */}
      <section className="py-12 sm:py-16 md:py-20 bg-surface-50">
        <div className="container-izzy">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: Advantages */}
            <div className="lg:col-span-6 w-full min-w-0 space-y-4">
              <span className="eyebrow">The Izzy Advantage</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 leading-tight">
                Why Lineage Entitlement Is Worth Checking
              </h2>
              <ul className="space-y-3 list-none p-0 my-4 text-xs sm:text-sm text-navy-900 font-medium">
                <li className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-surface-200 shadow-2xs">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>No capital investment required — eligibility is grounded in genealogy law.</span>
                </li>
                <li className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-surface-200 shadow-2xs">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>Citizenship passes automatically to your children and future descendants.</span>
                </li>
                <li className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-surface-200 shadow-2xs">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>Unrestricted right to live, work, study, and buy property across the European Union.</span>
                </li>
                <li className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-surface-200 shadow-2xs">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>Transparent, fixed legal fees covering archival retrieval and apostilles.</span>
                </li>
              </ul>
            </div>

            {/* Right: FAQs */}
            <div className="lg:col-span-6 w-full min-w-0 space-y-4">
              <span className="eyebrow">Common Inquiries</span>
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
