import { PageHero } from "@/components/ui/PageHero";
import { ProgrammeCatalogue } from "@/components/programmes/ProgrammeCatalogue";
import { CtaBand } from "@/components/home/CtaBand";

export const metadata = {
  title: "Residency & Golden Visa Programmes",
  description:
    "Forty-five residency and golden visa routes across Europe, Asia-Pacific, the Americas and the Middle East — with real timelines, real costs and no relocation surprises.",
};

export default function ResidencyPage() {
  return (
    <>
      <PageHero
        title="European & Global Residency, Mapped"
        subtitle="Live, work and travel across entire regions — with stay requirements as low as 7 days a year."
        crumb={[{ label: "Residency" }]}
      />
      <section className="section-space pt-14 md:pt-14">
        <div className="container-izzy">
          <div className="mb-8 grid gap-6 sm:grid-cols-3">
            {[
              { label: "Permanent & Golden Visas", value: "45" },
              { label: "Schengen Settlement Routes", value: "15+" },
              { label: "Stay Requirement Options", value: "0–7 Days/Yr" },
            ].map((s) => (
              <div key={s.label} className="card card--gray flex flex-col items-center gap-1 p-6 text-center">
                <p className="text-3xl font-extrabold text-navy-900">{s.value}</p>
                <p className="text-[12.5px] font-semibold text-ink-light">{s.label}</p>
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