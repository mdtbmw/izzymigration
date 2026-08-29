"use client";

import React, { useState } from "react";
import {
  FileText,
  Scale,
  ShieldCheck,
  Building,
  Users,
  Coins,
  Globe2,
  CheckCircle2,
  BookOpen,
  ChevronDown,
  Sparkles,
  Info,
} from "lucide-react";
import { ProgramDossier, DossierSection } from "@/data/programDetails";

const SECTION_ICONS: Record<string, React.ElementType> = {
  "statutory-framework": Scale,
  "investment-options": Coins,
  "investment-modalities": Coins,
  "us-e2-visa": Globe2,
  "pathway-to-citizenship": Globe2,
  "family-inclusions": Users,
  "due-diligence-compliance": ShieldCheck,
  "fiscal-framework": Building,
  "global-mobility": Globe2,
};

export function ComprehensiveDossier({ dossier }: { dossier: ProgramDossier }) {
  const [activeTab, setActiveTab] = useState(dossier.sections[0]?.id || "");

  const activeSection =
    dossier.sections.find((s) => s.id === activeTab) || dossier.sections[0];

  return (
    <section
      id="comprehensive-dossier"
      className="rounded-3xl border border-surface-200 bg-white p-6 sm:p-8 md:p-10 shadow-sm space-y-8"
      aria-label="Statutory Framework and Comprehensive Dossier"
    >
      {/* Header with Badges */}
      <div className="space-y-3 pb-6 border-b border-surface-200">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-500/15 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-gold-700">
            <BookOpen size={13} className="text-gold-600" />
            Comprehensive Legal Dossier
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-navy-950/5 px-3 py-1 text-[11px] font-bold text-navy-900 border border-surface-200">
            <Scale size={13} className="text-navy-700" />
            Statutory Legislation &amp; Regulatory Analysis
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 font-heading tracking-tight">
          Comprehensive Programme Dossier &amp; Legal Framework
        </h2>

        {/* Legal Authority Callout Box */}
        <div className="rounded-2xl border border-gold-400/30 bg-navy-950 p-4 sm:p-5 text-white shadow-md relative overflow-hidden">
          <div className="glow-orb -right-8 -bottom-8 h-32 w-32 bg-gold-500/10 pointer-events-none" />
          <div className="flex items-start gap-3 relative z-10">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/10 text-gold-400 mt-0.5">
              <Scale size={16} />
            </span>
            <div className="space-y-1">
              <p className="text-[11px] font-extrabold uppercase tracking-wider text-gold-400">
                Official Statutory Basis:
              </p>
              <p className="text-xs sm:text-[13px] font-medium text-white/95 leading-relaxed">
                {dossier.legalBasis}
              </p>
              {dossier.gazetteRef && (
                <p className="text-[11px] text-white/70 italic mt-0.5">
                  Authority: {dossier.gazetteRef}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Executive Summary Lead */}
        <div className="space-y-3 pt-2 text-xs sm:text-[14px] text-ink-dark leading-relaxed font-normal">
          {dossier.executiveSummary.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </div>

      {/* Navigation Tabs for Deep Dive Sections */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {dossier.sections.map((sec) => {
            const Icon = SECTION_ICONS[sec.id] || FileText;
            const isActive = sec.id === (activeSection?.id || "");
            return (
              <button
                key={sec.id}
                onClick={() => setActiveTab(sec.id)}
                type="button"
                className={`whitespace-nowrap inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all duration-200 shrink-0 ${
                  isActive
                    ? "bg-navy-950 text-white shadow-md shadow-navy-950/20"
                    : "bg-surface-100 text-ink-dark hover:bg-surface-200 hover:text-navy-950"
                }`}
              >
                <Icon size={14} className={isActive ? "text-gold-400" : "text-ink-light"} />
                <span>{sec.title.split("&")[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Active Section Content Render */}
        {activeSection && (
          <div className="rounded-2xl border border-surface-200 bg-surface-50/70 p-5 sm:p-7 space-y-5 animate-fadeIn">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-surface-200">
              <div className="flex items-center gap-2.5">
                {(() => {
                  const SectionIcon = SECTION_ICONS[activeSection.id] || FileText;
                  return (
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy-950 text-gold-400">
                      <SectionIcon size={18} />
                    </span>
                  );
                })()}
                <div>
                  {activeSection.badge && (
                    <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-gold-600 block">
                      {activeSection.badge}
                    </span>
                  )}
                  <h3 className="text-base sm:text-lg font-extrabold text-navy-900 font-heading">
                    {activeSection.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Paragraphs */}
            <div className="space-y-3.5 text-xs sm:text-[13.5px] text-ink-dark leading-relaxed font-normal">
              {activeSection.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Bullet points */}
            {activeSection.bulletPoints && activeSection.bulletPoints.length > 0 && (
              <div className="space-y-2.5 pt-2">
                <p className="text-xs font-extrabold uppercase tracking-wider text-navy-950">
                  Key Statutory Provisions:
                </p>
                <div className="grid gap-2.5">
                  {activeSection.bulletPoints.map((bp, bidx) => (
                    <div
                      key={bidx}
                      className="flex items-start gap-2.5 rounded-xl border border-surface-200 bg-white p-3.5 text-xs sm:text-[13px] text-ink-dark"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700 mt-0.5">
                        <CheckCircle2 size={12} />
                      </span>
                      <span className="leading-relaxed font-medium">{bp}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Statutory Callout */}
            {activeSection.callout && (
              <div className="rounded-xl border border-gold-400/40 bg-gold-500/10 p-4 sm:p-5 text-navy-900 mt-4 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-extrabold text-navy-950 uppercase tracking-wider">
                  <Info size={16} className="text-gold-600 shrink-0" />
                  {activeSection.callout.title}
                </div>
                <p className="text-xs sm:text-[13px] text-ink-dark leading-relaxed">
                  {activeSection.callout.text}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
