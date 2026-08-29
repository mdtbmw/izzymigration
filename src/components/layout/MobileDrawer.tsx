"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ChevronDown, Phone, Mail, MessageSquare } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { createWhatsAppLink } from "@/lib/whatsapp";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleSection = (id: string) => {
    setExpandedSection((prev) => (prev === id ? null : id));
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy-950/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 w-[88%] max-w-sm h-full bg-white shadow-2xl z-10 flex flex-col overflow-y-auto animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center justify-between">
          <Link href="/" onClick={onClose} className="flex items-center gap-2">
            <div className="relative w-28 sm:w-32 h-8 sm:h-9">
              <Image
                src="/assets/imgs/logo/logo.svg"
                alt={siteConfig.name}
                fill
                className="object-contain"
                sizes="128px"
              />
            </div>
          </Link>
          <button
            onClick={onClose}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-surface-200 hover:bg-gold-500 hover:text-white flex items-center justify-center text-navy-900 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Navigation Accordion */}
        <div className="p-4 sm:p-5 flex-grow space-y-2.5">
          <Link
            href="/"
            onClick={onClose}
            className="block py-2 text-sm font-bold text-navy-900 hover:text-gold-600 border-b border-gray-100"
          >
            Home
          </Link>

          {/* About Dropdown */}
          <div className="border-b border-gray-100 pb-2">
            <button
              onClick={() => toggleSection("about")}
              className="w-full flex items-center justify-between py-2 text-sm font-bold text-navy-900"
            >
              <span>About Izzy</span>
              <ChevronDown
                className={cn(
                  "w-4 h-4 transition-transform text-gray-400",
                  expandedSection === "about" && "rotate-180 text-gold-500"
                )}
              />
            </button>
            {expandedSection === "about" && (
              <div className="pl-3 py-1.5 space-y-2 text-xs text-ink-light">
                <Link href="/about" onClick={onClose} className="block py-1 hover:text-gold-600 font-semibold">
                  About Izzy Migration Mentors
                </Link>
                <Link href="/why-izzy" onClick={onClose} className="block py-1 hover:text-gold-600 font-semibold">
                  Why Choose Us
                </Link>
                <Link href="/expertise" onClick={onClose} className="block py-1 hover:text-gold-600 font-semibold">
                  Our Expertise
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/citizenship"
            onClick={onClose}
            className="block py-2 text-sm font-bold text-navy-900 hover:text-gold-600 border-b border-gray-100"
          >
            Citizenship by Investment
          </Link>

          <Link
            href="/residency"
            onClick={onClose}
            className="block py-2 text-sm font-bold text-navy-900 hover:text-gold-600 border-b border-gray-100"
          >
            Residency &amp; Golden Visas
          </Link>

          {/* Other Dropdown */}
          <div className="border-b border-gray-100 pb-2">
            <button
              onClick={() => toggleSection("other")}
              className="w-full flex items-center justify-between py-2 text-sm font-bold text-navy-900"
            >
              <span>Other Solutions</span>
              <ChevronDown
                className={cn(
                  "w-4 h-4 transition-transform text-gray-400",
                  expandedSection === "other" && "rotate-180 text-gold-500"
                )}
              />
            </button>
            {expandedSection === "other" && (
              <div className="pl-3 py-1.5 space-y-2 text-xs text-ink-light">
                <Link href="/real-estate" onClick={onClose} className="block py-1 hover:text-gold-600 font-semibold">
                  Global Real Estate
                </Link>
                <Link href="/ancestry" onClick={onClose} className="block py-1 hover:text-gold-600 font-semibold">
                  Citizenship by Ancestry
                </Link>
                <Link href="/cruise-travel" onClick={onClose} className="block py-1 hover:text-gold-600 font-semibold">
                  Luxury Cruise &amp; Travel
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/programmes"
            onClick={onClose}
            className="block py-2 text-sm font-bold text-navy-900 hover:text-gold-600 border-b border-gray-100"
          >
            All 55+ Programmes
          </Link>

          <Link
            href="/countries"
            onClick={onClose}
            className="block py-2 text-sm font-bold text-navy-900 hover:text-gold-600 border-b border-gray-100"
          >
            Jurisdiction Directory
          </Link>

          <Link
            href="/compare"
            onClick={onClose}
            className="block py-2 text-sm font-bold text-navy-900 hover:text-gold-600 border-b border-gray-100"
          >
            Compare Corridors
          </Link>

          <Link
            href="/blog"
            onClick={onClose}
            className="block py-2 text-sm font-bold text-navy-900 hover:text-gold-600 border-b border-gray-100"
          >
            Sovereign Intelligence
          </Link>

          <Link
            href="/contact"
            onClick={onClose}
            className="block py-2 text-sm font-bold text-navy-900 hover:text-gold-600 border-b border-gray-100"
          >
            Contact &amp; Offices
          </Link>
        </div>

        {/* Footer Contact Info */}
        <div className="p-4 sm:p-5 bg-surface-100 border-t border-gray-200/70 space-y-3.5">
          <div className="space-y-2 text-xs text-body">
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="flex items-center gap-2.5 hover:text-gold-600 font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-gold-500 shrink-0" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2.5 hover:text-gold-600 font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-gold-500 shrink-0" />
              <span className="truncate">{siteConfig.email}</span>
            </a>
            <a
              href={createWhatsAppLink({
                type: "consultation",
                message: "Hello Izzy Migration Mentors, I would like to inquire about sovereign mobility advisory.",
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-[#128C7E] font-bold"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
              <span>WhatsApp Direct Chat</span>
            </a>
          </div>

          <Button
            href="/contact"
            variant="gold"
            size="sm"
            onClick={onClose}
            className="w-full justify-center text-xs"
          >
            Book Free Assessment
          </Button>
        </div>
      </div>
    </div>
  );
}
