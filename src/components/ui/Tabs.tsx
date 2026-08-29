"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TabsProps {
  tabs: { id: string; label: string; content: ReactNode }[];
  initialTab?: string;
  className?: string;
}

/** Unified tabbed panes (template tab-slider replacement). */
export function Tabs({ tabs, initialTab, className }: TabsProps) {
  const [active, setActive] = useState(initialTab ?? tabs[0]?.id ?? "");
  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <div className={className}>
      <div className="flex justify-center">
        <div className="tab-list" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={tab.id === active}
              className={cn("tab-btn", tab.id === active && "tab-btn--active")}
              onClick={() => setActive(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div key={current.id} className="reveal is-visible mt-8" role="tabpanel">
        {current.content}
      </div>
    </div>
  );
}