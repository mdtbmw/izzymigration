import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ProgrammeCatalogue } from "@/components/programmes/ProgrammeCatalogue";
import { CtaBand } from "@/components/home/CtaBand";
import { ShieldCheck, Award, Globe, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Global Citizenship & Residency Programmes | Izzy Immigration",
  description:
    "Explore 55+ premier sovereign citizenship and residency by investment programmes worldwide. St. Kitts, Antigua, Portugal, Greece, Malta, Cyprus, Dubai, USA, Canada, and Singapore.",
};

const STATS = [
  { icon: Award, value: "55+", label: "Active Sovereign Programmes" },
  { icon: Globe, value: "30+", label: "Sovereign Jurisdictions" },
  { icon: Building2, value: "100%", label: "Direct Government Channels" },
  { icon: ShieldCheck, value: "30+ Years", label: "Institutional Legal Experience" },
];

export default function AllProgrammesPage() {
  return (
    <>
      <PageHero
        title="Global Residency & Citizenship Programmes"
        subtitle="Explore premier government-approved citizenship and residency by investment routes across 30+ jurisdictions worldwide. Compare investment thresholds, processing timelines, and strategic benefits in one place."
        bgImage="/assets/imgs/programs/st-kitts-citizenship.webp"
        crumb={[{ label: "All Programmes" }]}
      />

      <section className="section-space bg-surface-50">
        <div className="container-izzy">
          {/* Quick Metrics Bar */}
          <div className="mb-10 grid grid-cols-2 gap-4 rounded-3xl border border-surface-200 bg-white p-6 shadow-sm md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gold-500/15 text-gold-600">
                  <s.icon size={20} />
                </span>
                <div>
                  <p className="text-xl font-extrabold text-navy-900 leading-tight">{s.value}</p>
                  <p className="text-[12px] font-semibold text-ink-light leading-tight mt-0.5">{s.label}</p>
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
