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
      <div className="card rounded-3xl p-5 md:p-7">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {!fixedType && (
            <div className="tab-list overflow-x-auto">
              {[
                { id: "all", label: "All Programmes" },
                { id: "citizenship", label: "Citizenship by Investment" },
                { id: "residency", label: "Residency & Golden Visas" },
              ].map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setType(t.id as typeof type)}
                  className={cn("tab-btn", type === t.id && "tab-btn--active")}
                >
                  {t.label}
                </button>
              ))}
            </div>
          )}
          <div className="relative w-full max-w-md">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-light" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by country, programme, region…"
              className="field pl-11"
              aria-label="Search programmes"
            />
          </div>
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-surface-200 pt-5">
          <div className="flex flex-wrap items-center gap-3">
            <label className="flex items-center gap-2 text-[12.5px] font-bold text-ink-light">
              Region
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value as "all" | Region)}
                className="rounded-xl border border-surface-200 bg-white px-3.5 py-2.5 text-[12.5px] font-semibold text-navy-900 outline-none transition-colors focus:border-gold-500"
              >
                <option value="all">All Global Regions</option>
                {REGIONS.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex items-center gap-2 text-[12.5px] font-bold text-ink-light">
              <ArrowUpDown size={13} />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOrder)}
                className="rounded-xl border border-surface-200 bg-white px-3.5 py-2.5 text-[12.5px] font-semibold text-navy-900 outline-none transition-colors focus:border-gold-500"
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
                className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-[12.5px] font-bold text-red-600 transition-colors hover:bg-red-50"
              >
                <RotateCcw size={13} /> Reset Filters
              </button>
            )}
          </div>
          <p className="text-[12.5px] font-semibold text-ink-light">
            Showing <strong className="text-navy-900">{filtered.length}</strong> sovereign programme{filtered.length === 1 ? "" : "s"}
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