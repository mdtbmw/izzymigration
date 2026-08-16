import { Globe, IdCard, Building2, TreePine, BriefcaseBusiness, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/home/CtaBand";

export const metadata = {
  title: "Our Expertise — Practice Areas",
  description:
    "Six interlocking practice areas, one standard: every file prepared as though a government inspector is watching. Because one is.",
};

const AREAS = [
  {
    icon: Globe,
    title: "Citizenship by Investment",
    text: "Caribbean and European citizenship programmes — economic contribution, real estate and fund routes, structured for speed and certainty.",
  },
  {
    icon: IdCard,
    title: "Residency & Golden Visas",
    text: "Forty-five residency routes across Europe, the Americas, Asia and the Middle East — matched to your lifestyle and investment style.",
  },
  {
    icon: Building2,
    title: "Global Real Estate",
    text: "Qualifying property acquisition that satisfies programme requirements and performs as an investment — vetted by local counsel in every market.",
  },
  {
    icon: TreePine,
    title: "Citizenship by Descent",
    text: "Ancestry-based claims researched and documented from first records to passport — often with no investment required at all.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business & Relocation",
    text: "Company formation, tax structuring and physical relocation — the practical layer that turns a permit into a new home base.",
  },
  {
    icon: ShieldCheck,
    title: "Due Diligence & Compliance",
    text: "Source-of-funds preparation, background readiness and document integrity — built in from day one, not fixed at the last minute.",
  },
];

export default function ExpertisePage() {
  return (
    <>
      <PageHero
        title="Our Expertise"
        subtitle="Six interlocking practice areas, one standard: every file prepared as though a government inspector is watching. Because one is."
        crumb={[{ label: "Our Expertise" }]}
      />

      <section className="section-space">
        <div className="container-izzy">
          <SectionHead eyebrow="What We Do" title="Practice Areas" align="center" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {AREAS.map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 80} className="h-full">
                <article className="card card--hover card--gray group flex h-full flex-col gap-5 p-7">
                  <span className="icon-badge icon-badge--gold shrink-0">
                    <a.icon size={22} />
                  </span>
                  <h3 className="text-lg font-extrabold">{a.title}</h3>
                  <p className="text-[13.5px] leading-relaxed text-ink-light">{a.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-surface-50">
        <div className="container-izzy">
          <div className="relative overflow-hidden rounded-[28px] bg-navy-950 p-10 text-center md:p-14">
            <div className="glow-orb glow-orb--gold" />
            <h2 className="relative z-10 text-3xl font-extrabold text-white md:text-4xl">
              Tell us where you want to <span className="section-head__title--gold">be</span>
            </h2>
            <p className="relative z-10 mx-auto mt-4 max-w-xl text-[14.5px] leading-relaxed text-white/70">
              Whether you are exploring a first residency or a second passport, we will show you the strongest route —
              and the honest reasons for it.
            </p>
            <div className="relative z-10 mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="gold">
                Book a Free Assessment
              </Button>
              <Button href="/programmes" variant="ghost-light">
                Browse All Programmes
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}