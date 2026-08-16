import { PageHero } from "@/components/ui/PageHero";
import { ProgrammeCatalogue } from "@/components/programmes/ProgrammeCatalogue";
import { CtaBand } from "@/components/home/CtaBand";

export const metadata = {
  title: "Visa Pathways — Residency & Citizenship",
  description:
    "Global residency and citizenship by investment routes across 20+ jurisdictions. Compare investment thresholds, processing timelines and strategic benefits in one place.",
};

export default function VisasPage() {
  return (
    <>
      <PageHero
        title="Global Residency & Citizenship Programmes"
        subtitle="Explore 55 government-approved citizenship and residency by investment routes across 20+ jurisdictions worldwide. Compare investment thresholds, processing timelines, and strategic benefits in one place."
        crumb={[{ label: "Visas" }]}
      />
      <section className="section-space pt-14 md:pt-14">
        <div className="container-izzy">
          <div className="mb-8 grid gap-6 sm:grid-cols-3">
            {[
              { label: "Verified Routes", value: "55" },
              { label: "Sovereign Jurisdictions", value: "20+" },
              { label: "Confidential Advisory", value: "100%" },
            ].map((s) => (
              <div key={s.label} className="card card--gray flex flex-col items-center gap-1 p-6 text-center">
                <p className="text-3xl font-extrabold text-navy-900">{s.value}</p>
                <p className="text-[12.5px] font-semibold text-ink-light">{s.label}</p>
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