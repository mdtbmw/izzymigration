"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  id?: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

export function Accordion({ items, allowMultiple = false, className }: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggle = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, idx) => {
        const isOpen = openIndexes.includes(idx);
        return (
          <div
            key={item.id || idx}
            className={cn(
              "rounded-2xl border transition-all duration-300 overflow-hidden bg-surface-100",
              isOpen ? "border-gold-400 bg-white shadow-sm" : "border-gray-200/80 hover:border-gray-300"
            )}
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-heading font-bold text-navy-900 hover:text-gold-600 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="text-base md:text-lg">{item.question}</span>
              <span
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center bg-white border border-gray-200 text-navy-900 transition-transform duration-300 shrink-0",
                  isOpen && "rotate-180 bg-gold-500 text-white border-gold-500"
                )}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-6 pt-1 text-body text-sm md:text-base leading-relaxed border-t border-gray-100/60">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
