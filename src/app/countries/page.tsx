import { PageHero } from "@/components/ui/PageHero";
import { CountriesSection } from "@/components/home/CountriesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { CtaBand } from "@/components/home/CtaBand";

export const metadata = {
  title: "Countries — Destinations We Cover",
  description:
    "Twelve sovereign destinations across the Caribbean, Europe, the Americas and the Middle East — each with a clear path to residency or citizenship.",
};

export default function CountriesPage() {
  return (
    <>
      <PageHero
        title="Countries"
        subtitle="Twelve sovereign destinations, each with a clear, structured path to residency or citizenship."
        crumb={[{ label: "Countries" }]}
      />
      <section className="section-space pt-14 md:pt-14">
        <div className="container-izzy">
          <CountriesSection />
        </div>
      </section>
      <ProcessSection />
      <CtaBand />
    </>
  );
}