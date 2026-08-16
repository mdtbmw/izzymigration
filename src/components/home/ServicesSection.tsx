import { Compass, Landmark, Building2, Ship } from "lucide-react";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";

const SERVICES = [
  {
    icon: Compass,
    title: "Strategic Advisory & Consulting",
    text: "Structured immigration and investment planning, business setup and long-term global mobility strategy for individuals, families and enterprises.",
  },
  {
    icon: Landmark,
    title: "Investment Immigration",
    text: "Citizenship & residency solutions through investment — golden visa and citizenship-by-investment programmes across 46+ jurisdictions, structured for tax efficiency and family inclusion.",
  },
  {
    icon: Building2,
    title: "Global Real Estate Investment",
    text: "Qualifying real estate and premium property investment options that support residency, citizenship and long-term wealth growth worldwide.",
  },
  {
    icon: Ship,
    title: "Luxury Cruise & Travel Experiences",
    text: "World-class cruise journeys and bespoke travel experiences that complete the premium global mobility lifestyle.",
  },
];

export function ServicesSection() {
  return (
    <section className="section-space bg-white">
      <div className="container-izzy">
        <SectionHead eyebrow="What We Do" title="Services That Move You Forward" align="center" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 90} className="h-full">
              <article className="card card--hover card--gray flex h-full flex-col gap-5 p-7">
                <span className="icon-badge icon-badge--gold shrink-0">
                  <s.icon size={26} />
                </span>
                <h3 className="text-lg font-extrabold">{s.title}</h3>
                <p className="text-[13.5px] leading-relaxed text-ink-light">{s.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}