"use client";

import React from "react";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/home/CtaBand";
import {
  Award,
  ShieldCheck,
  Globe,
  Building2,
  Ship,
  Scale,
  Users,
  Compass,
  ArrowRight,
  CheckCircle2,
  Lock,
  MessageSquare,
} from "lucide-react";
import { createWhatsAppLink } from "@/lib/whatsapp";

const SERVICES = [
  {
    icon: Compass,
    title: "Strategic Advisory & Consulting",
    desc: "Bespoke guidance for high-net-worth individuals and family offices seeking international mobility, dual residency structuring, tax residence optimization, and generational wealth preservation.",
  },
  {
    icon: ShieldCheck,
    title: "Investment Immigration (CBI & RBI)",
    desc: "Direct access to premier government-approved Citizenship by Investment and Residency by Investment programmes across Europe, the Caribbean, North America, and the Middle East.",
  },
  {
    icon: Building2,
    title: "Global Real Estate Investment",
    desc: "Prime international residential and commercial acquisitions in the UK, UAE, Europe, USA, and the Caribbean — pre-vetted by local counsel for statutory qualification and investment growth.",
  },
  {
    icon: Ship,
    title: "Curated Cruise & Travel Journeys",
    desc: "Ultra-luxury discovery voyages and bespoke travel itineraries designed for discerning clients to experience future relocation destinations firsthand in supreme comfort.",
  },
];

const VALUES = [
  {
    icon: Scale,
    title: "Integrity & Statutory Compliance",
    desc: "Every dossier is prepared and audited under strict government compliance protocols, ensuring zero delays and 100% legal integrity.",
  },
  {
    icon: Lock,
    title: "Absolute Discretion & Privacy",
    desc: "We adhere to strict legal privilege and international confidentiality standards. Your family's financial and sovereign data is fiercely safeguarded.",
  },
  {
    icon: Users,
    title: "Single Accountable Mentor",
    desc: "No call centres or delegated junior clerks. A senior sovereign mobility partner personally oversees your file from initial vetting to passport handover.",
  },
  {
    icon: Award,
    title: "Lifetime Settlement Aftercare",
    desc: "Handing over your passport is not the finish line. We assist with tax residency certificates, local banking, family extensions, and document renewals.",
  },
];

const STATS = [
  { value: "30+", label: "Years of Advisory Experience" },
  { value: "55+", label: "Active Sovereign Corridors" },
  { value: "100%", label: "Pre-Vetted Statutory Files" },
  { value: "150+", label: "Visa-Free Access Countries" },
];

export default function AboutUsPage() {
  return (
    <main className="w-full min-w-0 max-w-full overflow-hidden">
      <PageHero
        title="About Izzy Migration Mentors"
        subtitle="We are a premier international consulting and advisory firm empowering global citizens with investment immigration, sovereign residency, prime international real estate, and bespoke lifestyle solutions."
        bgImage="/assets/imgs/banner-1/banner-man-img.png"
        crumb={[{ label: "About Us" }]}
      />

      {/* Who We Are */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="container-izzy">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Media Column */}
            <div className="lg:col-span-5 w-full min-w-0">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-surface-200 shadow-xl bg-navy-950">
                <img
                  src="/assets/imgs/choose-us/choose-us-left-img.png"
                  alt="Izzy Migration Mentors Senior Advisory Desk"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />
                
                {/* Floating Experience Badge */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 rounded-2xl bg-navy-900/95 border border-gold-400/40 p-4 backdrop-blur-md text-white">
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-500 text-navy-950 font-extrabold text-xl">
                      30+
                    </span>
                    <div>
                      <p className="text-sm font-extrabold text-white leading-tight">Years of Institutional Excellence</p>
                      <p className="text-xs text-gold-300 mt-0.5 font-medium">Sovereign Mobility &amp; Wealth Advisory</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Story Column */}
            <div className="lg:col-span-7 w-full min-w-0 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-600">
                <span className="h-0.5 w-6 bg-gold-500 rounded" />
                Who We Are
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 leading-tight">
                A Whole New World.<br />
                <span className="text-gold-600">Your Gateway To Global Mobility.</span>
              </h2>
              <p className="text-xs sm:text-sm md:text-base font-semibold text-navy-900">
                Global Mobility | Residency &amp; Citizenship Solutions | International Real Estate | Luxury Cruise Experiences.
              </p>
              <p className="text-xs sm:text-sm md:text-[15px] text-ink-light leading-relaxed">
                We are a premier international consulting and advisory firm dedicated to empowering individuals, families, entrepreneurs, and corporate clients with bespoke solutions in investment immigration, including Citizenship and Residency by Investment (CBI &amp; RBI), global real estate, cruise vacation experiences, luxury lifestyles, and strategic advisory services.
              </p>
              <p className="text-xs sm:text-sm md:text-[15px] text-ink-light leading-relaxed">
                With a client-centric approach and an extensive international network, we deliver tailored solutions that unlock global mobility, premium lifestyle access, and high-value investment opportunities across leading international markets, while maintaining the highest standards of professionalism, integrity, and confidentiality.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link href="/programmes" className="btn btn-gold text-xs sm:text-sm">
                  Explore Programmes <ArrowRight size={14} />
                </Link>
                <a
                  href={createWhatsAppLink({
                    type: "consultation",
                    message: "Hello Izzy Migration Mentors, I would like to schedule a private advisory consultation with Senior Counsel.",
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-navy text-xs sm:text-sm bg-[#25D366] hover:bg-[#128C7E] text-white border-0"
                >
                  <MessageSquare size={14} /> WhatsApp Senior Counsel
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="py-10 sm:py-12 bg-navy-950 text-white border-y border-white/10">
        <div className="container-izzy">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {STATS.map((s) => (
              <div key={s.label} className="p-2">
                <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gold-400 font-display mb-1">{s.value}</p>
                <p className="text-xs sm:text-sm text-white/70 font-medium leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Core Practice Areas */}
      <section className="py-12 sm:py-16 md:py-20 bg-surface-50">
        <div className="container-izzy">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="eyebrow eyebrow--center justify-center">What We Do</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 mt-2">
              Our Core Practice Areas
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-ink-light mt-2">
              Comprehensive global mobility and sovereign asset advisory tailored to your family's objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {SERVICES.map((srv) => (
              <div
                key={srv.title}
                className="card rounded-2xl sm:rounded-3xl p-5 sm:p-6 bg-white border border-surface-200 shadow-sm hover:shadow-md hover:border-gold-400/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-950 text-gold-400 mb-4 shadow-md">
                    <srv.icon size={22} />
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold text-navy-900 mb-2 leading-snug">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-ink-light leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sovereign Values & Commitment */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container-izzy">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="eyebrow eyebrow--center justify-center">Our Principles</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 mt-2">
              Institutional Standards You Can Trust
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-ink-light mt-2">
              We operate with uncompromising diligence, statutory precision, and absolute client confidentiality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl sm:rounded-3xl p-5 sm:p-6 bg-surface-50 border border-surface-200/80 shadow-2xs hover:bg-white hover:border-gold-400/40 hover:shadow-sm transition-all"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/15 text-gold-600 mb-4">
                  <v.icon size={20} />
                </span>
                <h3 className="text-sm sm:text-base font-extrabold text-navy-900 mb-2 leading-snug">
                  {v.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-ink-light leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand />
    </main>
  );
}
