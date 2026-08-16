import React from "react";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { InvestmentOption } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface InvestmentOptionsProps {
  options: InvestmentOption[];
  className?: string;
}

export function InvestmentOptions({ options, className }: InvestmentOptionsProps) {
  if (!options || options.length === 0) return null;

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
      {options.map((opt, idx) => (
        <div
          key={idx}
          className="relative flex flex-col bg-white rounded-3xl border border-gray-200/90 p-7 shadow-sm hover:shadow-sovereign hover:border-gold-400 transition-all duration-300 group"
        >
          <div className="flex items-center justify-between gap-3 mb-4">
            <span className="w-9 h-9 rounded-full bg-gold-100 text-gold-600 flex items-center justify-center font-bold text-sm">
              0{idx + 1}
            </span>
            <Badge variant="soft">Qualifying Route</Badge>
          </div>

          <h4 className="text-lg font-bold font-heading text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
            {opt.t}
          </h4>

          <div className="my-4 py-3 px-4 rounded-xl bg-surface-200 border border-gray-200/60 flex items-baseline justify-between">
            <span className="text-xs text-gray-500 font-medium">Statutory Minimum:</span>
            <span className="text-base font-extrabold text-navy-900 font-heading">
              {opt.price}
            </span>
          </div>

          <p className="text-xs md:text-sm text-body leading-relaxed flex-grow mb-4">
            {opt.desc}
          </p>

          <div className="pt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-emerald-700 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Government Escrow Protected</span>
          </div>
        </div>
      ))}
    </div>
  );
}
