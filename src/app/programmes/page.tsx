import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ProgrammeCatalogue } from "@/components/programmes/ProgrammeCatalogue";
import { CtaBand } from "@/components/home/CtaBand";
import { ShieldCheck, Award, Globe, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Global Citizenship & Residency Programmes | Izzy Migration Mentors",
  description:
    "Explore 55+ premier sovereign citizenship and residency by investment programmes worldwide. St. Kitts, Antigua, Portugal, Greece, Malta, Cyprus, Dubai, USA, Canada, and Singapore.",
};

const STATS = [
  { icon: Award, value: "55+", label: "Active Sovereign Programmes" },
  { icon: Globe, value: "30+", label: "Sovereign Jurisdictions" },
  { icon: Building2, value: "100%", label: "Direct Government Channels" },
  { icon: ShieldCheck, value: "3+ Years", label: "Institutional Legal Experience" },
];

export default function AllProgrammesPage() {
  return (
    <>
      <PageHero
        title="Global Residency & Citizenship Programmes"
        subtitle="Explore premier government-approved citizenship and residency by investment routes across 30+ jurisdictions worldwide. Compare investment thresholds, processing timelines, and strategic benefits in one place."
        bgImage="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85"
        crumb={[{ label: "All Programmes" }]}
      />

      <section className="section-space bg-surface-50">
        <div className="container-izzy">
          {/* Quick Metrics Bar */}
          <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 rounded-2xl sm:rounded-3xl border border-surface-200 bg-white p-4 sm:p-6 shadow-sm w-full min-w-0">
            {STATS.map((s) => (
              <div key={s.label} className="flex items-center gap-3 min-w-0 p-1 sm:p-0">
                <span className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-2xl bg-gold-500/15 text-gold-600">
                  <s.icon size={18} className="sm:w-5 sm:h-5" />
                </span>
                <div className="min-w-0 flex-1 overflow-hidden">
                  <p className="text-lg sm:text-xl font-extrabold text-navy-900 leading-tight truncate">{s.value}</p>
                  <p className="text-[11.5px] sm:text-[12px] font-semibold text-ink-light leading-tight mt-0.5 truncate">{s.label}</p>
                </div>
              </div>
            ))}
          </div>

          <ProgrammeCatalogue />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
