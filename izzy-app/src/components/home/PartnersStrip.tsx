"use client";

import React from "react";

export function PartnersStrip() {
  const partners = [
    { name: "Investment Migration Council", logo: "/assets/imgs/partners/partner-1.png" },
    { name: "ICC Commercial Advisory", logo: "/assets/imgs/partners/partner-2.png" },
    { name: "Caribbean Citizenship Units", logo: "/assets/imgs/partners/partner-3.png" },
    { name: "CMVM Regulated Funds", logo: "/assets/imgs/partners/partner-4.png" },
    { name: "Global Private Banking Escrow", logo: "/assets/imgs/partners/partner-5.png" },
  ];

  return (
    <section className="py-16 bg-[#f4f5f8] border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            Our Strategic Partners
          </span>
          <h3 className="text-2xl font-bold font-heading text-navy-900">
            Trusted Alliances Worldwide
          </h3>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-80 hover:opacity-100 transition-opacity">
          {partners.map((p, idx) => (
            <div
              key={idx}
              className="grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={p.logo}
                alt={p.name}
                className="h-10 md:h-12 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
