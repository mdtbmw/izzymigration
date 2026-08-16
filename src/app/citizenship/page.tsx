import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ProgrammeCatalogue } from "@/components/programmes/ProgrammeCatalogue";
import { CtaBand } from "@/components/home/CtaBand";
import { ShieldCheck, Award, Globe, Plane } from "lucide-react";

export const metadata: Metadata = {
  title: "Citizenship by Investment Programmes | Izzy Immigration",
  description:
    "Direct sovereign citizenship and second passports through government-approved investment. St. Kitts & Nevis, Antigua & Barbuda, Dominica, Grenada, Saint Lucia, Malta, Turkey, and Vanuatu.",
};

const STATS = [
  { icon: Award, value: "12", label: "Direct Sovereign Passports" },
  { icon: Globe, value: "150+", label: "Visa-Free Destinations" },
  { icon: ShieldCheck, value: "100%", label: "Pre-Vetted Statutory Files" },
  { icon: Plane, value: "0 Days", label: "Physical Stay Required" },
];

export default function CitizenshipPage() {
  return (
    <>
      <PageHero
        title="Citizenship by Investment Programmes"
        subtitle="Secure a permanent sovereign second passport and lifelong constitutional citizenship for your family through government-approved contributions or luxury real estate."
        bgImage="/assets/imgs/programs/st-kitts-citizenship.webp"
        crumb={[{ label: "Citizenship by Investment" }]}
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

          <ProgrammeCatalogue fixedType="citizenship" />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
