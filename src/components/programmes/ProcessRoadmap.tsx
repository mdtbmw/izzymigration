import React from "react";
import { Check } from "lucide-react";
import { ProcessStep } from "@/types";
import { cn } from "@/lib/utils";

interface ProcessRoadmapProps {
  steps: ProcessStep[];
  className?: string;
}

export function ProcessRoadmap({ steps, className }: ProcessRoadmapProps) {
  if (!steps || steps.length === 0) return null;

  return (
    <div className={cn("relative space-y-6 md:space-y-8", className)}>
      {/* Connected Timeline Line for Desktop */}
      <div className="hidden md:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-gold-500 via-navy-800 to-gold-400" />

      {steps.map((step, idx) => (
        <div
          key={idx}
          className="relative flex flex-col md:flex-row gap-5 md:gap-8 items-start group"
        >
          {/* Step Number Circle */}
          <div className="relative z-10 w-16 h-16 rounded-2xl bg-navy-900 text-gold-400 border-2 border-gold-400 flex flex-col items-center justify-center font-heading font-extrabold shadow-lg shrink-0 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors duration-300">
            <span className="text-xs uppercase tracking-widest text-gray-300 group-hover:text-navy-900">Step</span>
            <span className="text-xl leading-none">0{idx + 1}</span>
          </div>

          {/* Step Content Box */}
          <div className="flex-grow bg-surface-100 hover:bg-white border border-gray-200 rounded-3xl p-6 md:p-8 transition-all duration-300 hover:shadow-card-hover hover:border-gold-300">
            <h4 className="text-lg md:text-xl font-bold font-heading text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">
              {step.t}
            </h4>
            <ul className="space-y-2 text-sm text-body">
              {step.items.map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-gold-100 text-gold-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
