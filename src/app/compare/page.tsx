import { PageHero } from "@/components/ui/PageHero";
import { ComparisonTable } from "@/components/programmes/ComparisonTable";
import { CtaBand } from "@/components/home/CtaBand";

export const metadata = {
  title: "Compare Programmes — Residency & Citizenship by Investment",
  description:
    "Compare up to three residency or citizenship by investment programmes side by side — investment, timeline, jurisdiction and core advantages.",
};

export default function ComparePage() {
  return (
    <>
      <PageHero
        title="Compare Programmes, Side by Side"
        subtitle="Drop in any three routes and see investment, timeline, jurisdiction and advantages compared at a glance."
        crumb={[{ label: "Compare" }]}
      />
      <section className="section-space pt-14 md:pt-14">
        <div className="container-izzy">
          <ComparisonTable />
        </div>
      </section>
      <CtaBand />
    </>
  );
}