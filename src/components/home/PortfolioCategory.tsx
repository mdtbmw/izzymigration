import Link from "next/link";
import { ArrowRight, Compass, Sparkles } from "lucide-react";
import { SectionHead } from "@/components/ui/SectionHead";
import { assetPath } from "@/lib/brand";

const CATEGORIES = [
  {
    title: "Citizenship Programs",
    desc: "Direct sovereign passports offering immediate visa-free travel and constitutional rights.",
    img: "/assets/imgs/globevisa/globevisa_caribbean_beach.jpg",
    href: "/citizenship",
    tag: "Direct Passport",
  },
  {
    title: "Residency Programs",
    desc: "Permanent residency solutions across Europe, Americas and Asia-Pacific for global mobility.",
    img: "/assets/imgs/globevisa/globevisa_mediterranean_coast.jpg",
    href: "/residency",
    tag: "Permanent Residence",
  },
  {
    title: "Golden Visas",
    desc: "European Schengen settlement and real estate investment corridors for families.",
    img: "/assets/imgs/globevisa/globevisa_european_architecture.jpg",
    href: "/residency",
    tag: "European Golden Visa",
  },
  {
    title: "Retirement & Ancestry",
    desc: "Citizenship by descent (Jus Sanguinis) and flexible passive income retirement routes.",
    img: "/assets/imgs/globevisa/globevisa_city_sunset.jpg",
    href: "/ancestry",
    tag: "Ancestry & Descent",
  },
  {
    title: "Global Real Estate",
    desc: "Prime international real estate investments paired with residency and citizenship benefits.",
    img: "/assets/imgs/globevisa/globevisa_luxury_waterfront.jpg",
    href: "/real-estate",
    tag: "Prime Assets",
  },
];

export function PortfolioCategory() {
  return (
    <section className="section-space bg-surface-100" aria-label="Global Portfolio by Category">
      <div className="container-izzy">
        <SectionHead
          eyebrow="Global Mobility Portfolio"
          title="Explore Programmes by Category"
          text="We provide personalized, end-to-end guidance for investor migration, citizenship by descent, and international property acquisition."
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="group relative flex min-h-[360px] flex-col justify-end overflow-hidden rounded-[24px] border border-surface-200 p-6 text-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:border-gold-400"
            >
              {/* Background Photography */}
              <div className="absolute inset-0 z-0">
                <img
                  src={assetPath(cat.img)}
                  alt={cat.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent" />
              </div>

              {/* Tag Pill */}
              <div className="relative z-10 mb-auto">
                <span className="inline-flex rounded-full border border-white/20 bg-navy-950/70 px-3 py-1 text-[11px] font-extrabold text-gold-300 backdrop-blur-sm shadow-sm">
                  {cat.tag}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10 mt-6">
                <h3 className="text-lg font-extrabold text-white group-hover:text-gold-300 transition-colors leading-snug">
                  {cat.title}
                </h3>
                <p className="mt-2 text-[12px] text-white/75 leading-relaxed line-clamp-2 font-normal">
                  {cat.desc}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-white/15 pt-3 text-[12.5px] font-bold text-gold-400 group-hover:text-gold-300">
                  <span>Apply Now</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white transition-all group-hover:bg-gold-500 group-hover:text-navy-950">
                    <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
