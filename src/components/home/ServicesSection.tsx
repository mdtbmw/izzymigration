import Link from "next/link";
import { Compass, Landmark, Building2, Ship, ArrowRight } from "lucide-react";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";

const SERVICES = [
  {
    icon: Compass,
    title: "Strategic Advisory & Consulting",
    text: "Structured immigration and investment planning, business setup and long-term global mobility strategy for individuals, families and enterprises.",
    href: "/expertise",
  },
  {
    icon: Landmark,
    title: "Investment Immigration",
    text: "Citizenship & residency solutions through investment — golden visa and citizenship-by-investment programmes across 46+ jurisdictions, structured for tax efficiency and family inclusion.",
    href: "/citizenship",
  },
  {
    icon: Building2,
    title: "Global Real Estate Investment",
    text: "Qualifying real estate and premium property investment options that support residency, citizenship and long-term wealth growth worldwide.",
    href: "/real-estate",
  },
  {
    icon: Ship,
    title: "Luxury Cruise & Travel Experiences",
    text: "World-class cruise journeys and bespoke travel experiences that complete the premium global mobility lifestyle.",
    href: "/cruise-travel",
  },
];

export function ServicesSection() {
  return (
    <section className="section-space bg-white">
      <div className="container-izzy">
        <SectionHead
          eyebrow="What We Do"
          title="Services That Move You Forward"
          text="Four integrated sovereign practice areas covering your entire global mobility and wealth preservation journey."
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 90} className="h-full">
              <Link
                href={s.href}
                className="card card--hover card--gray group flex h-full flex-col justify-between gap-5 p-7"
              >
                <div>
                  <span className="icon-badge icon-badge--gold shrink-0 mb-4 transition-transform group-hover:scale-105">
                    <s.icon size={24} />
                  </span>
                  <h3 className="text-[17px] font-extrabold text-navy-900 group-hover:text-gold-600 transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-ink-light">{s.text}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[13px] font-extrabold text-navy-900 transition-colors group-hover:text-gold-600">
                  Explore Service <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}