import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHead } from "@/components/ui/SectionHead";
import { assetPath } from "@/lib/brand";

export function VisaCategories() {
  const categories = [
    {
      title: "Caribbean Citizenship by Investment",
      desc: "Direct second passports granting 150+ visa-free destinations with zero physical residency.",
      count: "5 Sovereign Programmes",
      img: "/assets/imgs/programs/st-kitts-citizenship.webp",
      flag: "/assets/imgs/flags/kn.svg",
      href: "/citizenship",
      meta: "From USD 200,000",
    },
    {
      title: "European Golden Visas & Residency",
      desc: "Permanent residence cards in Portugal, Greece, Spain & Italy granting unrestricted Schengen access.",
      count: "12 European Jurisdictions",
      img: "/assets/imgs/programs/portugal-golden-visa.webp",
      flag: "/assets/imgs/flags/pt.svg",
      href: "/residency",
      meta: "From EUR 250,000",
    },
    {
      title: "North America & Start-Up Visas",
      desc: "Direct permanent residency pathways through innovation, business expansion & EB-5 / SUV.",
      count: "Canada & United States",
      img: "/assets/imgs/programs/canada-startup.webp",
      flag: "/assets/imgs/flags/ca.svg",
      href: "/programmes",
      meta: "Direct PR Channels",
    },
    {
      title: "Global Prime Real Estate Acquisition",
      desc: "Government-approved freehold property developments with rental yield & capital repatriation.",
      count: "Sovereign Asset Classes",
      img: "/assets/imgs/programs/greece-golden-visa.webp",
      flag: "/assets/imgs/flags/gr.svg",
      href: "/real-estate",
      meta: "Escrow-Protected",
    },
    {
      title: "Citizenship by Ancestry & Descent",
      desc: "Reclaim your European heritage and secure full EU passport rights through ancestral descent.",
      count: "Italy, Ireland, Poland & More",
      img: "/assets/imgs/programs/italy-golden-visa.webp",
      flag: "/assets/imgs/flags/it.svg",
      href: "/ancestry",
      meta: "Direct Naturalization",
    },
    {
      title: "Tax Optimization & Global Settlement",
      desc: "Territorial tax regimes, non-dom status and family wealth governance across sovereign corridors.",
      count: "Private Advisory Desks",
      img: "/assets/imgs/programs/cyprus-pr.webp",
      flag: "/assets/imgs/flags/cy.svg",
      href: "/expertise",
      meta: "Bespoke Structuring",
    },
  ];

  return (
    <section className="section-space bg-surface-100 border-t border-surface-200" aria-label="Residency and Citizenship Pathways">
      <div className="container-izzy">
        <SectionHead
          eyebrow="Programmes Worldwide"
          title="Residency &amp; Citizenship Pathways"
          text="Explore sovereign investment routes designed for unrestricted mobility, family security, and wealth preservation."
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((c, idx) => (
            <Link
              key={idx}
              href={c.href}
              className="group flex flex-col justify-between overflow-hidden rounded-[28px] border border-surface-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-400 hover:shadow-xl"
            >
              {/* Destination Photo Banner */}
              <div className="relative h-52 w-full overflow-hidden bg-navy-950">
                <img
                  src={assetPath(c.img)}
                  alt={c.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/30 to-transparent" />

                {/* Country Flag Badge */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-2 rounded-full bg-navy-950/80 border border-white/20 px-3 py-1 text-[11px] font-extrabold text-white backdrop-blur-md shadow-sm">
                  <div className="h-4 w-6 overflow-hidden rounded-xs border border-white/30">
                    <img src={assetPath(c.flag)} alt="" className="h-full w-full object-cover" />
                  </div>
                  <span>{c.count}</span>
                </div>

                {/* Statutory Minimum Pill */}
                <div className="absolute bottom-3.5 right-3.5">
                  <span className="inline-flex rounded-xl bg-gold-500 text-navy-950 px-3 py-1 text-[11.5px] font-extrabold shadow-md">
                    {c.meta}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                <div>
                  <h3 className="text-[17px] font-extrabold text-navy-900 group-hover:text-gold-600 transition-colors font-heading leading-snug">
                    {c.title}
                  </h3>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-ink-light font-normal">
                    {c.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-surface-100 flex items-center justify-between">
                  <span className="text-[12px] font-extrabold text-navy-900 group-hover:text-gold-600 transition-colors">
                    Explore Sovereign Corridor
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-100 text-navy-900 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 sm:mt-14 text-center px-2">
          <Link
            href="/programmes"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl border-2 border-navy-900 bg-white hover:bg-navy-950 hover:text-white text-navy-950 px-5 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-base font-extrabold shadow-sm hover:shadow-md transition-all duration-300 text-center"
          >
            <span>Explore All 55 Sovereign Programmes</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}