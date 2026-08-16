"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ChevronDown, Phone, Mail, MessageSquare, MapPin } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

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
        className="fixed inset-0 bg-navy-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 w-[85%] max-w-sm h-full bg-white shadow-2xl z-10 flex flex-col overflow-y-auto animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-5 border-b border-gray-100 flex items-center justify-between">
          <Link href="/" onClick={onClose} className="flex items-center gap-2">
            <div className="relative w-32 h-9">
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
            className="w-9 h-9 rounded-full bg-surface-200 hover:bg-gold-500 hover:text-white flex items-center justify-center text-navy-900 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Accordion */}
        <div className="p-5 flex-grow space-y-3">
          {/* Programmes Dropdown */}
          <div className="border-b border-gray-100 pb-2">
            <button
              onClick={() => toggleSection("programmes")}
              className="w-full flex items-center justify-between py-2 text-sm font-bold text-navy-900"
            >
              <span>Programmes &amp; Passports</span>
              <ChevronDown
                className={cn(
                  "w-4 h-4 transition-transform text-gray-400",
                  expandedSection === "programmes" && "rotate-180 text-gold-500"
                )}
              />
            </button>
            {expandedSection === "programmes" && (
              <div className="pl-3 py-2 space-y-2 text-xs text-body">
                <Link
                  href="/programmes"
                  onClick={onClose}
                  className="block py-1 hover:text-gold-600 font-semibold"
                >
                  All 55+ Sovereign Programmes
                </Link>
                <Link
                  href="/citizenship"
                  onClick={onClose}
                  className="block py-1 hover:text-gold-600"
                >
                  Citizenship by Investment
                </Link>
                <Link
                  href="/residency"
                  onClick={onClose}
                  className="block py-1 hover:text-gold-600"
                >
                  Residency &amp; Golden Visas
                </Link>
                <Link
                  href="/ancestry"
                  onClick={onClose}
                  className="block py-1 hover:text-gold-600"
                >
                  Citizenship by Ancestry
                </Link>
                <Link
                  href="/real-estate"
                  onClick={onClose}
                  className="block py-1 hover:text-gold-600"
                >
                  Global Real Estate
                </Link>
                <Link
                  href="/visas"
                  onClick={onClose}
                  className="block py-1 hover:text-gold-600"
                >
                  Global Visa Solutions
                </Link>
              </div>
            )}
          </div>

          {/* Direct Links */}
          <Link
            href="/about"
            onClick={onClose}
            className="block py-2 text-sm font-bold text-navy-900 hover:text-gold-600 border-b border-gray-100"
          >
            About Us
          </Link>
          <Link
            href="/why-izzy"
            onClick={onClose}
            className="block py-2 text-sm font-bold text-navy-900 hover:text-gold-600 border-b border-gray-100"
          >
            Why Izzy
          </Link>
          <Link
            href="/expertise"
            onClick={onClose}
            className="block py-2 text-sm font-bold text-navy-900 hover:text-gold-600 border-b border-gray-100"
          >
            Our Expertise
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
            Compare Programmes
          </Link>
          <Link
            href="/blog"
            onClick={onClose}
            className="block py-2 text-sm font-bold text-navy-900 hover:text-gold-600 border-b border-gray-100"
          >
            Sovereign Intelligence / News
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
        <div className="p-5 bg-surface-100 border-t border-gray-200/70 space-y-4">
          <div className="space-y-2 text-xs text-body">
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="flex items-center gap-2.5 hover:text-gold-600"
            >
              <Phone className="w-4 h-4 text-gold-500 shrink-0" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2.5 hover:text-gold-600"
            >
              <Mail className="w-4 h-4 text-gold-500 shrink-0" />
              <span>{siteConfig.email}</span>
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-emerald-700 font-semibold"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>WhatsApp Direct Chat</span>
            </a>
          </div>

          <Button
            href="/contact"
            variant="gold"
            size="sm"
            onClick={onClose}
            className="w-full justify-center"
          >
            Book Free Assessment
          </Button>
        </div>
      </div>
    </div>
  );
}
