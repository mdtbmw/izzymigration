import { Check } from "lucide-react";
import type { ProcessStep } from "@/types";

/** Vertical connected timeline for a programme's application process. */
export function ProcessRoadmap({ steps }: { steps: ProcessStep[] }) {
  if (!steps || steps.length === 0) return null;

  return (
    <div className="relative space-y-6 md:space-y-8">
      <div className="absolute bottom-6 left-8 top-6 hidden w-0.5 bg-gradient-to-b from-gold-500 via-navy-800 to-gold-400 md:block" />
      {steps.map((step, idx) => (
        <div key={idx} className="group relative flex flex-col items-start gap-5 md:flex-row md:gap-8">
          <div className="relative z-10 flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl border-2 border-gold-400 bg-navy-900 font-extrabold text-gold-400 shadow-lg transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-navy-950">
            <span className="text-[10px] uppercase tracking-widest text-white/60 transition-colors group-hover:text-navy-900">
              Step
            </span>
            <span className="text-xl leading-none">{String(idx + 1).padStart(2, "0")}</span>
          </div>
          <div className="card flex-1 rounded-3xl p-6 md:p-8">
            <h4 className="text-lg font-extrabold text-navy-900 transition-colors group-hover:text-gold-600 md:text-xl">
              {step.t}
            </h4>
            <ul className="mt-3 space-y-2.5 text-[14px] leading-relaxed text-ink">
              {step.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-600">
                    <Check size={10} strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}