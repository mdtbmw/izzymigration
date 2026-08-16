import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ProgrammeCatalogue } from "@/components/programmes/ProgrammeCatalogue";
import { CtaBand } from "@/components/home/CtaBand";

export const metadata: Metadata = {
  title: "Global Residency & Golden Visa Programmes | Izzy Immigration",
  description:
    "Explore 46+ premier European, Caribbean, North American, and Middle Eastern golden visa and permanent residency routes.",
};

export default function VisaSolutionsPage() {
  return (
    <main className="w-full min-w-0 max-w-full overflow-hidden">
      <PageHero
        title="Global Residency & Golden Visas"
        subtitle="Explore premier European, Caribbean, North American, and Middle Eastern residency by investment programmes. Compare qualifying thresholds and settlement rights across 30+ jurisdictions."
        bgImage="/assets/imgs/programs/portugal-golden-visa.webp"
        crumb={[{ label: "Residency Programmes" }]}
      />

      <section className="py-12 sm:py-16 bg-surface-50">
        <div className="container-izzy">
          <ProgrammeCatalogue fixedType="residency" />
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
