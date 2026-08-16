import { Ship, MapPinned, Compass, PlaneTakeoff } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/home/CtaBand";

export const metadata = {
  title: "Luxury Cruise & Travel",
  description:
    "The best way to fall in love with a country is to live in it. Our curated cruise and travel arm lets you explore destinations — in absolute comfort — before you relocate.",
};

const OFFERS = [
  {
    icon: Ship,
    title: "Luxury Cruises",
    text: "Mediterranean, Caribbean and beyond — five-star voyages that put your shortlist of countries literally on the itinerary.",
  },
  {
    icon: MapPinned,
    title: "Discovery Itineraries",
    text: "We combine ports, cities and property viewings into one journey — see your target residency location through a resident's eyes.",
  },
  {
    icon: Compass,
    title: "Bespoke Arrangements",
    text: "Private charters, villa stays and ground support arranged end to end by our travel desk — one itinerary, one team.",
  },
  {
    icon: PlaneTakeoff,
    title: "Seamless Handoff",
    text: "Enjoy the voyage; when you return, your relocation plan is already prepared by the same team that arranged the trip.",
  },
];

export default function CruiseTravelPage() {
  return (
    <>
      <PageHero
        title="Luxury Cruise & Travel"
        subtitle="The best way to fall in love with a country is to live in it. Our curated cruise and travel arm lets you explore destinations — in absolute comfort — before you relocate."
        crumb={[{ label: "Cruise & Travel" }]}
      />

      <section className="section-space">
        <div className="container-izzy">
          <SectionHead
            eyebrow="Travel With Purpose"
            title="Explore Before You Move"
            text="Every relocation starts as a journey. Our travel partners design luxury cruise itineraries that double as discovery trips — so you can scout a future home in absolute comfort."
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {OFFERS.map((o, i) => (
              <Reveal key={o.title} delay={i * 80} className="h-full">
                <article className="card card--hover card--gray flex h-full flex-col gap-5 p-7">
                  <span className="icon-badge icon-badge--gold shrink-0">
                    <o.icon size={24} />
                  </span>
                  <h3 className="text-lg font-extrabold">{o.title}</h3>
                  <p className="text-[13.5px] leading-relaxed text-ink-light">{o.text}</p>
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
            <div className="ring-spin absolute -right-24 -top-24 h-80 w-80 rounded-full border border-dashed border-gold-400/25" />
            <h2 className="relative z-10 text-3xl font-extrabold text-white md:text-4xl">
              Set sail toward your <span className="section-head__title--gold">next chapter</span>
            </h2>
            <p className="relative z-10 mx-auto mt-4 max-w-xl text-[14.5px] leading-relaxed text-white/70">
              Tell us where you dream of living — we will design the journey that takes you there, at sea and beyond.
            </p>
            <div className="relative z-10 mt-8">
              <Button href="/contact" variant="gold" size="lg">
                Plan My Journey
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}