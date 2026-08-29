import React from "react";
import { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { ComparisonTable } from "@/components/programmes/ComparisonTable";

export const metadata: Metadata = {
  title: "Side-by-Side Sovereign Programme Comparison Engine",
  description:
    "Compare citizenship by investment and European golden visas side-by-side: investment thresholds, processing timelines, and visa-free travel destinations.",
};

export default function ComparePage() {
  return (
    <div className="bg-surface-100 min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Breadcrumb items={[{ label: "Compare Programmes" }]} />
          <div className="mt-4 space-y-2">
            <Badge variant="gold">Interactive Decision Matrix</Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 font-heading">
              Side-by-Side Programme Comparison
            </h1>
            <p className="text-sm md:text-base text-body max-w-3xl">
              Select any 3 sovereign programmes to evaluate investment criteria, statutory processing speed, family eligibility, and physical presence requirements side-by-side.
            </p>
          </div>
        </div>

        <ComparisonTable />
      </div>
    </div>
  );
}
