import React from "react";
import Link from "next/link";
import { Check, ArrowRight, Clock, Coins, ShieldCheck, ArrowUpRight } from "lucide-react";
import { Program } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { assetPath } from "@/lib/brand";

export interface ProgrammeCardProps {
  program: Program;
  className?: string;
  index?: number;
  compact?: boolean;
}

export function ProgrammeCard({ program, className, index = 0, compact = false }: ProgrammeCardProps) {
  const flagSrc = assetPath(program.flag);
  const heroSrc = assetPath(program.hero);
  const isCitizenship = program.type === "citizenship";

  return (
    <article
      className={cn(
        "group relative flex flex-col h-full overflow-hidden rounded-[24px] border border-surface-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-gold-400/60",
        className
      )}
    >
      {/* Real Photography Header Banner */}
      <div className="relative h-44 w-full overflow-hidden bg-navy-950">
        <img
          src={heroSrc}
          alt={program.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />

        {/* Top Badges: Flag & Type */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-navy-950/85 px-3 py-1 text-[11px] font-extrabold text-white backdrop-blur-md shadow-sm">
            <span className="flex h-4 w-6 shrink-0 items-center justify-center overflow-hidden rounded-sm bg-white">
              <img src={flagSrc} alt="" className="h-full w-full object-cover" />
            </span>
            <span>{program.country}</span>
          </div>

          <Badge variant={isCitizenship ? "gold" : "navy"}>
            {isCitizenship ? "Citizenship" : "Residency"}
          </Badge>
        </div>

        {/* Bottom Banner Investment Stat */}
        <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white text-xs">
          <span className="font-semibold text-white/80">From {program.minInvestment}</span>
          <span className="font-bold text-gold-300 flex items-center gap-1">
            <Clock size={12} /> {program.processing}
          </span>
        </div>
      </div>

      {/* Program Details Body */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <h4 className="text-[16.5px] font-extrabold text-navy-900 leading-snug transition-colors group-hover:text-gold-600">
            <Link href={`/programmes/${program.id}`} className="hover:underline">
              {program.title}
            </Link>
          </h4>

          {/* Key Features List */}
          <ul className="mt-3.5 space-y-2 text-[12.5px] text-ink-light">
            {program.benefits.slice(0, 2).map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-2 leading-relaxed">
                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700 mt-0.5">
                  <Check size={11} />
                </span>
                <span className="line-clamp-2">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Action Row */}
        <div className="mt-5 border-t border-surface-200 pt-4 flex items-center justify-between">
          <Link
            href={`/programmes/${program.id}`}
            className="text-[13px] font-extrabold text-navy-900 transition-colors group-hover:text-gold-600 inline-flex items-center gap-1"
          >
            Explore Programme <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href={`/programmes/${program.id}`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-200 bg-surface-50 text-navy-900 transition-all duration-200 group-hover:border-gold-500 group-hover:bg-gold-500 group-hover:text-navy-950 shadow-sm"
            aria-label={`View details for ${program.title}`}
          >
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}
