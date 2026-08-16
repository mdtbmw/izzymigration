import Link from "next/link";
import { ArrowRight, Check, Compass, Globe2 } from "lucide-react";
import { SectionHead } from "@/components/ui/SectionHead";
import { assetPath } from "@/lib/brand";

const COUNTRIES = [
  {
    country: "Canada",
    img: "/assets/imgs/home-1/adventure/adventure-img1.png",
    points: [
      "Express Entry & PNP pathways",
      "Start-Up Visa & business routes",
      "Settlement & permanent residence",
    ],
    href: "/programmes/canada-startup",
    meta: "From CAD 75,000",
  },
  {
    country: "Caribbean & St. Kitts",
    img: "/assets/imgs/home-1/adventure/adventure-img2.png",
    points: [
      "Direct second passport issuance",
      "Zero physical residency required",
      "150+ visa-free destinations",
    ],
    href: "/citizenship",
    meta: "From USD 200,000",
  },
  {
    country: "Australia",
    img: "/assets/imgs/home-1/adventure/adventure-img3.png",
    points: [
      "Skilled & investment visa corridors",
      "Business migration support",
      "Residency-to-PR planning",
    ],
    href: "/programmes",
    meta: "Direct Sovereign Advisory",
  },
  {
    country: "United Kingdom",
    img: "/assets/imgs/home-1/adventure/adventure-img4.png",
    points: [
      "Innovator & founder visas",
      "Work & family immigration routes",
      "Fast settlement to British passport",
    ],
    href: "/programmes/uk-innovator",
    meta: "From £50,000",
  },
];

export function AdventureSection() {
  return (
    <section className="section-space bg-surface-50" aria-label="Available Countries">
      <div className="container-izzy">
        <SectionHead
          eyebrow="Available Countries"
          title="Residency Routes, Country by Country"
          text="Strategic entry points and settlement corridors tailored for global entrepreneurs, high-net-worth families, and investors."
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {COUNTRIES.map((c) => (
            <div
              key={c.country}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-surface-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-400 hover:shadow-xl"
            >
              {/* Icon / Image Header */}
              <div>
                <div className="relative mb-5 h-16 w-16 overflow-hidden rounded-2xl bg-navy-50 p-2 border border-surface-200 group-hover:border-gold-300 transition-colors">
                  <img
                    src={assetPath(c.img)}
                    alt={c.country}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-xl font-extrabold text-navy-900 group-hover:text-gold-600 transition-colors">
                  {c.country}
                </h3>
                <p className="mt-1 text-[11.5px] font-bold text-gold-600 uppercase tracking-wider">
                  {c.meta}
                </p>

                {/* Key Bullet Points */}
                <ul className="mt-4 space-y-2.5 text-[12.5px] text-ink-light">
                  {c.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-2 leading-relaxed">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700 mt-0.5">
                        <Check size={11} />
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Action */}
              <div className="mt-6 border-t border-surface-200 pt-4 flex items-center justify-between">
                <Link
                  href={c.href}
                  className="text-xs font-extrabold text-navy-900 group-hover:text-gold-600 transition-colors inline-flex items-center gap-1"
                >
                  Explore Corridors <ArrowRight size={13} />
                </Link>
                <Link
                  href={c.href}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-surface-200 bg-surface-50 text-navy-900 group-hover:border-gold-500 group-hover:bg-gold-500 group-hover:text-navy-950 transition-all"
                  aria-label={`Explore ${c.country}`}
                >
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
