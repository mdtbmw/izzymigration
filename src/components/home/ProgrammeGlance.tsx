import { ArrowRight } from "lucide-react";
import { programs } from "@/data/programs";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ProgrammeCard } from "@/components/programmes/ProgrammeCard";

const FEATURED_IDS = [
  "uk-innovator-founder",
  "greece-golden-visa",
  "portugal-golden-visa",
  "malta-permanent-residency",
  "italy-golden-visa",
  "canada-startup",
];

export function ProgrammeGlance() {
  const list = FEATURED_IDS.map((id) => programs.find((p) => p.id === id)).filter(
    (p): p is (typeof programs)[number] => Boolean(p)
  );

  return (
    <section className="section-space bg-white">
      <div className="container-izzy">
        <SectionHead
          eyebrow="Programme Snapshot"
          title="Routes Our Clients Choose Most"
          text="The fastest approvals, the strongest passports, and the lowest entry points — in one glance."
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <Reveal key={p.id} delay={i * 70} className="h-full">
              <ProgrammeCard program={p} compact />
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/programmes" variant="gold">
            Compare All 55 Programmes <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}