"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, X, ArrowRight } from "lucide-react";
import { programs } from "@/data/programs";
import { Program } from "@/types";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

interface ComparisonTableProps {
  initialProgramIds?: string[];
}

export function ComparisonTable({
  initialProgramIds = ["st-kitts-citizenship", "portugal-golden-visa", "greece-golden-visa"],
}: ComparisonTableProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>(initialProgramIds);

  const selectedPrograms = selectedIds
    .map((id) => programs.find((p) => p.id === id))
    .filter(Boolean) as Program[];

  const handleSelectChange = (index: number, newId: string) => {
    const updated = [...selectedIds];
    updated[index] = newId;
    setSelectedIds(updated);
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-200 shadow-sovereign overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[700px]">
          {/* Header Row: Selector & Card */}
          <thead>
            <tr className="bg-navy-900 text-white">
              <th className="p-6 w-1/4 font-heading text-lg font-bold border-r border-navy-850">
                Sovereign Attribute
              </th>
              {[0, 1, 2].map((slotIdx) => {
                const prog = selectedPrograms[slotIdx];
                return (
                  <th key={slotIdx} className="p-6 w-1/4 border-r border-navy-850 last:border-r-0">
                    <div className="space-y-3">
                      <select
                        value={prog?.id || ""}
                        onChange={(e) => handleSelectChange(slotIdx, e.target.value)}
                        className="w-full px-3 py-2 rounded-xl text-xs font-semibold text-navy-900 bg-white border border-gold-400 outline-none"
                      >
                        {programs.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.country} — {p.title}
                          </option>
                        ))}
                      </select>

                      {prog && (
                        <div className="flex items-center gap-2 pt-1">
                          <div className="relative w-8 h-6 rounded overflow-hidden shadow-2xs border border-white/20 shrink-0">
                            <Image
                              src={prog.flag.startsWith("/") || prog.flag.startsWith("http") ? prog.flag : `/${prog.flag}`}
                              alt={prog.country}
                              fill
                              className="object-cover"
                              sizes="32px"
                            />
                          </div>
                          <Badge variant={prog.type === "citizenship" ? "gold" : "soft"}>
                            {prog.type}
                          </Badge>
                        </div>
                      )}
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 text-xs md:text-sm">
            {/* Minimum Investment */}
            <tr className="hover:bg-surface-100/60">
              <td className="p-5 font-bold text-navy-900 bg-surface-200/50">
                Minimum Statutory Investment
              </td>
              {selectedPrograms.map((prog, idx) => (
                <td key={idx} className="p-5 font-extrabold text-gold-600 font-heading text-base">
                  {prog.minInvestment}
                </td>
              ))}
            </tr>

            {/* Processing Time */}
            <tr className="hover:bg-surface-100/60">
              <td className="p-5 font-bold text-navy-900 bg-surface-200/50">
                Statutory Processing Timeline
              </td>
              {selectedPrograms.map((prog, idx) => (
                <td key={idx} className="p-5 text-gray-700 font-medium">
                  {prog.processing}
                </td>
              ))}
            </tr>

            {/* Region & Sovereign Status */}
            <tr className="hover:bg-surface-100/60">
              <td className="p-5 font-bold text-navy-900 bg-surface-200/50">
                Region &amp; Jurisdiction
              </td>
              {selectedPrograms.map((prog, idx) => (
                <td key={idx} className="p-5 text-gray-700 font-medium">
                  {prog.country} ({prog.region})
                </td>
              ))}
            </tr>

            {/* Key Advantages */}
            <tr className="hover:bg-surface-100/60">
              <td className="p-5 font-bold text-navy-900 bg-surface-200/50">
                Core Advantages
              </td>
              {selectedPrograms.map((prog, idx) => (
                <td key={idx} className="p-5 text-gray-600 space-y-1.5">
                  {prog.benefits.slice(0, 3).map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-gold-500 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </td>
              ))}
            </tr>

            {/* Action CTA */}
            <tr className="bg-surface-100">
              <td className="p-5 font-bold text-navy-900">
                Full Details
              </td>
              {selectedPrograms.map((prog, idx) => (
                <td key={idx} className="p-5">
                  <Button
                    href={`/programmes/${prog.id}`}
                    variant="gold"
                    size="sm"
                    className="w-full justify-center"
                  >
                    View Dossier
                  </Button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
