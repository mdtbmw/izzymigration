"use client";

import React, { useState } from "react";
import { Download, MessageSquare } from "lucide-react";
import { BrochureModal } from "./BrochureModal";
import { createWhatsAppLink } from "@/lib/whatsapp";

interface ProgramActionButtonsProps {
  programTitle: string;
  country: string;
  className?: string;
}

export function ProgramActionButtons({
  programTitle,
  country,
  className,
}: ProgramActionButtonsProps) {
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  const directWhatsAppUrl = createWhatsAppLink({
    type: "inquiry",
    program: programTitle,
    country: country,
    subject: `Statutory Quotas & Due Diligence: ${programTitle}`,
    message: `Hello Izzy Migration Mentors Senior Counsel, I am inquiring about the ${programTitle} programme. Please provide official statutory fee breakdowns, investment routes, and processing timelines.`,
  });

  return (
    <>
      <div className={className}>
        <div className="flex flex-wrap items-center gap-3.5">
          <button
            type="button"
            onClick={() => setIsBrochureOpen(true)}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold-500 hover:bg-white text-navy-950 px-6 py-3.5 text-xs sm:text-sm font-extrabold shadow-lg transition-all duration-300"
          >
            <Download size={15} />
            <span>Download Official Dossier</span>
          </button>

          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/60 bg-white/10 hover:bg-white hover:text-navy-950 text-white px-6 py-3.5 text-xs sm:text-sm font-extrabold backdrop-blur-md shadow-md transition-all duration-300"
          >
            <MessageSquare size={15} className="text-gold-400" />
            <span>WhatsApp Senior Counsel</span>
          </a>
        </div>
      </div>

      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
        programTitle={programTitle}
        country={country}
      />
    </>
  );
}
