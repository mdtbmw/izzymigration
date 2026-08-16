import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function TopProgrammesGlance() {
  const items = [
    {
      tag: "RBI",
      flag: "/assets/imgs/flags/gb.svg",
      country: "United Kingdom",
      program: "Innovator Founder Visa",
      meta: "From £50,000 · 3–6 months",
      link: "/programmes",
    },
    {
      tag: "RBI",
      flag: "/assets/imgs/flags/pt.svg",
      country: "Portugal",
      program: "D7 & Golden Visa Funds",
      meta: "Passive income / €250k · 5–24 months",
      link: "/programmes/portugal-golden-visa",
    },
    {
      tag: "Golden Visa",
      flag: "/assets/imgs/flags/gr.svg",
      country: "Greece",
      program: "Golden Visa Real Estate",
      meta: "From €250,000 · ~4 months",
      link: "/programmes/greece-golden-visa",
    },
    {
      tag: "CIP",
      flag: "/assets/imgs/flags/mt.svg",
      country: "Malta",
      program: "Citizenship by Investment",
      meta: "From €750,000 · 12–14 months",
      link: "/programmes/malta-citizenship",
    },
    {
      tag: "RBI",
      flag: "/assets/imgs/flags/it.svg",
      country: "Italy",
      program: "Investor Visa & Elective PR",
      meta: "From €250,000 · 2–4 months",
      link: "/programmes/italy-golden-visa",
    },
    {
      tag: "RBI",
      flag: "/assets/imgs/flags/ca.svg",
      country: "Canada",
      program: "Start-Up Visa Direct PR",
      meta: "From CAD 200,000 · 12–16 months",
      link: "/programmes/canada-startup-visa",
    },
    {
      tag: "RBI",
      flag: "/assets/imgs/flags/us.svg",
      country: "United States",
      program: "EB-5 Green Card",
      meta: "From $800,000 · 24–36 months",
      link: "/programmes/us-eb5-investor",
    },
    {
      tag: "RBI",
      flag: "/assets/imgs/flags/sg.svg",
      country: "Singapore",
      program: "Global Investor Programme",
      meta: "From S$2,500,000 · 6–12 months",
      link: "/programmes/singapore-global-investor",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
              Popular Routes
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 font-heading">
              Top Programmes At A Glance
            </h2>
            <p className="text-sm md:text-base text-body">
              Compare primary investment routes, processing timelines, and residency rights side by side.
            </p>
          </div>

          <Link href="/programmes" className="rr-btn shrink-0 self-start md:self-auto">
            View All Programmes <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#f4f5f8] rounded-3xl p-6 border border-gray-200/80 hover:bg-white hover:border-gold-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-full bg-navy-900 text-gold-400">
                    {item.tag}
                  </span>
                  <div className="w-9 h-6 rounded shadow-xs border border-gray-300 overflow-hidden bg-white shrink-0">
                    <img
                      src={item.flag}
                      alt={`${item.country} flag`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <h4 className="text-lg font-bold font-heading text-navy-900 mb-1 group-hover:text-gold-600 transition-colors">
                  {item.country}
                </h4>
                <p className="text-xs text-body font-medium mb-3">
                  {item.program}
                </p>

                <hr className="border-gray-200/80 my-3" />

                <p className="text-xs text-gray-500 font-medium">
                  {item.meta}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200/60 mt-4 flex items-center justify-between text-xs font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                <Link href={item.link}>Explore Programme</Link>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
