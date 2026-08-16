"use client";

import React from "react";
import { Search, RotateCcw, Filter, SlidersHorizontal } from "lucide-react";
import { FilterState, ProgramType, Region } from "@/types";
import { cn } from "@/lib/utils";

interface ProgrammeFilterProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  regions: Region[];
  totalResults: number;
}

export function ProgrammeFilter({
  filters,
  onFilterChange,
  regions,
  totalResults,
}: ProgrammeFilterProps) {
  const handleTypeChange = (type: "all" | ProgramType) => {
    onFilterChange({ ...filters, type });
  };

  const handleRegionChange = (region: "all" | Region) => {
    onFilterChange({ ...filters, region });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...filters, search: e.target.value });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ ...filters, priceSort: e.target.value as any });
  };

  const handleReset = () => {
    onFilterChange({
      type: "all",
      region: "all",
      search: "",
      priceSort: "default",
    });
  };

  const hasActiveFilters =
    filters.type !== "all" ||
    filters.region !== "all" ||
    filters.search !== "" ||
    filters.priceSort !== "default";

  return (
    <div className="bg-white rounded-3xl border border-gray-200 p-5 md:p-7 shadow-sm mb-10 space-y-5">
      {/* Top Row: Type Tabs & Search */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        {/* Category Pill Tabs */}
        <div className="flex items-center p-1 bg-surface-200 rounded-2xl border border-gray-200/60 overflow-x-auto">
          {[
            { id: "all", label: "All Programmes" },
            { id: "citizenship", label: "Citizenship by Investment" },
            { id: "residency", label: "Residency & Golden Visas" },
          ].map((tab) => {
            const isActive = filters.type === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTypeChange(tab.id as any)}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all shrink-0 whitespace-nowrap",
                  isActive
                    ? "bg-navy-900 text-white shadow-sm"
                    : "text-body hover:text-navy-900"
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Live Search Input */}
        <div className="relative flex-grow max-w-md">
          <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by country, program, investment..."
            value={filters.search}
            onChange={handleSearchChange}
            className="w-full pl-11 pr-4 py-2.5 rounded-2xl border border-gray-200 text-xs md:text-sm focus:outline-none focus:border-gold-500 bg-surface-100 focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Bottom Row: Region Filter, Price Sorter, Reset & Result Count */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100">
        <div className="flex flex-wrap items-center gap-3">
          {/* Region Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-gray-500">Region:</span>
            <select
              value={filters.region}
              onChange={(e) => handleRegionChange(e.target.value as any)}
              className="px-3.5 py-2 rounded-xl border border-gray-200 text-xs font-medium text-navy-900 bg-white focus:outline-none focus:border-gold-500"
            >
              <option value="all">All Global Regions</option>
              {regions.map((reg) => (
                <option key={reg} value={reg}>
                  {reg}
                </option>
              ))}
            </select>
          </div>

          {/* Sorter */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-gray-500">Sort:</span>
            <select
              value={filters.priceSort}
              onChange={handleSortChange}
              className="px-3.5 py-2 rounded-xl border border-gray-200 text-xs font-medium text-navy-900 bg-white focus:outline-none focus:border-gold-500"
            >
              <option value="default">Featured / Recommended</option>
              <option value="low-to-high">Investment: Lowest First</option>
              <option value="high-to-low">Investment: Highest First</option>
            </select>
          </div>

          {/* Clear Filters Button */}
          {hasActiveFilters && (
            <button
              onClick={handleReset}
              className="text-xs text-red-600 hover:text-red-700 font-semibold flex items-center gap-1 py-1.5 px-2.5 rounded-lg hover:bg-red-50 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        {/* Results Counter */}
        <div className="text-xs font-semibold text-gray-500">
          Showing <span className="text-navy-900 font-bold">{totalResults}</span> Sovereign Programmes
        </div>
      </div>
    </div>
  );
}
