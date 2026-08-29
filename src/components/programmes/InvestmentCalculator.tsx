"use client";

import React, { useState } from "react";
import { Calculator, DollarSign, Users, ShieldCheck, ArrowRight, RefreshCw } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

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

export function InvestmentCalculator() {
  const [selectedCountry, setSelectedCountry] = useState("st-kitts");
  const [familySize, setFamilySize] = useState<"single" | "couple" | "family4">("single");
  const [routeType, setRouteType] = useState<"donation" | "realEstate">("donation");

  const model = models[selectedCountry] || models["st-kitts"];

  // Base Investment Calculation
  let baseAmount = 0;
  if (routeType === "realEstate") {
    baseAmount = model.realEstateBase;
  } else {
    if (familySize === "single") baseAmount = model.donationBaseSingle;
    else if (familySize === "couple") baseAmount = model.donationBaseCouple;
    else baseAmount = model.donationBaseFamily4;
  }

  // Due Diligence Fees Calculation
  let dueDiligence = model.dueDiligenceMain;
  if (familySize === "couple") {
    dueDiligence += model.dueDiligenceSpouse;
  } else if (familySize === "family4") {
    dueDiligence += model.dueDiligenceSpouse + model.dueDiligenceDep * 2;
  }

  // Government & Statutory Processing Fees
  let govFees = model.govFeesSingle;
  if (familySize === "couple") govFees = model.govFeesCouple;
  else if (familySize === "family4") govFees = model.govFeesFamily4;

  const totalEstimate = baseAmount + dueDiligence + govFees;

  return (
    <div className="bg-white rounded-3xl border border-gold-300 shadow-sovereign-lg p-6 sm:p-10 max-w-4xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
        <div>
          <Badge variant="gold">Interactive Fee Modeler</Badge>
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-navy-900 mt-2">
            Sovereign Investment &amp; Fee Estimator
          </h3>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
          <ShieldCheck className="w-4 h-4" />
          <span>Official 2026 Statutory Rates</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Controls (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* 1. Country Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
              Select Sovereign Jurisdiction:
            </label>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl border border-gray-200 text-sm font-semibold text-navy-900 bg-surface-100 focus:bg-white focus:border-gold-500 outline-none"
            >
              <option value="st-kitts">St. Kitts &amp; Nevis (Citizenship)</option>
              <option value="antigua">Antigua &amp; Barbuda (Citizenship)</option>
              <option value="dominica">Dominica (Citizenship)</option>
              <option value="grenada">Grenada (Citizenship &amp; USA E-2)</option>
              <option value="saint-lucia">Saint Lucia (Citizenship)</option>
              <option value="portugal">Portugal (CMVM Regulated Fund)</option>
              <option value="greece">Greece (Golden Visa Real Estate)</option>
            </select>
          </div>

          {/* 2. Family Composition */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
              Family Structure &amp; Dependents:
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { id: "single", label: "Single Applicant", sub: "1 Adult" },
                { id: "couple", label: "Married Couple", sub: "2 Adults" },
                { id: "family4", label: "Family of 4", sub: "2 Adults + 2 Kids" },
              ].map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFamilySize(f.id as any)}
                  className={`p-3.5 rounded-2xl border text-center transition-all ${
                    familySize === f.id
                      ? "border-gold-500 bg-gold-50/70 text-navy-900 shadow-sm"
                      : "border-gray-200 text-gray-700 hover:border-gray-300"
                  }`}
                >
                  <span className="text-xs font-bold block">{f.label}</span>
                  <span className="text-[10px] text-gray-500 block">{f.sub}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Investment Route */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
              Qualifying Route:
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setRouteType("donation")}
                className={`p-3.5 rounded-2xl border text-center transition-all ${
                  routeType === "donation"
                    ? "border-gold-500 bg-gold-50/70 text-navy-900 shadow-sm"
                    : "border-gray-200 text-gray-700 hover:border-gray-300"
                }`}
              >
                <span className="text-xs font-bold block">Statutory Contribution</span>
                <span className="text-[10px] text-gray-500">Government Sovereign Fund</span>
              </button>

              <button
                type="button"
                onClick={() => setRouteType("realEstate")}
                className={`p-3.5 rounded-2xl border text-center transition-all ${
                  routeType === "realEstate"
                    ? "border-gold-500 bg-gold-50/70 text-navy-900 shadow-sm"
                    : "border-gray-200 text-gray-700 hover:border-gray-300"
                }`}
              >
                <span className="text-xs font-bold block">Approved Real Estate</span>
                <span className="text-[10px] text-gray-500">Freehold / 5-Star Resort</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Live Itemized Breakdown (5 cols) */}
        <div className="lg:col-span-5 bg-navy-950 text-white rounded-3xl p-6 sm:p-7 border border-white/10 space-y-5">
          <div>
            <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider block">
              Estimated Total Outlay:
            </span>
            <span className="text-3xl font-extrabold text-gold-400 font-heading block mt-1">
              {formatCurrency(totalEstimate, model.currency)}
            </span>
            <span className="text-[10px] text-emerald-400 font-semibold block mt-0.5">
              Includes Base Investment + Statutory Vetting
            </span>
          </div>

          <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs">
            <div className="flex justify-between">
              <span className="text-gray-400">Qualifying Capital / Fund:</span>
              <span className="font-bold text-white">
                {formatCurrency(baseAmount, model.currency)}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">Government Due Diligence:</span>
              <span className="font-bold text-white">
                {formatCurrency(dueDiligence, model.currency)}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">Statutory Filing &amp; Passports:</span>
              <span className="font-bold text-white">
                {formatCurrency(govFees, model.currency)}
              </span>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10">
            <Button
              href={`/contact?program=${encodeURIComponent(model.country)}&budget=${totalEstimate}`}
              variant="gold"
              size="sm"
              className="w-full justify-center"
            >
              Request Full Itemized Quote
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
