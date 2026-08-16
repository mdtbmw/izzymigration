"use client";

import { useState } from "react";
import { Calculator, ShieldCheck, ArrowRight } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface CalculationModel {
  country: string;
  currency: string;
  donationBaseSingle: number;
  donationBaseCouple: number;
  donationBaseFamily4: number;
  realEstateBase: number;
  dueDiligenceMain: number;
  dueDiligenceSpouse: number;
  dueDiligenceDep: number;
  govFeesSingle: number;
  govFeesCouple: number;
  govFeesFamily4: number;
}

const models: Record<string, CalculationModel> = {
  "st-kitts": {
    country: "St. Kitts & Nevis",
    currency: "USD",
    donationBaseSingle: 250000,
    donationBaseCouple: 300000,
    donationBaseFamily4: 350000,
    realEstateBase: 400000,
    dueDiligenceMain: 10000,
    dueDiligenceSpouse: 7500,
    dueDiligenceDep: 4000,
    govFeesSingle: 2500,
    govFeesCouple: 4000,
    govFeesFamily4: 7500,
  },
  antigua: {
    country: "Antigua & Barbuda",
    currency: "USD",
    donationBaseSingle: 230000,
    donationBaseCouple: 230000,
    donationBaseFamily4: 230000,
    realEstateBase: 300000,
    dueDiligenceMain: 8500,
    dueDiligenceSpouse: 5000,
    dueDiligenceDep: 2000,
    govFeesSingle: 30000,
    govFeesCouple: 30000,
    govFeesFamily4: 30000,
  },
  dominica: {
    country: "Dominica",
    currency: "USD",
    donationBaseSingle: 200000,
    donationBaseCouple: 250000,
    donationBaseFamily4: 250000,
    realEstateBase: 200000,
    dueDiligenceMain: 7500,
    dueDiligenceSpouse: 4000,
    dueDiligenceDep: 4000,
    govFeesSingle: 1000,
    govFeesCouple: 2000,
    govFeesFamily4: 3000,
  },
  grenada: {
    country: "Grenada",
    currency: "USD",
    donationBaseSingle: 235000,
    donationBaseCouple: 235000,
    donationBaseFamily4: 235000,
    realEstateBase: 270000,
    dueDiligenceMain: 5000,
    dueDiligenceSpouse: 5000,
    dueDiligenceDep: 3000,
    govFeesSingle: 3000,
    govFeesCouple: 5000,
    govFeesFamily4: 8000,
  },
  "saint-lucia": {
    country: "Saint Lucia",
    currency: "USD",
    donationBaseSingle: 240000,
    donationBaseCouple: 240000,
    donationBaseFamily4: 240000,
    realEstateBase: 300000,
    dueDiligenceMain: 8000,
    dueDiligenceSpouse: 5000,
    dueDiligenceDep: 3000,
    govFeesSingle: 2000,
    govFeesCouple: 3000,
    govFeesFamily4: 5000,
  },
  portugal: {
    country: "Portugal (Golden Visa Fund)",
    currency: "EUR",
    donationBaseSingle: 500000,
    donationBaseCouple: 500000,
    donationBaseFamily4: 500000,
    realEstateBase: 500000,
    dueDiligenceMain: 6000,
    dueDiligenceSpouse: 3000,
    dueDiligenceDep: 1500,
    govFeesSingle: 5800,
    govFeesCouple: 11600,
    govFeesFamily4: 23200,
  },
  greece: {
    country: "Greece (Golden Visa Real Estate)",
    currency: "EUR",
    donationBaseSingle: 250000,
    donationBaseCouple: 250000,
    donationBaseFamily4: 250000,
    realEstateBase: 250000,
    dueDiligenceMain: 2000,
    dueDiligenceSpouse: 2000,
    dueDiligenceDep: 1000,
    govFeesSingle: 2000,
    govFeesCouple: 4000,
    govFeesFamily4: 6000,
  },
};

type FamilySize = "single" | "couple" | "family4";
type RouteType = "donation" | "realEstate";

export const CALCULATOR_MODELS: Record<string, string> = {
  "st-kitts-citizenship": "st-kitts",
  "antigua-citizenship": "antigua",
  "dominica-citizenship": "dominica",
  "grenada-citizenship": "grenada",
  "saint-lucia-citizenship": "saint-lucia",
  "portugal-golden-visa": "portugal",
  "greece-golden-visa": "greece",
};

export function InvestmentCalculator({ initialCountry }: { initialCountry?: string }) {
  const [selectedCountry, setSelectedCountry] = useState(
    initialCountry && models[initialCountry] ? initialCountry : "st-kitts"
  );
  const [familySize, setFamilySize] = useState<FamilySize>("single");
  const [routeType, setRouteType] = useState<RouteType>("donation");

  const model = models[selectedCountry] ?? models["st-kitts"];

  let baseAmount = 0;
  if (routeType === "realEstate") {
    baseAmount = model.realEstateBase;
  } else if (familySize === "single") baseAmount = model.donationBaseSingle;
  else if (familySize === "couple") baseAmount = model.donationBaseCouple;
  else baseAmount = model.donationBaseFamily4;

  let dueDiligence = model.dueDiligenceMain;
  if (familySize === "couple") dueDiligence += model.dueDiligenceSpouse;
  else if (familySize === "family4") dueDiligence += model.dueDiligenceSpouse + model.dueDiligenceDep * 2;

  let govFees = model.govFeesSingle;
  if (familySize === "couple") govFees = model.govFeesCouple;
  else if (familySize === "family4") govFees = model.govFeesFamily4;

  const totalEstimate = baseAmount + dueDiligence + govFees;

  return (
    <div className="card max-w-4xl rounded-3xl border-gold-500/40 p-6 sm:p-10">
      <div className="flex flex-col gap-4 border-b border-surface-200 pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="chip chip--gold">
            <Calculator size={13} /> Interactive Fee Modeler
          </span>
          <h3 className="mt-3 text-xl font-extrabold text-navy-900 sm:text-2xl">
            Sovereign Investment & Fee Estimator
          </h3>
        </div>
        <span className="inline-flex items-center gap-1.5 self-start rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[12px] font-bold text-emerald-700 sm:self-center">
          <ShieldCheck size={14} /> Official 2026 Statutory Rates
        </span>
      </div>

      <div className="mt-8 grid items-start gap-8 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-7">
          <label className="block">
            <span className="mb-2 block text-[11.5px] font-extrabold uppercase tracking-wider text-navy-900">
              Select Sovereign Jurisdiction
            </span>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="field"
            >
              <option value="st-kitts">St. Kitts & Nevis (Citizenship)</option>
              <option value="antigua">Antigua & Barbuda (Citizenship)</option>
              <option value="dominica">Dominica (Citizenship)</option>
              <option value="grenada">Grenada (Citizenship & USA E-2)</option>
              <option value="saint-lucia">Saint Lucia (Citizenship)</option>
              <option value="portugal">Portugal (CMVM Regulated Fund)</option>
              <option value="greece">Greece (Golden Visa Real Estate)</option>
            </select>
          </label>

          <div>
            <span className="mb-2 block text-[11.5px] font-extrabold uppercase tracking-wider text-navy-900">
              Family Structure & Dependents
            </span>
            <div className="grid grid-cols-3 gap-2.5">
              {(
                [
                  { id: "single", label: "Single Applicant", sub: "1 Adult" },
                  { id: "couple", label: "Married Couple", sub: "2 Adults" },
                  { id: "family4", label: "Family of 4", sub: "2 + 2 Kids" },
                ] as { id: FamilySize; label: string; sub: string }[]
              ).map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFamilySize(f.id)}
                  className={cn(
                    "rounded-2xl border p-3.5 text-center transition-all",
                    familySize === f.id
                      ? "border-gold-500 bg-gold-50 text-navy-900 shadow-sm"
                      : "border-surface-200 text-ink hover:border-surface-300"
                  )}
                >
                  <span className="block text-[12.5px] font-extrabold">{f.label}</span>
                  <span className="mt-0.5 block text-[10.5px] font-semibold text-ink-light">{f.sub}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <span className="mb-2 block text-[11.5px] font-extrabold uppercase tracking-wider text-navy-900">
              Qualifying Route
            </span>
            <div className="grid grid-cols-2 gap-3">
              {(
                [
                  { id: "donation", label: "Statutory Contribution", sub: "Government Sovereign Fund" },
                  { id: "realEstate", label: "Approved Real Estate", sub: "Freehold / 5-Star Resort" },
                ] as { id: RouteType; label: string; sub: string }[]
              ).map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setRouteType(r.id)}
                  className={cn(
                    "rounded-2xl border p-3.5 text-center transition-all",
                    routeType === r.id
                      ? "border-gold-500 bg-gold-50 text-navy-900 shadow-sm"
                      : "border-surface-200 text-ink hover:border-surface-300"
                  )}
                >
                  <span className="block text-[12.5px] font-extrabold">{r.label}</span>
                  <span className="mt-0.5 block text-[10.5px] font-semibold text-ink-light">{r.sub}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-navy-900 p-6 text-white lg:col-span-5 sm:p-7">
          <span className="block text-[11px] font-bold uppercase tracking-wider text-white/45">
            Estimated Total Outlay
          </span>
          <span className="mt-1 block text-3xl font-extrabold text-gold-400">
            {formatCurrency(totalEstimate, model.currency)}
          </span>
          <span className="mt-0.5 block text-[10.5px] font-semibold text-emerald-400">
            Includes Base Investment + Statutory Vetting
          </span>

          <div className="space-y-2.5 border-t border-white/10 pt-4 text-[13px]">
            <div className="flex justify-between">
              <span className="text-white/50">Qualifying Capital / Fund</span>
              <span className="font-bold">{formatCurrency(baseAmount, model.currency)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/50">Government Due Diligence</span>
              <span className="font-bold">{formatCurrency(dueDiligence, model.currency)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/50">Statutory Filing & Passports</span>
              <span className="font-bold">{formatCurrency(govFees, model.currency)}</span>
            </div>
          </div>

          <div className="border-t border-white/10 pt-4">
            <Button
              href={`/contact?program=${encodeURIComponent(model.country)}&budget=${totalEstimate}`}
              variant="gold"
              size="sm"
              className="w-full justify-center"
            >
              Request Full Itemized Quote <ArrowRight size={15} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}