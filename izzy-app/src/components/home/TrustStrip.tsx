import React from "react";
import { siteConfig } from "@/data/siteConfig";

export function TrustStrip() {
  return (
    <section className="bg-white border-b border-gray-100 py-10 relative z-20 -mt-8 mx-4 sm:mx-8 md:mx-auto max-w-6xl rounded-3xl shadow-sovereign">
      <div className="px-6 sm:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {siteConfig.stats.map((stat, idx) => (
            <div key={idx} className="text-center pt-4 md:pt-0 first:pt-0">
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-navy-900 mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-gray-700">
                {stat.label}
              </div>
              <div className="text-[11px] font-bold text-gold-600 uppercase tracking-wider mt-0.5">
                {stat.change}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
