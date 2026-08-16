import React from "react";
import Link from "next/link";
import { ArrowRight, Compass, ShieldCheck } from "lucide-react";

export function ProgrammesMappedSection() {
  const categories = [
    {
      title: "Citizenship Programmes",
      desc: "Direct sovereign passports with worldwide visa-free access and lifelong multi-generational heritage.",
      img: "/assets/imgs/projact/projact-img1.jpg",
      link: "/citizenship",
    },
    {
      title: "Residency & Golden Visas",
      desc: "European Schengen and global permanent residency permits structured for tax efficiency and family mobility.",
      img: "/assets/imgs/projact/projact-img2.jpg",
      link: "/residency",
    },
    {
      title: "Golden Visas by Investment",
      desc: "Fast-track legal residency across Portugal, Greece, Spain, and Italy through CMVM funds and real estate.",
      img: "/assets/imgs/projact/projact-img3.jpg",
      link: "/residency",
    },
    {
      title: "Retirement & Ancestry Claims",
      desc: "Genealogical archival discovery and passive income retirement visas across Italy, Ireland, and Portugal.",
      img: "/assets/imgs/projact/projact-img4.jpg",
      link: "/ancestry",
    },
    {
      title: "Global Real Estate Investment",
      desc: "Qualifying prime international property acquisitions that support permanent residency and asset appreciation.",
      img: "/assets/imgs/projact/projact-img5.jpg",
      link: "/real-estate",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#050548] text-white overflow-hidden border-b border-navy-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/30 text-gold-300 text-xs font-bold uppercase tracking-wider">
              <Compass className="w-4 h-4 text-gold-400" />
              <span>Our Programmes</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-heading">
              Residency &amp; Citizenship Routes, Mapped for You
            </h2>
            <p className="text-sm md:text-base text-gray-300">
              Explore bespoke investor migration pathways structured around your family's global legacy.
            </p>
          </div>

          <Link href="/programmes" className="btn-hero-gold shrink-0 self-start md:self-auto">
            Explore All 55+ Programmes <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 5-Card Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((c, idx) => (
            <Link
              key={idx}
              href={c.link}
              className="group relative h-96 rounded-3xl overflow-hidden shadow-xl border border-white/10 flex flex-col justify-end p-6 hover:border-gold-400 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                style={{ backgroundImage: `url(${c.img})` }}
              />

              {/* Dark Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

              {/* Content */}
              <div className="relative z-10 space-y-2">
                <h4 className="text-lg font-bold font-heading text-white group-hover:text-gold-400 transition-colors">
                  {c.title}
                </h4>
                <p className="text-xs text-gray-300 line-clamp-3 leading-relaxed">
                  {c.desc}
                </p>
                <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-gold-400 group-hover:text-white transition-colors">
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
