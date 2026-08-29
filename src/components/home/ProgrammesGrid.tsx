"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, DollarSign, ShieldCheck, Sparkles } from "lucide-react";
import { programs } from "@/data/programs";
import { Badge } from "@/components/ui/Badge";

export function ProgrammesGrid() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const tabs = [
    { id: "all", label: "All Programmes" },
    { id: "citizenship", label: "Citizenship by Investment" },
    { id: "residency", label: "Residency & Golden Visas" },
    { id: "europe", label: "European Pathways" },
    { id: "caribbean", label: "Caribbean Platinum Five" },
  ];

  const filtered = programs.filter((p) => {
    if (activeTab === "all") return true;
    if (activeTab === "citizenship") return p.type === "citizenship";
    if (activeTab === "residency") return p.type === "residency";
    if (activeTab === "europe") return p.region === "Europe";
    if (activeTab === "caribbean") return p.region === "Caribbean";
    return true;
  }).slice(0, 6);

  return (
    <section className="py-20 md:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-100 border border-gold-200 text-gold-700 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-gold-600" />
              <span>Programmes Worldwide</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 font-heading">
              Residency &amp; Citizenship — 55+ Sovereign Programmes
            </h2>
            <p className="text-sm md:text-base text-body">
              Explore premier statutory pathways offering lifelong visa-free travel, tax optimization, and direct multi-generational security.
            </p>
          </div>

          <Link href="/programmes" className="rr-btn shrink-0 self-start md:self-auto">
            View All 55+ Programmes <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10 pb-2 border-b border-gray-100">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === tab.id
                  ? "bg-navy-900 text-white shadow-md"
                  : "bg-[#f4f5f8] text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p) => {
            const flagSrc = p.flag.startsWith("/") || p.flag.startsWith("http") ? p.flag : `/${p.flag}`;
            const isCBI = p.type === "citizenship";

            return (
              <div key={p.id} className="visa__item group">
                {/* Top Row: Flag + Badge */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="relative w-12 h-8 rounded-md overflow-hidden shadow-xs border border-gray-200 bg-white shrink-0">
                    <Image src={flagSrc} alt={p.country} fill className="object-cover" sizes="48px" />
                  </div>
                  <Badge variant={isCBI ? "gold" : "navy"}>
                    {isCBI ? "Citizenship" : "Residency"}
                  </Badge>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow">
                  <h4 className="text-lg font-bold font-heading text-navy-900 mb-3 group-hover:text-gold-600 transition-colors line-clamp-1">
                    <Link href={`/programmes/${p.id}`}>{p.title}</Link>
                  </h4>

                  <p className="text-xs text-body mb-4 line-clamp-2 leading-relaxed">
                    {p.intro}
                  </p>

                  <div className="space-y-1.5 mb-5 p-3 rounded-xl bg-white border border-gray-100 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 font-medium">Investment:</span>
                      <span className="font-bold text-gold-600">{p.minInvestment}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 font-medium">Timeline:</span>
                      <span className="font-medium text-navy-900">{p.processing}</span>
                    </div>
                  </div>

                  {/* Bottom Row */}
                  <div className="pt-4 border-t border-gray-200/60 mt-auto flex items-center justify-between">
                    <Link
                      href={`/programmes/${p.id}`}
                      className="text-xs font-bold text-navy-900 group-hover:text-gold-600 transition-colors"
                    >
                      Explore Programme Details
                    </Link>
                    <Link
                      href={`/programmes/${p.id}`}
                      className="btn-circle-arrow"
                      aria-label={`Explore ${p.title}`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
