import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, CheckCircle2 } from "lucide-react";

export function CountryRoutes() {
  const routes = [
    {
      country: "Canada",
      title: "Start-Up Visa & Direct Permanent Settlement",
      desc: "Fast-track permanent residency for innovative entrepreneurs and their families with zero language or physical stay hurdles before filing.",
      image: "/assets/imgs/adventure/adventure-1-img.png",
      tag: "Permanent Residency",
      link: "/programmes/canada-startup-visa",
    },
    {
      country: "United Kingdom",
      title: "Innovator Founder & Global Talent Visa",
      desc: "Direct endorsement from statutory UK bodies for high-growth venture founders seeking permanent British settlement and passport rights.",
      image: "/assets/imgs/adventure/adventure-4-img.png",
      tag: "Founder & Talent",
      link: "/visas",
    },
    {
      country: "Australia",
      title: "Global Talent Independent & Investor Pathways",
      desc: "Direct permanent Australian residency for distinguished specialists in targeted tech, finance, and renewable energy sectors.",
      image: "/assets/imgs/adventure/adventure-3-img.png",
      tag: "Direct PR",
      link: "/visas",
    },
    {
      country: "Europe (Schengen)",
      title: "European Golden Visas & CMVM Regulated Funds",
      desc: "Gain unrestricted European Schengen access across 29 nations from €250,000 in Portugal, Greece, Spain, and Italy.",
      image: "/assets/imgs/adventure/adventure-2-img.png",
      tag: "Schengen Access",
      link: "/residency",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#f4f5f8] border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-100 border border-gold-200 text-gold-700 text-xs font-bold uppercase tracking-wider">
            <Globe className="w-4 h-4 text-gold-600" />
            <span>Country by Country</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 font-heading">
            Residency Routes, Country by Country
          </h2>
          <p className="text-sm md:text-base text-body">
            Strategic global settlement solutions tailored for high-growth entrepreneurs and established families.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {routes.map((r, idx) => (
            <Link
              key={idx}
              href={r.link}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-200/80 hover:border-gold-400 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-navy-950">
                  <img
                    src={r.image}
                    alt={r.country}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-navy-950/80 backdrop-blur-sm text-gold-400 font-bold text-xs px-3 py-1 rounded-full border border-white/20">
                    {r.country}
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gold-600 mb-2 block">
                    {r.tag}
                  </span>
                  <h4 className="text-base font-bold font-heading text-navy-900 mb-2 group-hover:text-gold-600 transition-colors line-clamp-2">
                    {r.title}
                  </h4>
                  <p className="text-xs text-body leading-relaxed line-clamp-3">
                    {r.desc}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-gray-100 text-xs font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                <span>View Route Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
