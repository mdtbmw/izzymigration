import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Program } from "@/types";
import { assetPath } from "@/lib/brand";

interface Props {
  program: Program;
  index?: number;
  compact?: boolean;
}

/** Unified programme card used across home, catalogues and related sections. */
export function ProgrammeCard({ program, index = 0, compact = false }: Props) {
  const p = program;
  return (
    <Link
      href={`/programmes/${p.id}`}
      className="card card--hover card--gray flex h-full flex-col"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={assetPath(p.hero)}
          alt={p.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="badge-soft badge-soft--gold">{p.type === "citizenship" ? "Citizenship" : "Residency"}</span>
        </div>
        <div className="absolute bottom-4 left-4 flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border-2 border-white/60 bg-white">
            {p.flag && <img src={assetPath(p.flag)} alt="" className="h-full w-full object-cover" loading="lazy" />}
          </span>
          <span className="text-[13px] font-bold text-white drop-shadow">{p.country}</span>
        </div>
      </div>
      <div className={compact ? "flex flex-1 flex-col justify-between gap-3 p-5" : "flex flex-1 flex-col justify-between gap-4 p-6"}>
        <div>
          <h3 className={compact ? "text-[15px] font-extrabold leading-snug" : "text-lg font-extrabold leading-snug"}>{p.title}</h3>
          <p className={compact ? "mt-2 text-[13px] font-semibold text-ink-light" : "mt-2.5 text-[13.5px] font-semibold text-ink-light"}>
            From <span className="text-gold-600">{p.minInvestment}</span>
            <span className="mx-1.5 text-surface-300">•</span>
            {p.processing}
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 text-[13px] font-extrabold text-navy-900 transition-colors group-hover:text-gold-600">
          Explore Programme
          <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}