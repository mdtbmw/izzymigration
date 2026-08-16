import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  DollarSign,
  Clock,
  Globe,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { programs, getProgramById, getProgramsByRegion } from "@/data/programs";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { InvestmentOptions } from "@/components/programmes/InvestmentOptions";
import { ProcessRoadmap } from "@/components/programmes/ProcessRoadmap";
import { Accordion } from "@/components/ui/Accordion";
import { QuickInquiryForm } from "@/components/forms/QuickInquiryForm";
import { ProgrammeCard } from "@/components/programmes/ProgrammeCard";
import { ProgramActionButtons } from "@/components/programmes/ProgramActionButtons";

interface ProgramPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return programs.map((p) => ({
    id: p.id,
  }));
}

export async function generateMetadata({
  params,
}: ProgramPageProps): Promise<Metadata> {
  const { id } = await params;
  const program = getProgramById(id);

  if (!program) {
    return {
      title: "Programme Not Found",
    };
  }

  return {
    title: `${program.title} | Izzy Immigration`,
    description: program.intro.slice(0, 160),
    openGraph: {
      title: `${program.title} | Sovereign Advisory`,
      description: program.intro.slice(0, 160),
      images: [
        {
          url: program.flag.startsWith("/") ? program.flag : `/${program.flag}`,
          width: 800,
          height: 600,
          alt: program.title,
        },
      ],
    },
  };
}

export default async function ProgramDetailPage({ params }: ProgramPageProps) {
  const { id } = await params;
  const program = getProgramById(id);

  if (!program) {
    notFound();
  }

  const isCitizenship = program.type === "citizenship";
  let flagSrc = program.flag.startsWith("/") || program.flag.startsWith("http")
    ? program.flag
    : `/${program.flag}`;

  // Related programs in the same region
  const relatedPrograms = getProgramsByRegion(program.region)
    .filter((p) => p.id !== program.id)
    .slice(0, 3);

  const faqItems = (program.faqs || []).map((f) => ({
    question: f.q,
    answer: f.a,
  }));

  return (
    <div className="bg-surface-100 min-h-screen py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Breadcrumb
            items={[
              { label: "Programmes", href: "/programmes" },
              { label: program.region, href: `/programmes?region=${program.region}` },
              { label: program.title },
            ]}
          />
        </div>

        {/* Hero Banner Card */}
        <div className="bg-navy-950 text-white rounded-3xl p-8 sm:p-10 md:p-12 border border-navy-850 shadow-2xl relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-8 rounded-md overflow-hidden shadow-sm border border-white/20 shrink-0">
                  <Image src={flagSrc} alt={program.country} fill className="object-cover" sizes="48px" />
                </div>
                <Badge variant={isCitizenship ? "gold" : "soft"}>
                  {isCitizenship ? "Sovereign Citizenship" : "Permanent Residency"}
                </Badge>
                <span className="text-xs text-gray-400 font-semibold">
                  {program.region}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-white">
                {program.title}
              </h1>

              <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-3xl">
                {program.intro}
              </p>

              {/* Action Buttons for Brochure Modal & WhatsApp */}
              <ProgramActionButtons
                programTitle={program.title}
                country={program.country}
                className="pt-2"
              />
            </div>

            {/* Quick Metrics Column */}
            <div className="lg:col-span-4 bg-navy-900/90 rounded-2xl p-6 border border-white/10 space-y-4">
              <div>
                <span className="text-xs text-gray-400 font-medium block">Starting Investment:</span>
                <span className="text-2xl font-extrabold text-gold-400 font-heading">
                  {program.minInvestment}
                </span>
              </div>

              <div className="pt-3 border-t border-white/10">
                <span className="text-xs text-gray-400 font-medium block">Processing Timeline:</span>
                <span className="text-sm font-bold text-white">
                  {program.processing}
                </span>
              </div>

              <div className="pt-3 border-t border-white/10">
                <span className="text-xs text-gray-400 font-medium block">Due Diligence Authority:</span>
                <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5 mt-0.5">
                  <ShieldCheck className="w-4 h-4" /> Government Direct Filing
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Main Content & Sticky Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column (8 cols): Program Details */}
          <div className="lg:col-span-8 space-y-12">
            {/* Key Benefits Grid */}
            <section className="bg-white rounded-3xl p-8 md:p-10 border border-gray-200 shadow-sm space-y-6">
              <h2 className="text-xl md:text-2xl font-bold font-heading text-navy-900">
                Key Strategic Benefits &amp; Advantages
              </h2>

              {program.benefitGroups && program.benefitGroups.length > 0 ? (
                <div className="space-y-6">
                  {program.benefitGroups.map((group, idx) => (
                    <div key={idx} className="p-6 rounded-2xl bg-surface-100 border border-gray-200/60">
                      <h3 className="text-base font-bold font-heading text-navy-900 mb-3 text-gold-600">
                        {group.t}
                      </h3>
                      <ul className="space-y-2 text-xs md:text-sm text-body">
                        {group.items.map((item, iIdx) => (
                          <li key={iIdx} className="flex items-start gap-2.5">
                            <span className="w-4 h-4 rounded-full bg-gold-100 text-gold-600 flex items-center justify-center shrink-0 mt-0.5">
                              <CheckCircle2 className="w-3 h-3" />
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs md:text-sm text-body">
                  {program.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 p-4 rounded-2xl bg-surface-100 border border-gray-200/60">
                      <span className="w-5 h-5 rounded-full bg-gold-100 text-gold-600 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>

            {/* Qualifying Investment Routes */}
            {program.options && program.options.length > 0 && (
              <section className="space-y-6">
                <div className="space-y-2">
                  <Badge variant="gold">Statutory Pathways</Badge>
                  <h2 className="text-xl md:text-2xl font-bold font-heading text-navy-900">
                    Qualifying Investment Options
                  </h2>
                  <p className="text-xs md:text-sm text-body">
                    Choose between non-refundable statutory contributions, government-approved luxury real estate, or sovereign bond instruments.
                  </p>
                </div>

                <InvestmentOptions options={program.options} />
              </section>
            )}

            {/* Statutory Eligibility & Requirements */}
            {program.requirements && program.requirements.length > 0 && (
              <section className="bg-white rounded-3xl p-8 md:p-10 border border-gray-200 shadow-sm space-y-6">
                <div className="space-y-2">
                  <Badge variant="navy">Due Diligence Checklist</Badge>
                  <h2 className="text-xl md:text-2xl font-bold font-heading text-navy-900">
                    Applicant Eligibility &amp; Statutory Criteria
                  </h2>
                </div>

                <div className="space-y-3">
                  {program.requirements.map((req, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-2xl bg-surface-100 border border-gray-200/60 text-xs md:text-sm text-body"
                    >
                      <span className="w-6 h-6 rounded-full bg-navy-900 text-gold-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        0{idx + 1}
                      </span>
                      <span className="leading-relaxed">{req}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Step-by-Step Roadmap */}
            {program.process && program.process.length > 0 && (
              <section className="space-y-6">
                <div className="space-y-2">
                  <Badge variant="gold">End-to-End Execution</Badge>
                  <h2 className="text-xl md:text-2xl font-bold font-heading text-navy-900">
                    Step-by-Step Application Roadmap
                  </h2>
                  <p className="text-xs md:text-sm text-body">
                    How Izzy Immigration executes your sovereign application from preliminary pre-vetting to statutory naturalization certificate and passport delivery.
                  </p>
                </div>

                <ProcessRoadmap steps={program.process} />
              </section>
            )}

            {/* Program FAQ */}
            {faqItems.length > 0 && (
              <section className="bg-white rounded-3xl p-8 md:p-10 border border-gray-200 shadow-sm space-y-6">
                <div className="space-y-2">
                  <Badge variant="soft">Programme FAQ</Badge>
                  <h2 className="text-xl md:text-2xl font-bold font-heading text-navy-900">
                    Frequently Asked Questions about {program.country}
                  </h2>
                </div>

                <Accordion items={faqItems} />
              </section>
            )}
          </div>

          {/* Right Column (4 cols): Sticky Consultation & Brochure Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-gold-300 shadow-sovereign sticky top-24 space-y-4">
              <div className="border-b border-gray-100 pb-3">
                <Badge variant="gold">Private Client Desk</Badge>
                <h3 className="text-lg font-bold font-heading text-navy-900 mt-2">
                  Confidential Inquiry for {program.country}
                </h3>
                <p className="text-xs text-body mt-1">
                  Request detailed fee quote, family inclusion breakdown, and verified due diligence timeline.
                </p>
              </div>

              <QuickInquiryForm programTitle={program.title} />

              <div className="pt-4 border-t border-gray-100 space-y-2 text-[11px] text-gray-500">
                <div className="flex items-center gap-2 text-emerald-700 font-semibold">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Licensed Government Migration Agent</span>
                </div>
                <p>
                  Zero retail broker markups. Direct government escrow account payments.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Programmes in Region */}
        {relatedPrograms.length > 0 && (
          <section className="mt-20 pt-12 border-t border-gray-200">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl md:text-2xl font-bold font-heading text-navy-900">
                  Alternative Programmes in {program.region}
                </h3>
                <p className="text-xs md:text-sm text-body">
                  Compare other sovereign jurisdictions in the same region.
                </p>
              </div>
              <Link
                href={`/programmes?region=${program.region}`}
                className="text-xs font-bold text-gold-600 hover:underline"
              >
                View all in {program.region} →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPrograms.map((p) => (
                <ProgrammeCard key={p.id} program={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
