import Link from "next/link";
import { Compass, Landmark, Building2, Ship, ArrowRight, ShieldCheck } from "lucide-react";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";

const SERVICES = [
  {
    tag: "01 · STRATEGIC ADVISORY",
    icon: Compass,
    title: "Strategic Advisory & Consulting",
    text: "Structured immigration and investment planning, business setup and long-term global mobility strategy for individuals, families and enterprises.",
    href: "/expertise",
    bgPhoto: "/assets/imgs/projact/projact-img1.jpg",
  },
  {
    tag: "02 · CITIZENSHIP & RESIDENCY",
    icon: Landmark,
    title: "Investment Immigration",
    text: "Citizenship & residency solutions through investment — golden visa and citizenship-by-investment programmes across 46+ jurisdictions, structured for tax efficiency.",
    href: "/citizenship",
    bgPhoto: "/assets/imgs/projact/projact-img2.jpg",
  },
  {
    tag: "03 · GLOBAL ASSETS",
    icon: Building2,
    title: "Global Real Estate Investment",
    text: "Qualifying real estate and premium property investment options that support residency, citizenship and long-term wealth growth worldwide.",
    href: "/real-estate",
    bgPhoto: "/assets/imgs/projact/projact-img3.jpg",
  },
  {
    tag: "04 · LUXURY MOBILITY",
    icon: Ship,
    title: "Luxury Cruise & Travel Experiences",
    text: "World-class cruise journeys and bespoke travel experiences that complete the premium global mobility lifestyle.",
    href: "/cruise-travel",
    bgPhoto: "/assets/imgs/projact/projact-img4.jpg",
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
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-surface-200 bg-surface-50 p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-gold-500/40 hover:shadow-xl"
              >
                {/* Subtle photographic background that reveals smoothly on hover */}
                <div className="absolute inset-0 overflow-hidden opacity-0 transition-opacity duration-500 group-hover:opacity-20 pointer-events-none">
                  <img src={s.bgPhoto} alt="" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-navy-950/40" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10.5px] font-extrabold tracking-wider uppercase text-gold-600">
                      {s.tag}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-500/15 text-gold-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-navy-950">
                      <s.icon size={20} />
                    </span>
                  </div>

                  <h3 className="text-[17px] font-extrabold text-navy-900 group-hover:text-gold-600 transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-ink-light font-normal">{s.text}</p>
                </div>

                <div className="relative z-10 mt-6 pt-4 border-t border-surface-200/80 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[13px] font-extrabold text-navy-900 transition-colors group-hover:text-gold-600">
                    Explore Service <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <ShieldCheck size={16} className="text-gold-500 opacity-60" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}