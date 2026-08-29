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
  Key,
  Coins,
  Sparkles,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { assetPath } from "@/lib/brand";
import { createWhatsAppLink } from "@/lib/whatsapp";

const REAL_ESTATE_CORRIDORS = [
  {
    id: "panama-qualified-investor",
    title: "Panama City Luxury Towers & Oceanfront Villas",
    country: "Panama",
    flag: "/assets/imgs/flags/pa.svg",
    region: "Americas",
    min: "USD 300,000",
    yieldRate: "6.5% – 9.0% / year",
    holding: "Immediate Permanent Residency",
    tag: "Law 256 Fast-Track PR (30 Days)",
    programLink: "/programmes/panama-qualified-investment",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=85",
    desc: "Prime freehold residential penthouses in Ocean Reef Islands, Costa del Este, and Boquete Highlands. Enacted under Executive Decree Law 256 to grant direct Permanent Residency in 30 days with 0% foreign income tax in a stable US Dollar economy.",
    features: [
      "Immediate permanent residency in 30 days (no provisional wait)",
      "High rental demand driven by multinational regional HQs (SEM law)",
      "0% tax on foreign-sourced income, capital gains, or offshore assets",
      "US Dollar economy with 100% full foreign freehold title ownership",
    ],
  },
  {
    id: "st-kitts-luxury-resorts",
    title: "St. Kitts & Nevis Five-Star Branded Resort Shares",
    country: "St. Kitts & Nevis",
    flag: "/assets/imgs/flags/kn.svg",
    region: "Caribbean",
    min: "USD 400,000",
    yieldRate: "4.0% – 6.0% / year",
    holding: "7 Years (Contractual Buyback)",
    tag: "Direct Sovereign Passport",
    programLink: "/programmes/st-kitts-citizenship",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=85",
    desc: "Government-approved five-star resort villas and private marina condominiums in Christophe Harbour. Direct Commonwealth citizenship and lifetime passports issued in 6 to 9 months with zero physical stay required.",
    features: [
      "Direct citizenship for main applicant, spouse, children, and parents",
      "Contractual developer buyback option upon completing 7-year holding period",
      "Visa-free travel to 150+ countries including UK and Singapore",
      "Zero personal income, wealth, capital gains, or inheritance taxes",
    ],
  },
  {
    id: "greece-athens-cyclades",
    title: "Greece Athens Riviera & Cyclades Luxury Villas",
    country: "Greece",
    flag: "/assets/imgs/flags/gr.svg",
    region: "Europe",
    min: "EUR 250,000 – 800,000",
    yieldRate: "5.0% – 7.5% / year",
    holding: "5-Year Renewable Golden Visa",
    programLink: "/programmes/greece-golden-visa",
    img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=85",
    desc: "Prime residential and converted boutique properties in Athens Riviera, Piraeus, and the Aegean Islands. Grants 5-year renewable Golden Visa residency with full Schengen Area mobility for the whole family.",
    features: [
      "Full freedom of movement across 29 Schengen Area countries",
      "Commercial conversion options qualify at lower statutory threshold",
      "Robust holiday and executive rental yields in prime tourism hubs",
      "Pathway to EU Permanent Residency and Greek citizenship",
    ],
  },
  {
    id: "cyprus-limassol-marina",
    title: "Cyprus Limassol & Paphos Coastal Residences",
    country: "Cyprus",
    flag: "/assets/imgs/flags/cy.svg",
    region: "Europe",
    min: "EUR 300,000 + VAT",
    yieldRate: "5.5% – 8.0% / year",
    holding: "Lifetime Permanent Residency",
    programLink: "/programmes/cyprus-pr",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=85",
    desc: "Newly constructed prime beachfront apartments and hillside villas. Grants lifetime EU permanent residency in 2 to 3 months under a British Common Law legal framework with 0% tax on dividends for non-doms.",
    features: [
      "Lifetime permanent residence with no expiry date",
      "British Common Law land registry and property title protection",
      "Non-Dom regime: 0% tax on dividends, interest, and capital gains",
      "English-speaking education and world-class private healthcare",
    ],
  },
  {
    id: "uae-dubai-prime",
    title: "Dubai Downtown & Palm Jumeirah Ultra-Luxury Suites",
    country: "United Arab Emirates",
    flag: "/assets/imgs/flags/ae.svg",
    region: "Middle East & Asia",
    min: "AED 2,000,000 (~$545,000)",
    yieldRate: "7.0% – 10.0% / year",
    holding: "10-Year Renewable Golden Visa",
    programLink: "/programmes/uae-residence",
    img: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1000&q=85",
    desc: "Freehold luxury branded apartments and waterfront penthouses in Dubai Marina, Palm Jumeirah, and Downtown Dubai. Unlocks 10-year self-sponsored Golden Visa with 0% personal tax and high capital appreciation.",
    features: [
      "10-Year self-sponsored Golden Visa with zero local employer ties",
      "0% personal income tax, 0% capital gains, and 0% wealth tax",
      "No minimum stay requirement (stay outside UAE without losing visa)",
      "High rental yields with turnkey property management in Dubai",
    ],
  },
  {
    id: "grenada-silversands",
    title: "Grenada Luxury Five-Star Coastal Hotel Suites",
    country: "Grenada",
    flag: "/assets/imgs/flags/gd.svg",
    region: "Caribbean",
    min: "USD 270,000",
    yieldRate: "4.5% – 6.5% / year",
    holding: "5 Years (Contractual Buyback)",
    programLink: "/programmes/grenada-citizenship",
    img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=85",
    desc: "Government-approved luxury resort developments along Grand Anse Beach. Grants direct citizenship and opens the exclusive pathway to the United States E-2 Treaty Investor Visa.",
    features: [
      "Direct second passport with visa-free travel to UK, China, and Schengen",
      "Exclusive Caribbean route holding active U.S. E-2 Investor Visa treaty",
      "Full family inclusion including siblings, parents, and children under 30",
      "Contractual buyback mechanism after statutory 5-year holding period",
    ],
  },
];

const STEPS = [
  {
    num: "01",
    title: "Statutory Qualification & Title Vetting",
    desc: "We verify minimum investment thresholds, location zoning, property classification, and mandatory holding periods against the latest 2026 immigration statutes.",
  },
  {
    num: "02",
    title: "Forensic Legal Due Diligence",
    desc: "Every property in our portfolio undergoes forensic title audits, encumbrance searches, and valuation checks by licensed in-country real estate solicitors.",
  },
  {
    num: "03",
    title: "Capital Yield & Resale Strategy",
    desc: "We evaluate rental yields, currency stability, property management infrastructure, and exit liquidity to ensure your asset performs commercially.",
  },
  {
    num: "04",
    title: "Turnkey Acquisition & Residency Lodgement",
    desc: "From escrow fund routing and sales agreements to land registry deed registration and residency application lodgement, we manage the entire process.",
  },
];

const FAQS = [
  {
    q: "Can I rent out my qualifying real estate investment for commercial income?",
    a: "Yes! The vast majority of sovereign programmes (including Panama, Greece, Cyprus, UAE, and the Caribbean) allow investors to lease their qualifying property for rental income while holding residency or citizenship.",
  },
  {
    q: "How does the Panama Qualified Investor Visa (Law 256) work?",
    a: "Under Executive Decree Law 256, investing at least USD 300,000 in titled Panama real estate grants immediate Permanent Residency in just 30 days without any provisional waiting period, with zero tax on foreign income.",
  },
  {
    q: "Must I visit the country in person to purchase the property?",
    a: "No. Our in-country legal counsel can act on your behalf under a Power of Attorney (PoA) to inspect titles, sign sales contracts, and register ownership deeds without requiring initial international travel.",
  },
  {
    q: "How long must I retain the property to maintain my residency or passport?",
    a: "For Citizenship by Investment (Caribbean), the mandatory holding period is typically 5 to 7 years, after which the property can be resold without forfeiting citizenship. For Golden Visas (Greece, Cyprus, UAE), you retain the property as long as you maintain your resident status.",
  },
];

export default function GlobalRealEstatePage() {
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filteredCorridors =
    selectedRegion === "All"
      ? REAL_ESTATE_CORRIDORS
      : REAL_ESTATE_CORRIDORS.filter((c) => c.region === selectedRegion);

  const whatsappUrl = createWhatsAppLink({
    type: "consultation",
    message: "Hello Izzy Migration Mentors, I would like to inquire about your Sovereign Luxury Real Estate portfolios and residency linkages.",
  });

  return (
    <main className="w-full min-w-0 max-w-full overflow-hidden">
      {/* Hero Banner with Ultra-Luxury Villa Photography */}
      <PageHero
        title="Sovereign Real Estate &amp; Global Luxury Investment"
        subtitle="Curated government-approved prime properties that deliver robust commercial rental yields, capital growth, and direct pathways to sovereign residency and citizenship."
        bgImage="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1800&q=85"
        crumb={[{ label: "Global Real Estate" }]}
      />

      {/* Metrics Banner */}
      <section className="bg-navy-950 py-8 text-white border-y border-gold-400/20" aria-label="Real Estate Metrics">
        <div className="container-izzy">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gold-400 font-heading">
                USD 300k+
              </p>
              <p className="text-xs sm:text-[13px] text-white/80 font-medium">
                Panama 30-Day PR (Law 256)
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gold-400 font-heading">
                6.5% – 10%
              </p>
              <p className="text-xs sm:text-[13px] text-white/80 font-medium">
                Prime Rental Yields
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gold-400 font-heading">
                100%
              </p>
              <p className="text-xs sm:text-[13px] text-white/80 font-medium">
                Freehold &amp; Deed Title Vetting
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gold-400 font-heading">
                5 – 7 Yrs
              </p>
              <p className="text-xs sm:text-[13px] text-white/80 font-medium">
                Guaranteed Buyback Options
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Acquisition Framework */}
      <section className="py-14 sm:py-20 bg-white" aria-label="Acquisition Framework">
        <div className="container-izzy">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="eyebrow eyebrow--center justify-center">Property Meets Programme</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 mt-2 font-heading">
              End-to-End Sovereign Real Estate Advisory
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-ink-light mt-2 font-normal">
              We eliminate regulatory pitfalls, hidden encumbrances, and overinflated prices so your property investment succeeds on all fronts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s) => (
              <div
                key={s.num}
                className="rounded-3xl p-6 sm:p-7 bg-surface-50 border border-surface-200 shadow-sm hover:border-gold-400/60 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-gold-500 font-display block mb-2">
                    {s.num}
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold text-navy-900 mb-2 font-heading leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-ink-light leading-relaxed font-normal">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Global Real Estate Portfolio */}
      <section className="py-14 sm:py-20 bg-surface-50 border-t border-surface-200" aria-label="Global Real Estate Inventory">
        <div className="container-izzy">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="eyebrow eyebrow--center justify-center">Curated Portfolios</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 mt-2 font-heading">
              Top Sovereign Real Estate Corridors
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-ink-light mt-2 font-normal">
              Explore government-approved freehold developments, luxury branded resorts, and high-yield metropolitan penthouses.
            </p>

            {/* Region Filter Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {["All", "Americas", "Caribbean", "Europe", "Middle East & Asia"].map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  type="button"
                  className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all duration-200 ${
                    selectedRegion === region
                      ? "bg-navy-950 text-white shadow-md shadow-navy-950/20"
                      : "bg-white text-ink-dark border border-surface-200 hover:bg-surface-100 hover:text-navy-950"
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCorridors.map((prop) => (
              <div
                key={prop.id}
                className="group flex flex-col justify-between overflow-hidden rounded-[28px] border border-surface-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-400 hover:shadow-xl"
              >
                <div>
                  {/* Photo with Country Tag */}
                  <div className="relative h-56 w-full overflow-hidden bg-navy-950">
                    <img
                      src={assetPath(prop.img)}
                      alt={prop.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                    
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                      <div className="h-6 w-8 overflow-hidden rounded shadow bg-white border border-white/40">
                        <img src={assetPath(prop.flag)} alt="" className="h-full w-full object-cover" />
                      </div>
                      <span className="text-xs font-bold text-white drop-shadow">
                        {prop.country}
                      </span>
                    </div>

                    <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full bg-navy-950/90 px-3 py-1 text-[10.5px] font-extrabold uppercase tracking-wider text-gold-300 backdrop-blur-md border border-white/20">
                      <Sparkles size={11} className="text-gold-400" />
                      {prop.tag}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-extrabold text-navy-900 group-hover:text-gold-600 transition-colors font-heading leading-snug">
                      {prop.title}
                    </h3>

                    {/* Financial Metrics Strip */}
                    <div className="mt-3.5 grid grid-cols-2 gap-2 rounded-xl bg-surface-50 p-3 text-xs border border-surface-200">
                      <div>
                        <span className="text-[10.5px] font-bold text-ink-light block">Min Investment:</span>
                        <span className="font-extrabold text-navy-900">{prop.min}</span>
                      </div>
                      <div>
                        <span className="text-[10.5px] font-bold text-ink-light block">Estimated Yield:</span>
                        <span className="font-extrabold text-gold-600">{prop.yieldRate}</span>
                      </div>
                    </div>

                    <p className="mt-3 text-xs sm:text-[13px] text-ink-light leading-relaxed font-normal">
                      {prop.desc}
                    </p>

                    {/* Key Property Features */}
                    <div className="mt-4 space-y-1.5 pt-3 border-t border-surface-200">
                      {prop.features.map((f, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-[11.5px] text-navy-900 font-medium">
                          <CheckCircle2 size={12} className="text-gold-600 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 pt-0 space-y-2">
                  <Link
                    href={prop.programLink}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-navy-950 hover:bg-gold-500 text-white hover:text-navy-950 text-xs font-extrabold transition-all shadow-sm"
                  >
                    <span>View Programme Pathway</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-14 sm:py-20 bg-white" aria-label="Real Estate FAQs">
        <div className="container-izzy">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center space-y-2 mb-8">
              <span className="eyebrow eyebrow--center justify-center">Legal &amp; Financial Clarity</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 font-heading">
                Sovereign Real Estate FAQs
              </h2>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-surface-200 bg-surface-50/60 overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left text-sm font-extrabold text-navy-900 hover:text-gold-600 transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        size={16}
                        className={`text-gold-600 transition-transform duration-200 shrink-0 ml-4 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-[13.5px] text-ink-light leading-relaxed border-t border-surface-200/60">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Global Call to Action */}
      <CtaBand />
    </main>
  );
}
