import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ProgrammeCatalogue } from "@/components/programmes/ProgrammeCatalogue";
import { CtaBand } from "@/components/home/CtaBand";
import { ShieldCheck, Award, Globe, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Residency & Golden Visa Programmes | Izzy Immigration",
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

          <ProgrammeCatalogue fixedType="residency" />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
