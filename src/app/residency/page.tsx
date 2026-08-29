import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ProgrammeCatalogue } from "@/components/programmes/ProgrammeCatalogue";
import { CtaBand } from "@/components/home/CtaBand";
import { ShieldCheck, Award, Globe, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Residency & Golden Visa Programmes | Izzy Migration Mentors",
  description:
    "European Golden Visas, United States EB-5, UAE Golden Visa, and global permanent residency routes. Portugal, Greece, Spain, Malta, Cyprus, Italy, and Canada.",
};

const STATS = [
  { icon: Award, value: "45+", label: "Sovereign Residency Routes" },
  { icon: Globe, value: "Schengen", label: "Borderless European Travel" },
  { icon: Building2, value: "Prime Assets", label: "Real Estate & Fund Vehicles" },
  { icon: ShieldCheck, value: "100%", label: "Pre-Vetted Statutory Filings" },
];

export default function ResidencyPage() {
  return (
    <>
      <PageHero
        title="Residency by Investment & Golden Visas"
        subtitle="Secure legal residency, borderless travel, and family settlement across Europe, North America, and Asia-Pacific through qualifying investments in real estate and regulated funds."
        bgImage="/assets/imgs/programs/greece-golden-visa.webp"
        crumb={[{ label: "Residency Programmes" }]}
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

          <ProgrammeCatalogue fixedType="residency" />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
