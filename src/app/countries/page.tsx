"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/home/CtaBand";
import { programs } from "@/data/programs";
import { Globe2, ArrowRight, ShieldCheck, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const REGIONS = [
  { id: "all", label: "All Jurisdictions" },
  { id: "Caribbean", label: "Caribbean" },
  { id: "Europe", label: "Europe" },
  { id: "Americas", label: "Americas" },
  { id: "Asia-Pacific", label: "Asia-Pacific" },
  { id: "Africa & Middle East", label: "Africa & Middle East" },
];

export default function CountriesJurisdictionsPage() {
  const [selectedRegion, setSelectedRegion] = useState("all");

  // Group unique countries from programs data
  const countryMap = new Map<string, { country: string; flag?: string; region: string; count: number; minInvestment: string; sampleId: string }>();

  programs.forEach((p) => {
    const existing = countryMap.get(p.country);
    if (!existing) {
      countryMap.set(p.country, {
        country: p.country,
        flag: p.flag,
        region: p.region,
        count: 1,
        minInvestment: p.minInvestment,
        sampleId: p.id,
      });
    } else {
      existing.count += 1;
    }
  });

  const allCountries = Array.from(countryMap.values());
  const filteredCountries = selectedRegion === "all"
    ? allCountries
    : allCountries.filter((c) => c.region === selectedRegion);

  return (
    <main className="w-full min-w-0 max-w-full overflow-hidden">
      <PageHero
        title="Sovereign Jurisdictions & Countries"
        subtitle="Explore over 30 global jurisdictions offering government-approved citizenship, golden visas, and residency by investment programmes."
        bgImage="/assets/imgs/breadcrumb/breadcrumb.png"
        crumb={[{ label: "Countries" }]}
      />

      <section className="py-12 sm:py-16 md:py-20 bg-surface-50">
        <div className="container-izzy">
          {/* Region Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-10 max-w-full overflow-x-auto no-scrollbar pb-1">
            {REGIONS.map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => setSelectedRegion(r.id)}
                className={cn(
                  "px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 border whitespace-nowrap",
                  selectedRegion === r.id
                    ? "bg-navy-950 text-gold-400 border-navy-950 shadow-sm"
                    : "bg-white text-navy-800 border-surface-200 hover:border-gold-400"
                )}
              >
                {r.label}
              </button>
            ))}
          </div>

          {/* Countries Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {filteredCountries.map((c) => (
              <Link
                key={c.country}
                href={`/programmes?search=${encodeURIComponent(c.country)}`}
                className="group card rounded-2xl sm:rounded-3xl p-5 bg-white border border-surface-200 shadow-sm hover:shadow-md hover:border-gold-400/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-gold-600">
                      {c.region}
                    </span>
                    <span className="chip chip--navy text-[10px] py-0.5 px-2">
                      {c.count} {c.count === 1 ? "Route" : "Routes"}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-navy-900 group-hover:text-gold-600 transition-colors mb-1">
                    {c.country}
                  </h3>
                  <p className="text-xs text-ink-light">
                    From <strong className="text-navy-900 font-semibold">{c.minInvestment}</strong>
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-surface-100 flex items-center justify-between text-xs font-bold text-navy-950 group-hover:text-gold-600 transition-colors">
                  <span>Explore Programmes</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand />
    </main>
  );
}
