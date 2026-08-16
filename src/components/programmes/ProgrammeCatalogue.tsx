"use client";

import { useEffect, useMemo, useState } from "react";
import { Search, RotateCcw, ArrowUpDown } from "lucide-react";
import { programs } from "@/data/programs";
import type { Region } from "@/types";
import { cn, parseInvestmentAmount } from "@/lib/utils";
import { ProgrammeCard } from "@/components/programmes/ProgrammeCard";
import { Button } from "@/components/ui/Button";

interface ProgrammeCatalogueProps {
  /** Preselected type for dedicated pages (/citizenship, /residency). Tabs hidden. */
  fixedType?: "citizenship" | "residency";
  max?: number;
}

type SortOrder = "default" | "low-to-high" | "high-to-low";

const REGIONS: Region[] = ["Caribbean", "Europe", "Asia-Pacific", "Americas", "Africa & Middle East", "Africa"];

export function ProgrammeCatalogue({ fixedType, max }: ProgrammeCatalogueProps) {
  const [type, setType] = useState<"all" | "citizenship" | "residency">(fixedType ?? "all");
  const [region, setRegion] = useState<"all" | Region>("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortOrder>("default");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const urlSearch = params.get("search");
      const urlRegion = params.get("region");
      const urlType = params.get("type");

      if (urlSearch) setSearch(urlSearch);
      if (urlRegion && (REGIONS as string[]).includes(urlRegion)) setRegion(urlRegion as Region);
      if (!fixedType && urlType && (urlType === "citizenship" || urlType === "residency")) {
        setType(urlType);
      }
    }
  }, [fixedType]);

  const filtered = useMemo(() => {
    let list = programs.filter((p) => (type === "all" || p.type === type) && (region === "all" || p.region === region));
    const q = search.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.country.toLowerCase().includes(q) ||
          (p.intro ?? "").toLowerCase().includes(q) ||
          p.region.toLowerCase().includes(q)
      );
    }
    if (sort === "low-to-high") list = [...list].sort((a, b) => parseInvestmentAmount(a.minInvestment) - parseInvestmentAmount(b.minInvestment));
    if (sort === "high-to-low") list = [...list].sort((a, b) => parseInvestmentAmount(b.minInvestment) - parseInvestmentAmount(a.minInvestment));
    if (max && list.length > max) list = list.slice(0, max);
    return list;
  }, [type, region, search, sort, max]);

  const hasFilters = type !== "all" || region !== "all" || search !== "" || sort !== "default";

  const reset = () => {
    setType(fixedType ?? "all");
    setRegion("all");
    setSearch("");
    setSort("default");
  };

  return (
    <div>
      {/* Filter bar */}
      <div className="card rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-7 w-full min-w-0 max-w-full overflow-hidden shadow-sm">
        <div className="flex flex-col gap-3.5 sm:gap-4 lg:flex-row lg:items-center lg:justify-between w-full min-w-0">
          {!fixedType && (
            <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 p-1 rounded-2xl bg-surface-100 border border-surface-200 w-full lg:w-auto max-w-full overflow-x-auto no-scrollbar">
              {[
                { id: "all", label: "All Programmes" },
                { id: "citizenship", label: "Citizenship" },
                { id: "residency", label: "Residency" },
              ].map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setType(t.id as typeof type)}
                  className={cn(
                    "flex-1 sm:flex-initial text-center px-3 sm:px-4 py-2 text-xs sm:text-[13px] font-bold rounded-xl transition-all whitespace-nowrap",
                    type === t.id
                      ? "bg-navy-950 text-gold-400 shadow-sm"
                      : "text-navy-800 hover:text-navy-950 hover:bg-white/60"
                  )}
                >
                  {t.label}
                </button>
              ))}
            </div>
          )}
          <div className="relative w-full lg:max-w-md min-w-0">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-light" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search country, programme, region…"
              className="w-full pl-10 pr-4 py-2.5 sm:py-3 text-xs sm:text-sm rounded-xl sm:rounded-2xl border border-surface-200 bg-surface-50 focus:bg-white focus:border-gold-500 outline-none transition-all placeholder:text-ink-light text-navy-950"
              aria-label="Search programmes"
            />
          </div>
        </div>

        <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-surface-200 pt-3.5 sm:pt-4 w-full min-w-0">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full sm:w-auto min-w-0">
            <label className="flex items-center justify-between sm:justify-start gap-2 text-[11.5px] sm:text-[12.5px] font-bold text-ink-light min-w-0">
              <span className="shrink-0">Region:</span>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value as "all" | Region)}
                className="flex-1 sm:flex-initial rounded-xl border border-surface-200 bg-white px-3 py-2 text-xs sm:text-[12.5px] font-semibold text-navy-900 outline-none transition-colors focus:border-gold-500 min-w-0"
              >
                <option value="all">All Global Regions</option>
                {REGIONS.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex items-center justify-between sm:justify-start gap-2 text-[11.5px] sm:text-[12.5px] font-bold text-ink-light min-w-0">
              <span className="flex items-center gap-1 shrink-0">
                <ArrowUpDown size={12} />
                <span>Sort:</span>
              </span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOrder)}
                className="flex-1 sm:flex-initial rounded-xl border border-surface-200 bg-white px-3 py-2 text-xs sm:text-[12.5px] font-semibold text-navy-900 outline-none transition-colors focus:border-gold-500 min-w-0"
              >
                <option value="default">Featured / Recommended</option>
                <option value="low-to-high">Investment: Lowest First</option>
                <option value="high-to-low">Investment: Highest First</option>
              </select>
            </label>
            {hasFilters && (
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs sm:text-[12.5px] font-bold text-red-600 transition-colors hover:bg-red-50"
              >
                <RotateCcw size={12} /> Reset
              </button>
            )}
          </div>
          <p className="text-[11.5px] sm:text-[12.5px] font-semibold text-ink-light text-center sm:text-right">
            Showing <strong className="text-navy-900">{filtered.length}</strong> programme{filtered.length === 1 ? "" : "s"}
          </p>
        </div>
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <ProgrammeCard key={p.id} program={p} index={i} />
          ))}
        </div>
      ) : (
        <div className="card mt-8 flex flex-col items-center gap-3 p-12 text-center">
          <p className="text-lg font-extrabold text-navy-900">No programmes match your filters</p>
          <p className="max-w-sm text-[13.5px] text-ink-light">
            Try a different region or keyword — or clear the filters to see all {programs.length} routes.
          </p>
          <Button variant="gold" className="mt-2" onClick={reset}>
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
}