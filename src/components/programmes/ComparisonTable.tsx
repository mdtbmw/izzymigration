"use client";

import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { programs } from "@/data/programs";
import type { Program } from "@/types";
import { Button } from "@/components/ui/Button";

interface ComparisonTableProps {
  initialProgramIds?: string[];
}

const SLOTS = 3;

export function ComparisonTable({
  initialProgramIds = ["st-kitts-citizenship", "portugal-golden-visa", "greece-golden-visa"],
}: ComparisonTableProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>(initialProgramIds);

  const selected: (Program | undefined)[] = selectedIds
    .map((id) => programs.find((p) => p.id === id))
    .concat(Array(Math.max(0, SLOTS - selectedIds.length)).fill(undefined));

  const changeSlot = (index: number, newId: string) => {
    const updated = [...selectedIds];
    updated[index] = newId;
    setSelectedIds(updated);
  };

  const flagOf = (p: Program) => (p.flag.startsWith("/") ? p.flag : `/${p.flag}`);

  return (
    <div className="card overflow-visible rounded-3xl">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-navy-900 text-white">
              <th className="w-1/4 p-6 text-lg font-extrabold">Sovereign Attribute</th>
              {Array.from({ length: SLOTS }, (_, slotIdx) => {
                const prog = selected[slotIdx];
                return (
                  <th key={slotIdx} className="w-1/4 p-6">
                    <select
                      value={prog?.id ?? ""}
                      onChange={(e) => changeSlot(slotIdx, e.target.value)}
                      className="w-full rounded-xl border border-gold-400 bg-white px-3 py-2 text-[12.5px] font-bold text-navy-900 outline-none"
                      aria-label={`Compare slot ${slotIdx + 1}`}
                    >
                      {prog ? null : <option value="">Select programme…</option>}
                      {programs.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.country} — {p.type === "citizenship" ? "Citizenship" : "Residency"}
                        </option>
                      ))}
                    </select>
                    {prog && (
                      <div className="mt-3 flex items-center gap-2.5">
                        <span className="flex h-6 w-9 shrink-0 items-center justify-center overflow-hidden rounded border border-white/20 bg-white">
                          <img src={flagOf(prog)} alt="" className="h-full w-full object-cover" />
                        </span>
                        <span className="chip chip--gold uppercase">{prog.type}</span>
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-200">
            <Row label="Minimum Statutory Investment">
              {selected.map((prog, i) => (
                <td key={i} className="p-5 text-base font-extrabold text-gold-600">
                  {prog?.minInvestment ?? "—"}
                </td>
              ))}
            </Row>
            <Row label="Statutory Processing Timeline">
              {selected.map((prog, i) => (
                <td key={i} className="p-5 font-semibold text-ink">
                  {prog?.processing ?? "—"}
                </td>
              ))}
            </Row>
            <Row label="Region & Jurisdiction">
              {selected.map((prog, i) => (
                <td key={i} className="p-5 font-semibold text-ink">
                  {prog ? `${prog.country} (${prog.region})` : "—"}
                </td>
              ))}
            </Row>
            <Row label="Core Advantages">
              {selected.map((prog, i) => (
                <td key={i} className="space-y-2 p-5 text-[13.5px] text-ink">
                  {prog
                    ? prog.benefits.slice(0, 3).map((b, j) => (
                        <span key={j} className="flex items-start gap-2">
                          <Check size={14} className="mt-0.5 shrink-0 text-gold-500" />
                          {b}
                        </span>
                      ))
                    : "—"}
                </td>
              ))}
            </Row>
            <Row label="Full Details" muted>
              {selected.map((prog, i) => (
                <td key={i} className="p-5">
                  {prog ? (
                    <Button href={`/programmes/${prog.id}`} variant="gold" size="sm" className="w-full justify-center">
                      View Dossier <ArrowRight size={14} />
                    </Button>
                  ) : (
                    <span className="text-ink-light">—</span>
                  )}
                </td>
              ))}
            </Row>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Row({ label, muted = false, children }: { label: string; muted?: boolean; children: React.ReactNode }) {
  return (
    <tr>
      <td className={`p-5 font-extrabold ${muted ? "bg-surface-50" : "bg-surface-200/60"} text-navy-900`}>{label}</td>
      {children}
    </tr>
  );
}