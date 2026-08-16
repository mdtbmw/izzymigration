"use client";

import React, { useState } from "react";
import { generalFaqs } from "@/data/faqs";
import { Accordion } from "./Accordion";
import { Badge } from "./Badge";
import { cn } from "@/lib/utils";

export function FAQFilterable() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "General", "Citizenship", "Residency", "Ancestry", "Tax & Legal"];

  const filteredFaqs = (
    selectedCategory === "All"
      ? generalFaqs
      : generalFaqs.filter((f) => f.category === selectedCategory)
  ).map((f) => ({
    question: f.question,
    answer: f.answer,
  }));

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Filter Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-bold transition-all",
                isActive
                  ? "bg-navy-900 text-white shadow-sm"
                  : "bg-surface-200 text-gray-600 hover:bg-gray-200"
              )}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <Accordion items={filteredFaqs} />
    </div>
  );
}
