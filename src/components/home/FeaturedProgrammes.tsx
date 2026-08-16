"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Shield, Landmark } from "lucide-react";
import { programs } from "@/data/programs";
import { ProgrammeCard } from "@/components/programmes/ProgrammeCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function FeaturedProgrammes() {
  const [activeType, setActiveType] = useState<"citizenship" | "residency">("citizenship");

  const citizenshipList = programs.filter((p) => p.type === "citizenship").slice(0, 6);
  const residencyList = programs.filter((p) => p.type === "residency").slice(0, 6);

  const displayList = activeType === "citizenship" ? citizenshipList : residencyList;

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <Badge variant="gold">Flagship Jurisdictions</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 font-heading">
              Premier Citizenship &amp; Residency Programmes
            </h2>
            <p className="text-sm md:text-base text-body">
              Explore sovereign passports and European Golden Visas with expedited processing, sovereign tax benefits, and global visa-free mobility.
            </p>
          </div>

          {/* Type Toggle Tabs */}
          <div className="flex items-center p-1 bg-surface-200 rounded-2xl border border-gray-200/80 self-start md:self-auto">
            <button
              onClick={() => setActiveType("citizenship")}
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all",
                activeType === "citizenship"
                  ? "bg-navy-900 text-white shadow-sm"
                  : "text-body hover:text-navy-900"
              )}
            >
              <Shield className="w-4 h-4 text-gold-500" />
              <span>Citizenship (CBI)</span>
            </button>
            <button
              onClick={() => setActiveType("residency")}
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all",
                activeType === "residency"
                  ? "bg-navy-900 text-white shadow-sm"
                  : "text-body hover:text-navy-900"
              )}
            >
              <Landmark className="w-4 h-4 text-gold-500" />
              <span>Residency &amp; Golden Visas</span>
            </button>
          </div>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayList.map((program) => (
            <ProgrammeCard key={program.id} program={program} />
          ))}
        </div>

        {/* Bottom CTA to full catalogue */}
        <div className="mt-14 text-center">
          <Button href="/programmes" variant="outline" size="lg">
            View All 55+ Sovereign Programmes Catalogue
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
