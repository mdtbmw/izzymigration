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

          <ProgrammeCatalogue fixedType="citizenship" />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
