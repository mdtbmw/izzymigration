import React from "react";
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
  return (
    <div className="space-y-8" aria-label="Statutory Framework and Comprehensive Dossier">
      {/* Dossier Header & Official Authority Card */}
      <section className="rounded-3xl border border-surface-200 bg-white p-6 sm:p-8 md:p-10 shadow-sm space-y-6">
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

          {/* Legal Authority Box */}
          <div className="rounded-2xl border border-gold-400/30 bg-navy-950 p-4 sm:p-5 text-white shadow-md relative overflow-hidden mt-4">
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

          {/* Executive Summary Paragraphs */}
          <div className="space-y-3 pt-4 text-xs sm:text-[14px] text-ink-dark leading-relaxed font-normal">
            {dossier.executiveSummary.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Sequential Long-Form Cards (Nothing Hidden Behind Tabs) */}
      <div className="space-y-6">
        {dossier.sections.map((section, sidx) => {
          const SectionIcon = SECTION_ICONS[section.id] || FileText;
          return (
            <section
              key={section.id || sidx}
              id={section.id}
              className="rounded-3xl border border-surface-200 bg-white p-6 sm:p-8 shadow-sm space-y-5 transition-all duration-300 hover:border-gold-400/50"
            >
              {/* Section Card Header */}
              <div className="flex items-center gap-3 pb-3.5 border-b border-surface-200">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-navy-950 text-gold-400 shadow-xs">
                  <SectionIcon size={19} />
                </span>
                <div>
                  {section.badge && (
                    <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-gold-600 block">
                      {section.badge}
                    </span>
                  )}
                  <h3 className="text-base sm:text-xl font-extrabold text-navy-900 font-heading">
                    {section.title}
                  </h3>
                </div>
              </div>

              {/* Section Paragraphs */}
              <div className="space-y-3.5 text-xs sm:text-[14px] text-ink-dark leading-relaxed font-normal">
                {section.paragraphs.map((p, pidx) => (
                  <p key={pidx}>{p}</p>
                ))}
              </div>

              {/* Key Statutory Bullet Points */}
              {section.bulletPoints && section.bulletPoints.length > 0 && (
                <div className="space-y-2.5 pt-2">
                  <p className="text-[11.5px] font-extrabold uppercase tracking-wider text-navy-950">
                    Key Statutory Provisions:
                  </p>
                  <div className="grid gap-2.5">
                    {section.bulletPoints.map((bp, bidx) => (
                      <div
                        key={bidx}
                        className="flex items-start gap-3 rounded-2xl border border-surface-200 bg-surface-50 p-4 text-xs sm:text-[13px] text-ink-dark"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700 mt-0.5">
                          <CheckCircle2 size={13} />
                        </span>
                        <span className="leading-relaxed font-medium">{bp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Statutory Callout Box */}
              {section.callout && (
                <div className="rounded-2xl border border-gold-400/40 bg-gold-500/10 p-4 sm:p-5 text-navy-900 mt-4 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-navy-950 uppercase tracking-wider">
                    <Info size={16} className="text-gold-600 shrink-0" />
                    {section.callout.title}
                  </div>
                  <p className="text-xs sm:text-[13px] text-ink-dark leading-relaxed">
                    {section.callout.text}
                  </p>
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
