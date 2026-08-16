"use client";

import React, { useState } from "react";
import { Download, MessageSquare, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BrochureModal } from "./BrochureModal";
import { siteConfig } from "@/data/siteConfig";

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

  const directWhatsAppUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    `Hello Izzy Immigration, I would like to inquire about statutory quotas and fee schedules for ${programTitle}.`
  )}`;

  return (
    <>
      <div className={className}>
        <div className="flex flex-wrap items-center gap-3">
          <Button
            variant="gold"
            size="md"
            onClick={() => setIsBrochureOpen(true)}
            className="shadow-md"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Official 2026 Dossier
          </Button>

          <Button
            href={directWhatsAppUrl}
            external
            variant="outline"
            size="md"
            className="border-white/30 text-white hover:bg-white/10"
          >
            <MessageSquare className="w-4 h-4 mr-2 text-emerald-400" />
            WhatsApp Direct Inquiry
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
