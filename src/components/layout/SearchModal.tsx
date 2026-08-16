"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Search, X, Shield, Landmark, Sparkles, BookOpen, ArrowRight, CornerDownLeft } from "lucide-react";
import { programs } from "@/data/programs";
import { blogPosts } from "@/data/blogPosts";
import { countries } from "@/data/countries";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setQuery("");
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Global hotkey Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchingPrograms = q
    ? programs.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.country.toLowerCase().includes(q) ||
          p.region.toLowerCase().includes(q) ||
          p.minInvestment.toLowerCase().includes(q)
      ).slice(0, 6)
    : programs.slice(0, 4);

  const matchingBlogs = q
    ? blogPosts.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.category.toLowerCase().includes(q) ||
          b.excerpt.toLowerCase().includes(q)
      ).slice(0, 3)
    : [];

  const matchingCountries = q
    ? countries.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.region.toLowerCase().includes(q)
      ).slice(0, 3)
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy-950/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden z-10 border border-gray-200 animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[80vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Search Header Input */}
        <div className="relative p-4 sm:p-5 border-b border-gray-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-gold-500 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search 55+ programmes, golden visas, countries, articles..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-sm md:text-base font-medium outline-none placeholder-gray-400 bg-transparent text-navy-900"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-gray-400 hover:text-navy-900 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-bold text-gray-500 bg-surface-200 hover:bg-gray-200 px-2 py-1 rounded-md"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-grow">
          {/* Programs Group */}
          <div>
            <div className="flex items-center justify-between mb-3 text-xs font-bold text-gray-400 uppercase tracking-wider">
              <span>{q ? "Matching Sovereign Programmes" : "Popular Programmes"}</span>
              <span className="text-[11px] font-semibold text-gold-600">
                {matchingPrograms.length} Results
              </span>
            </div>

            <div className="space-y-2">
              {matchingPrograms.map((p) => {
                let flagSrc = p.flag.startsWith("/") || p.flag.startsWith("http") ? p.flag : `/${p.flag}`;
                return (
                  <Link
                    key={p.id}
                    href={`/programmes/${p.id}`}
                    onClick={onClose}
                    className="flex items-center justify-between p-3 rounded-2xl border border-gray-100 bg-surface-100 hover:bg-white hover:border-gold-300 hover:shadow-card transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative w-8 h-6 rounded overflow-hidden shadow-2xs border border-gray-200 shrink-0">
                        <Image src={flagSrc} alt={p.country} fill className="object-cover" sizes="32px" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-navy-900 group-hover:text-gold-600">
                          {p.title}
                        </h4>
                        <span className="text-[11px] text-gray-400">
                          {p.country} • {p.region} • {p.processing}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs font-bold text-gold-600 font-heading">
                        {p.minInvestment}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-gold-600 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Countries Group (if matching) */}
          {matchingCountries.length > 0 && (
            <div>
              <div className="mb-3 text-xs font-bold text-gray-400 uppercase tracking-wider">
                Jurisdictions &amp; Countries
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {matchingCountries.map((c) => (
                  <Link
                    key={c.code}
                    href={`/programmes/${c.programId}`}
                    onClick={onClose}
                    className="p-3 rounded-xl border border-gray-100 bg-surface-100 hover:bg-white hover:border-gold-300 transition-colors flex items-center gap-2 text-xs font-bold text-navy-900"
                  >
                    <div className="relative w-6 h-4 rounded overflow-hidden border border-gray-200 shrink-0">
                      <Image src={c.flag} alt={c.name} fill className="object-cover" sizes="24px" />
                    </div>
                    <span className="truncate">{c.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Blog Articles Group (if matching) */}
          {matchingBlogs.length > 0 && (
            <div>
              <div className="mb-3 text-xs font-bold text-gray-400 uppercase tracking-wider">
                Sovereign Intelligence &amp; Articles
              </div>
              <div className="space-y-2">
                {matchingBlogs.map((b) => (
                  <Link
                    key={b.slug}
                    href={`/blog/${b.slug}`}
                    onClick={onClose}
                    className="flex items-center justify-between p-3 rounded-xl border border-gray-100 bg-surface-100 hover:bg-white hover:border-gold-300 transition-colors group"
                  >
                    <div className="flex items-center gap-2.5">
                      <BookOpen className="w-4 h-4 text-gold-500 shrink-0" />
                      <span className="text-xs font-bold text-navy-900 group-hover:text-gold-600 line-clamp-1">
                        {b.title}
                      </span>
                    </div>
                    <span className="text-[10px] text-gray-400 shrink-0">{b.readTime}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Quick Shortcuts */}
          <div className="pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-500">
            <span>Quick shortcuts:</span>
            <div className="flex items-center gap-2">
              <Link href="/citizenship" onClick={onClose} className="hover:text-gold-600 font-semibold underline">
                Citizenship (CBI)
              </Link>
              <span>•</span>
              <Link href="/residency" onClick={onClose} className="hover:text-gold-600 font-semibold underline">
                Golden Visas
              </Link>
              <span>•</span>
              <Link href="/ancestry" onClick={onClose} className="hover:text-gold-600 font-semibold underline">
                Ancestry Quiz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
