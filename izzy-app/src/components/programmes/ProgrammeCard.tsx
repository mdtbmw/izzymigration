import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight, Clock, DollarSign } from "lucide-react";
import { Program } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface ProgrammeCardProps {
  program: Program;
  className?: string;
}

export function ProgrammeCard({ program, className }: ProgrammeCardProps) {
  // Normalize flag path
  let flagSrc = program.flag;
  if (!flagSrc.startsWith("/") && !flagSrc.startsWith("http")) {
    flagSrc = `/${flagSrc}`;
  }

  const isCitizenship = program.type === "citizenship";

  return (
    <div
      className={cn(
        "group relative flex flex-col h-full bg-surface-200 hover:bg-white border border-gray-200/80 hover:border-gold-300 rounded-[22px] p-6 md:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-sovereign",
        className
      )}
    >
      {/* Top Header: Flag & Program Badge */}
      <div className="flex items-center justify-between gap-3 mb-5">
        <div className="relative w-[52px] h-[36px] rounded-md overflow-hidden shadow-sm border border-gray-200/60 bg-white flex-shrink-0">
          <Image
            src={flagSrc}
            alt={`${program.country} Flag`}
            fill
            className="object-cover"
            sizes="52px"
          />
        </div>
        <Badge variant={isCitizenship ? "gold" : "navy"}>
          {isCitizenship ? "Citizenship" : "Residency"}
        </Badge>
      </div>

      {/* Program Content */}
      <div className="flex flex-col flex-grow">
        {/* Title */}
        <h4 className="text-lg md:text-xl font-bold font-heading text-navy-900 mb-3 group-hover:text-gold-600 transition-colors line-clamp-2">
          <Link href={`/programmes/${program.id}`}>
            {program.title}
          </Link>
        </h4>

        {/* Investment & Processing Badges */}
        <div className="space-y-1.5 mb-4 text-sm">
          <div className="flex items-center text-navy-900 font-semibold gap-1.5">
            <DollarSign className="w-4 h-4 text-gold-500 shrink-0" />
            <span>Investment:</span>
            <span className="text-gold-600 font-bold ml-auto text-right">
              {program.minInvestment}
            </span>
          </div>
          <div className="flex items-center text-body text-xs gap-1.5">
            <Clock className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            <span>Processing:</span>
            <span className="text-gray-600 font-medium ml-auto">
              {program.processing}
            </span>
          </div>
        </div>

        {/* Key Features List */}
        <ul className="space-y-2 mb-6 flex-grow text-xs md:text-sm text-body">
          {program.benefits.slice(0, 2).map((benefit, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="w-4 h-4 rounded-full bg-gold-100 text-gold-600 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-2.5 h-2.5" />
              </span>
              <span className="line-clamp-2">{benefit}</span>
            </li>
          ))}
        </ul>

        {/* Bottom CTA Row: Learn More + Signature Circle Arrow */}
        <div className="pt-4 border-t border-gray-200/60 mt-auto flex items-center justify-between">
          <Link
            href={`/programmes/${program.id}`}
            className="text-sm font-bold text-navy-900 group-hover:text-gold-600 transition-colors"
          >
            Explore Program
          </Link>
          <Link
            href={`/programmes/${program.id}`}
            className="w-10 h-10 rounded-full bg-white text-navy-900 group-hover:bg-gold-500 group-hover:text-white flex items-center justify-center shadow-sm border border-gray-200/60 group-hover:border-gold-500 transition-all duration-300"
            aria-label={`View details for ${program.title}`}
          >
            <ArrowRight className="w-4 h-4 transition-transform duration-300 -rotate-45 group-hover:rotate-0" />
          </Link>
        </div>
      </div>
    </div>
  );
}
