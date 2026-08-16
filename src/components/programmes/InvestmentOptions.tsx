import { ShieldCheck } from "lucide-react";
import type { InvestmentOption } from "@/types";

/** Qualifying investment routes grid (statutory contributions, real estate, bonds). */
export function InvestmentOptions({ options }: { options: InvestmentOption[] }) {
  if (!options || options.length === 0) return null;

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {options.map((opt, idx) => (
        <article
          key={idx}
          className="card card--hover card--gray group flex h-full flex-col gap-4 p-7"
        >
          <div className="flex items-center justify-between gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-100 text-[13px] font-extrabold text-gold-600">
              {String(idx + 1).padStart(2, "0")}
            </span>
            <span className="chip chip--gold">Qualifying Route</span>
          </div>
          <h3 className="text-lg font-extrabold transition-colors group-hover:text-gold-600">{opt.t}</h3>
          <div className="flex items-baseline justify-between gap-3 rounded-xl border border-surface-200 bg-white px-4 py-3">
            <span className="text-[12px] font-semibold text-ink-light">Statutory Minimum</span>
            <span className="text-base font-extrabold text-navy-900">{opt.price}</span>
          </div>
          <p className="flex-1 text-[13.5px] leading-relaxed text-ink-light">{opt.desc}</p>
          <div className="flex items-center gap-2 border-t border-surface-200 pt-4 text-[12.5px] font-bold text-emerald-700">
            <ShieldCheck size={15} className="shrink-0 text-emerald-600" />
            Government Escrow Protected
          </div>
        </article>
      ))}
    </div>
  );
}