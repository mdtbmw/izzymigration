"use client";

import { useState, type ReactNode } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  id: string;
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpen?: string;
  className?: string;
}

/** Unified accordion (Bootstrap collapse replacement). */
export function Accordion({ items, defaultOpen, className }: AccordionProps) {
  const [open, setOpen] = useState<string | null>(defaultOpen ?? items[0]?.id ?? null);

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item) => {
        const isOpen = open === item.id;
        return (
          <div key={item.id} className={cn("acc-item", isOpen && "acc-item--open")}>
            <button
              type="button"
              className="acc-btn"
              onClick={() => setOpen(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              aria-controls={`panel-${item.id}`}
            >
              <span className="text-[15px] font-bold text-navy-900">{item.title}</span>
              <span className="acc-btn__icon">
                <Plus size={16} strokeWidth={2.5} />
              </span>
            </button>
            <div id={`panel-${item.id}`} className="acc-panel" role="region">
              <div className="acc-panel__inner">
                <div className="acc-panel__body">{item.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}