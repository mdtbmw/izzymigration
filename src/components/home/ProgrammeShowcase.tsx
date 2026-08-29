import { ArrowRight } from "lucide-react";
import { programs } from "@/data/programs";
import { SectionHead } from "@/components/ui/SectionHead";
import { Tabs } from "@/components/ui/Tabs";
import { Button } from "@/components/ui/Button";
import { ProgrammeCard } from "@/components/programmes/ProgrammeCard";

export function ProgrammeShowcase() {
  const citizenship = programs.filter((p) => p.type === "citizenship").slice(0, 6);
  const residency = programs.filter((p) => p.type === "residency").slice(0, 6);
  const flagship = ["st-kitts-citizenship", "greece-golden-visa", "portugal-golden-visa", "malta-permanent-residency", "grenada-citizenship", "uae-residence"]
    .map((id) => programs.find((p) => p.id === id))
    .filter(Boolean)
    .slice(0, 6);

  const grid = (list: typeof citizenship) => (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((p, i) => (
        <ProgrammeCard key={p.id} program={p} index={i} compact />
      ))}
    </div>
  );

  return (
    <section className="section-space bg-surface-50">
      <div className="container-izzy">
        <SectionHead
          eyebrow="Our Programmes"
          title="55 Routes to a Stronger Passport"
          text="Ten citizenship and forty-five residency programmes — each compared, priced and presented with its real timeline."
          align="center"
        />
        <div className="mt-12">
          <Tabs
            tabs={[
              { id: "citizenship", label: "Citizenship", content: grid(citizenship) },
              { id: "residency", label: "Residency", content: grid(residency) },
              { id: "flagship", label: "Client Favourites", content: grid(flagship as typeof citizenship) },
            ]}
          />
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Button href="/citizenship" variant="gold">
            View All Citizenship Routes <ArrowRight size={16} />
          </Button>
          <Button href="/residency" variant="outline">
            View All Residency Routes <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}