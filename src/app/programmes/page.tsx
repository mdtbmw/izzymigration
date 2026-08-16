import { PageHero } from "@/components/ui/PageHero";
import { ProgrammeCatalogue } from "@/components/programmes/ProgrammeCatalogue";
import { CtaBand } from "@/components/home/CtaBand";

export const metadata = {
  title: "All Programmes — Residency & Citizenship by Investment",
  description:
    "Compare all 55 residency and citizenship by investment programmes in one place. Filter by region, investment level and programme type.",
};

export default function ProgrammesPage() {
  return (
    <>
      <PageHero
        title="55 Routes, One Decision"
        subtitle="Every residency and citizenship route we structure — searchable, sortable and honestly priced."
        crumb={[{ label: "All Programmes" }]}
      />
      <section className="section-space pt-14 md:pt-14">
        <div className="container-izzy">
          <ProgrammeCatalogue />
        </div>
      </section>
      <CtaBand />
    </>
  );
}