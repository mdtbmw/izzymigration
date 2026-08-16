import React from "react";
import { ShieldCheck, Building2, Coins, Landmark, ArrowRight } from "lucide-react";
import { InvestmentOption } from "@/types";
import { assetPath } from "@/lib/brand";

interface InvestmentOptionsProps {
  options: InvestmentOption[];
  className?: string;
}

export function InvestmentOptions({ options, className }: InvestmentOptionsProps) {
  if (!options || options.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {options.map((opt, idx) => {
        const titleLower = opt.t.toLowerCase();
        const isRealEstate = titleLower.includes("real estate") || titleLower.includes("property") || titleLower.includes("housing");
        const isFund = titleLower.includes("fund") || titleLower.includes("bond") || titleLower.includes("equity");

        // Assign authentic photography based on asset class
        const assetImage = isRealEstate
          ? idx % 2 === 0
            ? "/assets/imgs/projact/projact-img5.jpg"
            : "/assets/imgs/visa/visa-card-img1.png"
          : isFund
          ? "/assets/imgs/projact/projact-img3.jpg"
          : "/assets/imgs/projact/projact-img1.jpg";

        const categoryLabel = isRealEstate
          ? "Government-Approved Real Estate"
          : isFund
          ? "Regulated Sovereign / CMVM Fund"
          : "National Sovereign Contribution";

        return (
          <div
            key={idx}
            className="group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-surface-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-400 hover:shadow-xl"
          >
            {/* Real Asset Photography Banner */}
            <div className="relative h-44 w-full overflow-hidden bg-navy-950">
              <img
                src={assetPath(assetImage)}
                alt={opt.t}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/40 to-transparent" />

              {/* Category Tag */}
              <div className="absolute top-3.5 left-3.5">
                <span className="inline-flex rounded-full bg-navy-950/80 border border-white/20 px-3 py-1 text-[10.5px] font-extrabold text-gold-300 backdrop-blur-md shadow-sm">
                  {categoryLabel}
                </span>
              </div>

              {/* Statutory Threshold Pill */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-baseline justify-between rounded-xl bg-white/95 px-3.5 py-2 backdrop-blur-md shadow-sm">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-ink-light">
                  Statutory Min.
                </span>
                <span className="text-[15px] font-extrabold text-navy-900 font-heading">
                  {opt.price}
                </span>
              </div>
            </div>

            {/* Body Content */}
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div>
                <h4 className="text-[16px] sm:text-[17px] font-extrabold text-navy-900 font-heading group-hover:text-gold-600 transition-colors leading-snug">
                  {opt.t}
                </h4>

                <p className="mt-3 text-[13px] leading-relaxed text-ink-light font-normal">
                  {opt.desc}
                </p>
              </div>

              {/* Bottom Escrow / Legal Guarantee */}
              <div className="mt-6 border-t border-surface-100 pt-4 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11.5px] font-bold text-navy-900">
                  <ShieldCheck size={15} className="text-gold-600 shrink-0" />
                  <span>Statutory Escrow Protected</span>
                </div>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-surface-100 text-navy-900 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
                  <ArrowRight size={13} />
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
