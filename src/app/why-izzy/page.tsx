"use client";

import React from "react";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/home/CtaBand";
import {
  UserCheck,
  Scale,
  ShieldCheck,
  Globe2,
  Lock,
  Handshake,
  ArrowRight,
  MessageSquare,
  FileCheck2,
  Send,
  Award,
} from "lucide-react";
import { createWhatsAppLink } from "@/lib/whatsapp";

const PILLARS = [
  {
    icon: UserCheck,
    title: "One Mentor, One File",
    desc: "Your dedicated senior mobility mentor personally manages your entire portfolio. No call centres or juniors — one accountable partner from initial consultation to passport in hand.",
  },
  {
    icon: Scale,
    title: "Honest, Unbiased Advisory",
    desc: "If a programme has hidden tax implications or regulatory risks for your profile, we tell you upfront. Our recommendations are built around your family's objectives — never around commission.",
  },
  {
    icon: ShieldCheck,
    title: "Statutory Compliance First",
    desc: "Source-of-funds, forensic background due diligence, and legal document preparation are handled by in-house legal experts prior to submission to ensure 100% statutory clearance.",
  },
  {
    icon: Globe2,
    title: "55+ Sovereign Corridors",
    desc: "Direct government access to citizenship and residency routes across the Caribbean, Europe, the Americas, and Asia-Pacific — objectively evaluated side-by-side for your family.",
  },
  {
    icon: Lock,
    title: "Absolute Discretion & Privacy",
    desc: "Global mobility is deeply confidential. Your personal, corporate, and financial records are held under strict legal confidentiality and international GDPR standards.",
  },
  {
    icon: Handshake,
    title: "Lifetime Settlement Aftercare",
    desc: "Passport approval is just the beginning. We support you through tax residency certificates, international banking setup, passport renewals, and adding future generations.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Confidential Assessment",
    desc: "We review your nationality, family composition, budget, and travel objectives against statutory requirements across all 55+ jurisdictions.",
  },
  {
    num: "02",
    title: "Strategy & Sovereign Roadmap",
    desc: "You receive an exact written proposal detailing qualifying investments, total statutory government fees, due diligence milestones, and realistic timelines.",
  },
  {
    num: "03",
    title: "Document Archiving & Notarization",
    desc: "Our legal team gathers, translates, legalizes, apostilles, and verifies every required document and source-of-funds dossier before submission.",
  },
  {
    num: "04",
    title: "Government Submission & Approval",
    desc: "We liaise directly with government Citizenship Units, monitor file progress, and coordinate the secure physical delivery of your passports and residency cards.",
  },
];

export default function WhyChooseUsPage() {
  return (
    <main className="w-full min-w-0 max-w-full overflow-hidden">
      <PageHero
        title="Why Choose Izzy Immigration"
        subtitle="We are not a form-filling agency. Izzy Immigration is a partner-led sovereign mobility advisory — delivering institutional precision, transparent counsel, and life-changing global freedom."
        bgImage="/assets/imgs/banner-1/banner-man-img.png"
        crumb={[{ label: "About Us", href: "/about" }, { label: "Why Choose Izzy" }]}
      />

      {/* The Izzy Difference */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="container-izzy">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="eyebrow eyebrow--center justify-center">The Izzy Difference</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 mt-2">
              Advice You Can Actually Trust
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-ink-light mt-2">
              Anyone can sell a visa. We ensure the programme you invest in is legally compliant, cost-effective, and guaranteed for approval.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {PILLARS.map((p) => (
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
                  <p className="text-xs sm:text-[13.5px] text-ink-light leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work (4 Steps) */}
      <section className="py-12 sm:py-16 md:py-20 bg-surface-50">
        <div className="container-izzy">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="eyebrow eyebrow--center justify-center">Execution Architecture</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 mt-2">
              From First Call to Passport in Hand
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-ink-light mt-2">
              Our proven 4-stage advisory methodology guarantees seamless navigation of international statutory requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {STEPS.map((s) => (
              <div
                key={s.num}
                className="rounded-2xl sm:rounded-3xl p-5 sm:p-6 bg-white border border-surface-200 shadow-sm hover:border-gold-400/50 hover:shadow-md transition-all flex flex-col justify-between"
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

      {/* Experience the Difference CTA */}
      <CtaBand />
    </main>
  );
}
