"use client";

import React from "react";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/home/CtaBand";
import {
  ShieldCheck,
  Building2,
  Globe2,
  TreePine,
  Briefcase,
  FileCheck,
  Scale,
  Lock,
  ArrowRight,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";
import { createWhatsAppLink } from "@/lib/whatsapp";

const PRACTICES = [
  {
    icon: ShieldCheck,
    title: "Citizenship by Investment",
    desc: "Government-approved direct economic contribution, real estate, and government bond routes across the Caribbean (St. Kitts, Antigua, Dominica, Grenada, St. Lucia) and Europe (Malta, Turkey).",
    link: "/citizenship",
  },
  {
    icon: Globe2,
    title: "Residency & Golden Visas",
    desc: "Forty-six premier European, North American, and Middle Eastern residency routes (Portugal, Greece, Spain, Italy, UAE, USA EB-5, Canada Start-Up) matched to your relocation and family timeline.",
    link: "/residency",
  },
  {
    icon: Building2,
    title: "Global Real Estate Investment",
    desc: "Qualifying prime international property acquisitions that fulfill programme requirements while delivering capital appreciation and rental yield — vetted by in-country legal counsel.",
    link: "/real-estate",
  },
  {
    icon: TreePine,
    title: "Citizenship by Descent & Ancestry",
    desc: "Archival genealogical research and legal representation for statutory European citizenship claims (Italy, Ireland, Poland, Germany, Portugal Sephardic) — often with minimal capital outlay.",
    link: "/ancestry",
  },
  {
    icon: Briefcase,
    title: "Corporate & Tax Structuring",
    desc: "International company formation, banking establishment, and tax residency certificates designed to legitimately protect global revenues and enable frictionless capital movement.",
    link: "/contact",
  },
  {
    icon: FileCheck,
    title: "Forensic Due Diligence & Compliance",
    desc: "Pre-submission background checks, sanctions screening, and source-of-wealth auditing to ensure that every dossier satisfies rigorous statutory standards with 100% approval rates.",
    link: "/contact",
  },
];

const AUDIT_STEPS = [
  "Interpol & International Sanctions Pre-Screening",
  "PEP (Politically Exposed Persons) Risk Assessment",
  "Source-of-Funds & Capital Path Legal Substantiation",
  "Apostille, Consular Legalization & Certified Translation",
];

export default function OurExpertisePage() {
  return (
    <main className="w-full min-w-0 max-w-full overflow-hidden">
      <PageHero
        title="Our Practice Areas & Expertise"
        subtitle="Six interlocking advisory disciplines, one uncompromising benchmark: every dossier is prepared to withstand the most stringent sovereign due diligence audit."
        bgImage="/assets/imgs/banner-1/banner-man-img.png"
        crumb={[{ label: "About Us", href: "/about" }, { label: "Our Expertise" }]}
      />

      {/* Core Practice Areas */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="container-izzy">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="eyebrow eyebrow--center justify-center">Sovereign Disciplines</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 mt-2">
              Comprehensive Strategic Capabilities
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-ink-light mt-2">
              From statutory passport issuance to international real estate and ancestral restoration, our partners manage the entire legal spectrum.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {PRACTICES.map((p) => (
              <div
                key={p.title}
                className="card rounded-2xl sm:rounded-3xl p-5 sm:p-7 bg-white border border-surface-200 shadow-sm hover:shadow-md hover:border-gold-400/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-950 text-gold-400 mb-4 shadow-md">
                    <p.icon size={22} />
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold text-navy-900 mb-2 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-ink-light leading-relaxed mb-4">
                    {p.desc}
                  </p>
                </div>
                <Link
                  href={p.link}
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-gold-600 hover:text-navy-950 transition-colors pt-2 border-t border-surface-200/60"
                >
                  <span>Explore practice details</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Due Diligence Architecture */}
      <section className="py-12 sm:py-16 md:py-20 bg-surface-50">
        <div className="container-izzy">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 w-full min-w-0 space-y-4">
              <span className="eyebrow">Risk Mitigation</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 leading-tight">
                Institutional Due Diligence Architecture
              </h2>
              <p className="text-xs sm:text-sm md:text-[15px] text-ink-light leading-relaxed">
                Rejection or delay by a sovereign government Citizenship Unit is almost always caused by improper source-of-funds documentation or undisclosed regulatory records.
              </p>
              <p className="text-xs sm:text-sm md:text-[15px] text-ink-light leading-relaxed">
                Before submitting any application to government authorities, our compliance desk conducts an independent forensic audit to pre-vet all documents and substantiate financial legitimacy.
              </p>
            </div>

            <div className="lg:col-span-6 w-full min-w-0">
              <div className="rounded-2xl sm:rounded-3xl border border-surface-200 bg-white p-5 sm:p-7 shadow-sm space-y-3 sm:space-y-4">
                <h3 className="text-sm sm:text-base font-extrabold text-navy-900 mb-2">
                  Four-Tier Pre-Submission Verification:
                </h3>
                {AUDIT_STEPS.map((step) => (
                  <div
                    key={step}
                    className="flex items-center gap-3 p-3 sm:p-3.5 rounded-xl bg-surface-50 border border-surface-200/80"
                  >
                    <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-navy-900">{step}</span>
                  </div>
                ))}
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
