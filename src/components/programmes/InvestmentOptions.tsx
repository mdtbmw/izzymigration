import { ShieldCheck, Building2, Landmark, Coins } from "lucide-react";
import type { InvestmentOption } from "@/types";

const OPTION_IMAGES = [
  "/assets/imgs/projact/projact-img1.jpg",
  "/assets/imgs/projact/projact-img2.jpg",
  "/assets/imgs/projact/projact-img3.jpg",
  "/assets/imgs/projact/projact-img4.jpg",
  "/assets/imgs/projact/projact-img5.jpg",
];

/** Qualifying investment routes grid with authentic asset and property imagery */
export function InvestmentOptions({ options }: { options: InvestmentOption[] }) {
  if (!options || options.length === 0) return null;

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {options.map((opt, idx) => {
        const img = opt.image || OPTION_IMAGES[idx % OPTION_IMAGES.length];
        const isRealEstate = opt.t.toLowerCase().includes("real estate") || opt.t.toLowerCase().includes("property");
        const isFund = opt.t.toLowerCase().includes("fund") || opt.t.toLowerCase().includes("bond");

        return (
          <article
            key={idx}
            className="card card--hover card--gray group flex h-full flex-col overflow-hidden rounded-3xl border border-surface-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
          >
            {/* Asset Photo Preview */}
            <div className="relative h-44 w-full overflow-hidden bg-navy-950">
              <img
                src={img}
                alt={opt.t}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy-950/85 text-[11px] font-extrabold text-gold-400 backdrop-blur-sm border border-gold-500/30">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="chip chip--gold text-[10.5px] py-0.5 px-2.5">
                  {isRealEstate ? "Real Estate Asset" : isFund ? "Regulated Fund" : "Government Contribution"}
                </span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                <span className="text-xs font-bold drop-shadow">Statutory Route</span>
                <span className="text-sm font-extrabold text-gold-300 drop-shadow">{opt.price}</span>
              </div>
            </div>

            {/* Content Details */}
            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                <h3 className="text-base font-extrabold text-navy-900 transition-colors group-hover:text-gold-600">
                  {opt.t}
                </h3>
                <p className="mt-2.5 text-[13px] leading-relaxed text-ink-light">{opt.desc}</p>
              </div>

              <div className="mt-5 flex items-center gap-2 border-t border-surface-200 pt-4 text-[12px] font-bold text-emerald-700">
                <ShieldCheck size={15} className="shrink-0 text-emerald-600" />
                Government Escrow Protected
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}