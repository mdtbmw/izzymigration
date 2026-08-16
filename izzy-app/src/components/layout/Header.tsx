"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  Clock,
  Menu,
  ChevronDown,
  Search,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { SearchModal } from "./SearchModal";
import { MobileDrawer } from "./MobileDrawer";

export function Header() {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [expertiseDropdown, setExpertiseDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="w-full z-40 relative">
        {/* Top Info Bar */}
        <div className="bg-navy-950 text-gray-300 text-xs py-2.5 px-4 border-b border-navy-850 hidden lg:block">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-gold-400" />
                <span>{siteConfig.hours}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gold-400" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-gold-400 transition-colors">
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Advisory</span>
              </a>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <a href={`tel:${siteConfig.phoneTel}`} className="hover:text-gold-400 font-bold transition-colors">
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Sticky Navigation */}
        <div
          className={`w-full bg-[#f4f5f8] border-b border-gray-200 transition-all duration-300 ${
            isSticky ? "fixed top-0 left-0 right-0 shadow-lg bg-white/95 backdrop-blur-md py-3 z-50" : "py-4"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <img
                src="/assets/imgs/logo/logo.svg"
                alt={siteConfig.name}
                className="h-11 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation Menu */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-bold text-navy-900">
              <Link
                href="/"
                className={`hover:text-gold-600 transition-colors py-2 ${
                  pathname === "/" ? "text-gold-600" : ""
                }`}
              >
                Home
              </Link>

              {/* About Dropdown */}
              <div
                className="relative py-2 group"
                onMouseEnter={() => setAboutDropdown(true)}
                onMouseLeave={() => setAboutDropdown(false)}
              >
                <button
                  className="flex items-center gap-1 hover:text-gold-600 transition-colors font-bold"
                  onClick={() => setAboutDropdown(!aboutDropdown)}
                >
                  <span>About Us</span>
                  <ChevronDown className="w-4 h-4 text-gold-500 transition-transform group-hover:rotate-180" />
                </button>

                {aboutDropdown && (
                  <div className="absolute top-full left-0 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 px-2 z-50 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
                    <Link
                      href="/about"
                      className="block px-3 py-2 rounded-xl text-xs font-bold text-navy-900 hover:bg-gold-50 hover:text-gold-600 transition-colors"
                      onClick={() => setAboutDropdown(false)}
                    >
                      About Izzy
                    </Link>
                    <Link
                      href="/why-izzy"
                      className="block px-3 py-2 rounded-xl text-xs font-bold text-navy-900 hover:bg-gold-50 hover:text-gold-600 transition-colors"
                      onClick={() => setAboutDropdown(false)}
                    >
                      Why Choose Us
                    </Link>
                    <Link
                      href="/expertise"
                      className="block px-3 py-2 rounded-xl text-xs font-bold text-navy-900 hover:bg-gold-50 hover:text-gold-600 transition-colors"
                      onClick={() => setAboutDropdown(false)}
                    >
                      Our Expertise
                    </Link>
                  </div>
                )}
              </div>

              {/* Expertise Dropdown */}
              <div
                className="relative py-2 group"
                onMouseEnter={() => setExpertiseDropdown(true)}
                onMouseLeave={() => setExpertiseDropdown(false)}
              >
                <button
                  className="flex items-center gap-1 hover:text-gold-600 transition-colors font-bold"
                  onClick={() => setExpertiseDropdown(!expertiseDropdown)}
                >
                  <span>Our Expertise</span>
                  <ChevronDown className="w-4 h-4 text-gold-500 transition-transform group-hover:rotate-180" />
                </button>

                {expertiseDropdown && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 px-2 z-50 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
                    <Link
                      href="/expertise"
                      className="block px-3 py-2 rounded-xl text-xs font-bold text-navy-900 hover:bg-gold-50 hover:text-gold-600 transition-colors"
                      onClick={() => setExpertiseDropdown(false)}
                    >
                      Corporate &amp; Business Structuring
                    </Link>
                    <Link
                      href="/expertise"
                      className="block px-3 py-2 rounded-xl text-xs font-bold text-navy-900 hover:bg-gold-50 hover:text-gold-600 transition-colors"
                      onClick={() => setExpertiseDropdown(false)}
                    >
                      Private Client &amp; Wealth Mobility
                    </Link>
                    <Link
                      href="/expertise"
                      className="block px-3 py-2 rounded-xl text-xs font-bold text-navy-900 hover:bg-gold-50 hover:text-gold-600 transition-colors"
                      onClick={() => setExpertiseDropdown(false)}
                    >
                      Sovereign Compliance &amp; Due Diligence
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/citizenship"
                className={`hover:text-gold-600 transition-colors py-2 ${
                  pathname === "/citizenship" ? "text-gold-600" : ""
                }`}
              >
                Citizenship
              </Link>

              <Link
                href="/residency"
                className={`hover:text-gold-600 transition-colors py-2 ${
                  pathname === "/residency" ? "text-gold-600" : ""
                }`}
              >
                Residency
              </Link>

              <Link
                href="/programmes"
                className={`hover:text-gold-600 transition-colors py-2 ${
                  pathname.startsWith("/programmes") ? "text-gold-600" : ""
                }`}
              >
                All Programmes
              </Link>

              <Link
                href="/compare"
                className={`hover:text-gold-600 transition-colors py-2 ${
                  pathname === "/compare" ? "text-gold-600" : ""
                }`}
              >
                Compare
              </Link>

              <Link
                href="/contact"
                className={`hover:text-gold-600 transition-colors py-2 ${
                  pathname === "/contact" ? "text-gold-600" : ""
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right CTAs */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="w-10 h-10 rounded-full bg-white hover:bg-gold-500 hover:text-white text-navy-900 hidden sm:flex items-center justify-center transition-colors shadow-xs border border-gray-200"
                aria-label="Search catalogue"
              >
                <Search className="w-4 h-4" />
              </button>

              <Link
                href="/contact"
                className="rr-btn hidden sm:inline-flex"
              >
                Book A Consultation <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={() => setIsMobileOpen(true)}
                className="w-10 h-10 rounded-xl bg-white hover:bg-gold-500 hover:text-white flex lg:hidden items-center justify-center text-navy-900 transition-colors shadow-xs border border-gray-200"
                aria-label="Open mobile menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />

      {/* Universal Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
