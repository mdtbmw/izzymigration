"use client";

import { useState } from "react";
import { Download, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BrochureModal } from "@/components/programmes/BrochureModal";
import { siteConfig } from "@/data/siteConfig";

interface ProgramActionButtonsProps {
  programTitle: string;
  country: string;
  className?: string;
}

export function ProgramActionButtons({ programTitle, country, className }: ProgramActionButtonsProps) {
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    `Hello Izzy Immigration, I would like to inquire about statutory quotas and fee schedules for ${programTitle}.`
  )}`;

  return (
    <>
      <div className={className}>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="gold" onClick={() => setIsBrochureOpen(true)} className="shadow-md">
            <Download size={16} /> Download Official 2026 Dossier
          </Button>
          <Button
            href={whatsappUrl}
            variant="outline"
            className="border-surface-300 bg-white text-navy-900 shadow-sm hover:border-gold-500 hover:bg-gold-500/10 hover:text-navy-950"
          >
            <MessageSquare size={16} className="text-emerald-600" /> WhatsApp Direct Inquiry
          </Button>
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