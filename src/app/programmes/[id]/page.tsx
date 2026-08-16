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
  Building,
  Umbrella,
  Compass,
  ArrowRight,
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
import { assetPath } from "@/lib/brand";

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
          url: assetPath(program.hero || program.flag),
          width: 1200,
          height: 630,
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
  const flagSrc = assetPath(program.flag);
  const heroSrc = assetPath(program.hero);
  const lifestyleSrc = assetPath(program.lifestyleImage || program.hero);
  const propertySrc = assetPath(program.propertyImage || program.hero);

  // Related programs in the same region
  const relatedPrograms = getProgramsByRegion(program.region)
    .filter((p) => p.id !== program.id)
    .slice(0, 3);

  const faqItems = (program.faqs || []).map((f) => ({
    question: f.q,
    answer: f.a,
  }));

  return (
    <div className="bg-surface-100 min-h-screen pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Breadcrumb
            items={[
              { label: "Programmes", href: "/programmes" },
              { label: program.region, href: `/programmes?region=${encodeURIComponent(program.region)}` },
              { label: program.title },
            ]}
          />
        </div>

        {/* Hero Banner Card with Real Country Background */}
        <div className="relative overflow-hidden rounded-[32px] border border-navy-850 bg-navy-950 p-8 sm:p-12 shadow-2xl text-white mb-12">
          {/* Background Country Photo Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={heroSrc}
              alt={program.country}
              className="h-full w-full object-cover object-center"
            />
            {/* Directional Sovereign Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/85 to-navy-950/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center gap-3">
                <div className="relative h-7 w-10 overflow-hidden rounded-md border border-white/30 shadow bg-white">
                  <img src={flagSrc} alt={program.country} className="h-full w-full object-cover" />
                </div>
                <Badge variant={isCitizenship ? "gold" : "navy"}>
                  {isCitizenship ? "Sovereign Citizenship" : "Permanent Residency"}
                </Badge>
                <span className="text-xs text-white/70 font-semibold">
                  {program.region}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white leading-tight">
                {program.title}
              </h1>

              <p className="text-sm md:text-base text-white/85 leading-relaxed max-w-3xl font-normal">
                {program.intro}
              </p>

              {/* Action Buttons */}
              <ProgramActionButtons
                programTitle={program.title}
                country={program.country}
                className="pt-2"
              />
            </div>

            {/* Quick Metrics Column */}
            <div className="lg:col-span-4 rounded-2xl border border-white/15 bg-navy-900/90 p-6 backdrop-blur-md space-y-4">
              <div>
                <span className="text-xs text-white/70 font-medium block">Starting Investment:</span>
                <span className="text-2xl font-extrabold text-gold-400 font-heading">
                  {program.minInvestment}
                </span>
              </div>

              <div className="pt-3 border-t border-white/10">
                <span className="text-xs text-white/70 font-medium block">Processing Timeline:</span>
                <span className="text-sm font-bold text-white">
                  {program.processing}
                </span>
              </div>

              <div className="pt-3 border-t border-white/10">
                <span className="text-xs text-white/70 font-medium block">Due Diligence Authority:</span>
                <span className="text-xs font-semibold text-gold-400 flex items-center gap-1.5 mt-0.5">
                  <ShieldCheck className="w-4 h-4" /> Government Direct Statutory Channel
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Main Content & Sticky Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column (8 cols): Structured Sections with Imagery */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Section 1: Alternating Layout (Image Left + Key Strategic Benefits Right) */}
            <section className="rounded-3xl border border-surface-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="grid gap-8 md:grid-cols-12 items-center">
                {/* Left Photo */}
                <div className="md:col-span-5 relative h-64 sm:h-72 w-full overflow-hidden rounded-2xl bg-navy-950 shadow-md">
                  <img
                    src={heroSrc}
                    alt={`${program.country} Landscape`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-extrabold flex items-center gap-1.5">
                    <Compass size={14} className="text-gold-400" />
                    <span>{program.country} Sovereign Corridor</span>
                  </div>
                </div>

                {/* Right Content */}
                <div className="md:col-span-7 space-y-4">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-gold-600">
                    Strategic Advantages
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy-900 font-heading leading-snug">
                    Key Programme Benefits
                  </h2>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-ink-dark">
                    {program.benefits.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700 mt-0.5">
                          <CheckCircle2 size={13} />
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 2: Visual Showcase Gallery (3 Real Photos) */}
            <section className="space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-extrabold uppercase tracking-wider text-gold-600">
                  Visual Showcase
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-navy-900 font-heading">
                  Destination &amp; Lifestyle Gallery
                </h2>
                <p className="text-xs sm:text-sm text-ink-light">
                  A glimpse into the sovereign environment, capital lifestyle, and luxury real estate opportunities in {program.country}.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {/* Photo 1: Country Landmark */}
                <div className="group relative h-48 overflow-hidden rounded-2xl border border-surface-200 bg-navy-950 shadow-sm">
                  <img
                    src={heroSrc}
                    alt={`${program.country} Capital`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-3 text-[11px] font-extrabold text-white">
                    Sovereign Territory
                  </span>
                </div>

                {/* Photo 2: Prime Real Estate */}
                <div className="group relative h-48 overflow-hidden rounded-2xl border border-surface-200 bg-navy-950 shadow-sm">
                  <img
                    src={propertySrc}
                    alt={`${program.country} Real Estate`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-3 text-[11px] font-extrabold text-white">
                    Luxury Developments
                  </span>
                </div>

                {/* Photo 3: Coastal / Lifestyle */}
                <div className="group relative h-48 overflow-hidden rounded-2xl border border-surface-200 bg-navy-950 shadow-sm">
                  <img
                    src={lifestyleSrc}
                    alt={`${program.country} Lifestyle`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-3 text-[11px] font-extrabold text-white">
                    Lifestyle &amp; Climate
                  </span>
                </div>
              </div>
            </section>

            {/* Section 3: Qualifying Investment Routes */}
            {program.options && program.options.length > 0 && (
              <section className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-gold-600">
                    Statutory Pathways
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy-900 font-heading">
                    Qualifying Investment Options
                  </h2>
                  <p className="text-xs sm:text-sm text-ink-light">
                    Choose between non-refundable statutory contributions, government-approved luxury real estate, or sovereign regulated funds.
                  </p>
                </div>

                <InvestmentOptions options={program.options} />
              </section>
            )}

            {/* Section 4: Due Diligence & Statutory Criteria */}
            {program.requirements && program.requirements.length > 0 && (
              <section className="rounded-3xl border border-surface-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-gold-600">
                    Due Diligence Checklist
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy-900 font-heading">
                    Applicant Eligibility &amp; Statutory Criteria
                  </h2>
                </div>

                <div className="space-y-3">
                  {program.requirements.map((req, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3.5 rounded-2xl border border-surface-200 bg-surface-50 p-4 text-xs sm:text-sm text-ink-dark"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-950 text-[11px] font-extrabold text-gold-400 mt-0.5">
                        0{idx + 1}
                      </span>
                      <span className="leading-relaxed">{req}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Section 5: Step-by-Step Roadmap */}
            {program.process && program.process.length > 0 && (
              <section className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-gold-600">
                    End-to-End Execution
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy-900 font-heading">
                    Step-by-Step Application Roadmap
                  </h2>
                  <p className="text-xs sm:text-sm text-ink-light">
                    How Izzy Immigration executes your sovereign application from preliminary pre-vetting to statutory naturalization certificate and passport delivery.
                  </p>
                </div>

                <ProcessRoadmap steps={program.process} />
              </section>
            )}

            {/* Section 6: Programme FAQs */}
            {faqItems.length > 0 && (
              <section className="rounded-3xl border border-surface-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-gold-600">
                    Frequently Asked Questions
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy-900 font-heading">
                    {program.country} Programme FAQs
                  </h2>
                </div>

                <Accordion items={faqItems} />
              </section>
            )}

          </div>

          {/* Right Column (4 cols): Sticky Private Client Inquiry Desk */}
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-28 space-y-6">
              {/* Form Card */}
              <div className="rounded-3xl border border-surface-200 bg-white p-6 sm:p-7 shadow-xl">
                <div className="border-b border-surface-200 pb-4 mb-6">
                  <span className="chip chip--gold text-[10px] py-0.5 px-2.5 mb-2 inline-block">
                    Confidential Assessment
                  </span>
                  <h3 className="text-lg font-extrabold text-navy-900 font-heading">
                    Request Programme Dossier
                  </h3>
                  <p className="mt-1 text-xs text-ink-light leading-relaxed">
                    Submit your details for a tailored eligibility evaluation and official statutory fee breakdown for {program.title}.
                  </p>
                </div>

                <QuickInquiryForm programTitle={program.title} />
              </div>

              {/* Verified License Guarantee */}
              <div className="rounded-2xl border border-gold-400/40 bg-gold-500/10 p-5 text-navy-900">
                <div className="flex items-center gap-2.5 font-extrabold text-xs text-navy-950 uppercase tracking-wider">
                  <ShieldCheck size={18} className="text-gold-600" />
                  Government Direct License
                </div>
                <p className="mt-2 text-xs text-ink-dark leading-relaxed">
                  All due diligence is processed directly through official government Citizenship by Investment Units (CIU) with strict legal privilege.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Programmes in Region */}
        {relatedPrograms.length > 0 && (
          <div className="mt-20 border-t border-surface-200 pt-14">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-gold-600">
                  Regional Comparison
                </span>
                <h3 className="text-2xl font-extrabold text-navy-900 font-heading mt-1">
                  Other Programmes in {program.region}
                </h3>
              </div>
              <Link
                href={`/programmes?region=${encodeURIComponent(program.region)}`}
                className="text-xs font-bold text-gold-600 hover:text-gold-700 inline-flex items-center gap-1"
              >
                View all {program.region} routes <ArrowRight size={13} />
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPrograms.map((rel) => (
                <ProgrammeCard key={rel.id} program={rel} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
