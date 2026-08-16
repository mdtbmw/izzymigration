"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe, Shield, Landmark, Home, Compass, Sparkles } from "lucide-react";
import { programs } from "@/data/programs";
import { cn } from "@/lib/utils";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  const [activeTab, setActiveTab] = useState<"citizenship" | "residency" | "ancestry" | "realestate" | "visas">("citizenship");

  if (!isOpen) return null;

  const citizenshipPrograms = programs.filter((p) => p.type === "citizenship").slice(0, 8);
  const residencyPrograms = programs.filter((p) => p.type === "residency").slice(0, 8);

  const ancestryItems = [
    { name: "Italy (Jus Sanguinis)", link: "/ancestry", desc: "No generation limit — 1948 rule & municipal petitions." },
    { name: "Ireland (Foreign Births Register)", link: "/ancestry", desc: "Grandparent lineage with full EU settlement rights." },
    { name: "Poland (Citizenship Confirmation)", link: "/ancestry", desc: "Lineage recovery for pre-WWII emigrants." },
    { name: "Germany (Article 116 Restitution)", link: "/ancestry", desc: "Restitution for descendants of German citizens." },
    { name: "Portugal (Descent & Sephardic)", link: "/ancestry", desc: "Fast-track naturalization for proven ancestral roots." },
    { name: "United Kingdom (Historical Unfairness)", link: "/ancestry", desc: "Section 4L British Nationality Act claims." },
  ];

  const realEstateItems = [
    { title: "Caribbean CIP Luxury Resorts", desc: "Government-approved 5-star shares from $200k with 5-7 year buyback.", link: "/real-estate" },
    { title: "Greek Mediterranean Villas & Urban Apartments", desc: "Qualifying €250k - €800k properties with guaranteed rental returns.", link: "/real-estate" },
    { title: "Cyprus & UAE High-Yield Portfolios", desc: "Prime commercial and residential assets in zero-tax jurisdictions.", link: "/real-estate" },
    { title: "Private Client Developer Due Diligence", desc: "Full statutory title vetting and escrow oversight.", link: "/real-estate" },
  ];

  const visaItems = [
    { title: "Global Digital Nomad Visas", desc: "Remote work residency in Spain, Portugal, Greece, Dubai.", link: "/visas" },
    { title: "Start-Up & Innovator Founder Visas", desc: "Fast-track routes in the UK, Canada, and European Union.", link: "/visas" },
    { title: "Global Skilled Migration", desc: "Points-based talent routes for executives and engineers.", link: "/visas" },
    { title: "International Student & Graduate Visas", desc: "Top-tier academic pathways with post-study work permits.", link: "/visas" },
  ];

  return (
    <div
      className="absolute top-full left-0 w-full bg-white border-b border-gray-200/80 shadow-2xl z-40 transition-all animate-in fade-in slide-in-from-top-2 duration-200"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Tab Navigation Column */}
          <div className="col-span-3 border-r border-gray-100 pr-6 space-y-1.5">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2 px-3">
              Practice Areas
            </span>

            {[
              { id: "citizenship", label: "Citizenship by Investment", icon: Shield, count: "10 Programmes" },
              { id: "residency", label: "Residency & Golden Visas", icon: Landmark, count: "45 Programmes" },
              { id: "ancestry", label: "Citizenship by Ancestry", icon: Sparkles, count: "6 Jurisdictions" },
              { id: "realestate", label: "Global Sovereign Real Estate", icon: Home, count: "CIP Portfolios" },
              { id: "visas", label: "Global Visa Solutions", icon: Compass, count: "Nomad & Skilled" },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  onMouseEnter={() => setActiveTab(tab.id as any)}
                  className={cn(
                    "w-full flex items-center justify-between p-3 rounded-xl text-left transition-all duration-200 group",
                    isActive
                      ? "bg-navy-900 text-white shadow-md"
                      : "hover:bg-surface-200 text-navy-900"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={cn("w-4 h-4", isActive ? "text-gold-400" : "text-gold-500")} />
                    <div>
                      <span className="text-sm font-bold block">{tab.label}</span>
                      <span className={cn("text-[11px]", isActive ? "text-gray-300" : "text-gray-400")}>
                        {tab.count}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className={cn("w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity", isActive && "opacity-100 text-gold-400")} />
                </button>
              );
            })}

            <div className="pt-4 mt-4 border-t border-gray-100">
              <Link
                href="/programmes"
                onClick={onClose}
                className="text-xs font-bold text-gold-600 hover:text-navy-900 flex items-center gap-1.5 px-3 py-1.5"
              >
                <span>View Complete Sovereign Catalogue (55+)</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Right Content Panel */}
          <div className="col-span-9 pl-2">
            {/* CITIZENSHIP PANEL */}
            {activeTab === "citizenship" && (
              <div>
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
                  <div>
                    <h4 className="text-base font-bold text-navy-900 font-heading">
                      Direct Sovereign Citizenship by Investment
                    </h4>
                    <p className="text-xs text-body">
                      Direct passport issuance with visa-free travel to 150+ countries.
                    </p>
                  </div>
                  <Link
                    href="/citizenship"
                    onClick={onClose}
                    className="text-xs font-bold text-gold-600 hover:underline"
                  >
                    View All Citizenship Routes →
                  </Link>
                </div>

                <div className="grid grid-cols-4 gap-4">
                  {citizenshipPrograms.map((p) => {
                    let flagSrc = p.flag.startsWith("/") || p.flag.startsWith("http") ? p.flag : `/${p.flag}`;
                    return (
                      <Link
                        key={p.id}
                        href={`/programmes/${p.id}`}
                        onClick={onClose}
                        className="group flex flex-col p-3.5 rounded-xl border border-gray-100 bg-surface-100 hover:bg-white hover:border-gold-300 hover:shadow-card transition-all duration-200"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <div className="relative w-7 h-5 rounded overflow-hidden shadow-2xs border border-gray-200 shrink-0">
                            <Image src={flagSrc} alt={p.country} fill className="object-cover" sizes="28px" />
                          </div>
                          <span className="text-xs font-bold text-navy-900 group-hover:text-gold-600 truncate">
                            {p.country}
                          </span>
                        </div>
                        <span className="text-[11px] text-gray-500 line-clamp-1 mb-2 font-medium">
                          {p.title}
                        </span>
                        <div className="mt-auto pt-2 border-t border-gray-200/50 flex items-center justify-between text-[11px]">
                          <span className="font-bold text-gold-600">{p.minInvestment}</span>
                          <span className="text-gray-400">{p.processing}</span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

            {/* RESIDENCY PANEL */}
            {activeTab === "residency" && (
              <div>
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
                  <div>
                    <h4 className="text-base font-bold text-navy-900 font-heading">
                      Residency by Investment &amp; European Golden Visas
                    </h4>
                    <p className="text-xs text-body">
                      Schengen mobility, minimal physical stay, and paths to citizenship.
                    </p>
                  </div>
                  <Link
                    href="/residency"
                    onClick={onClose}
                    className="text-xs font-bold text-gold-600 hover:underline"
                  >
                    View All Golden Visas →
                  </Link>
                </div>

                <div className="grid grid-cols-4 gap-4">
                  {residencyPrograms.map((p) => {
                    let flagSrc = p.flag.startsWith("/") || p.flag.startsWith("http") ? p.flag : `/${p.flag}`;
                    return (
                      <Link
                        key={p.id}
                        href={`/programmes/${p.id}`}
                        onClick={onClose}
                        className="group flex flex-col p-3.5 rounded-xl border border-gray-100 bg-surface-100 hover:bg-white hover:border-gold-300 hover:shadow-card transition-all duration-200"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <div className="relative w-7 h-5 rounded overflow-hidden shadow-2xs border border-gray-200 shrink-0">
                            <Image src={flagSrc} alt={p.country} fill className="object-cover" sizes="28px" />
                          </div>
                          <span className="text-xs font-bold text-navy-900 group-hover:text-gold-600 truncate">
                            {p.country}
                          </span>
                        </div>
                        <span className="text-[11px] text-gray-500 line-clamp-1 mb-2 font-medium">
                          {p.title}
                        </span>
                        <div className="mt-auto pt-2 border-t border-gray-200/50 flex items-center justify-between text-[11px]">
                          <span className="font-bold text-gold-600">{p.minInvestment}</span>
                          <span className="text-gray-400">{p.processing}</span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ANCESTRY PANEL */}
            {activeTab === "ancestry" && (
              <div>
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
                  <div>
                    <h4 className="text-base font-bold text-navy-900 font-heading">
                      Citizenship by Descent (Jus Sanguinis Lineage)
                    </h4>
                    <p className="text-xs text-body">
                      Reclaim your European heritage without investment prerequisites.
                    </p>
                  </div>
                  <Link href="/ancestry" onClick={onClose} className="text-xs font-bold text-gold-600 hover:underline">
                    Take Eligibility Quiz →
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {ancestryItems.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.link}
                      onClick={onClose}
                      className="p-4 rounded-2xl border border-gray-100 bg-surface-100 hover:bg-white hover:border-gold-300 hover:shadow-card transition-all duration-200 group"
                    >
                      <h5 className="text-sm font-bold text-navy-900 group-hover:text-gold-600 mb-1">
                        {item.name}
                      </h5>
                      <p className="text-xs text-body">{item.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* REAL ESTATE PANEL */}
            {activeTab === "realestate" && (
              <div>
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
                  <div>
                    <h4 className="text-base font-bold text-navy-900 font-heading">
                      High-Yield Sovereign Real Estate
                    </h4>
                    <p className="text-xs text-body">
                      CIP-qualifying luxury hospitality, freehold condominiums, and commercial assets.
                    </p>
                  </div>
                  <Link href="/real-estate" onClick={onClose} className="text-xs font-bold text-gold-600 hover:underline">
                    Explore Real Estate →
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {realEstateItems.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.link}
                      onClick={onClose}
                      className="p-4 rounded-2xl border border-gray-100 bg-surface-100 hover:bg-white hover:border-gold-300 hover:shadow-card transition-all duration-200 group"
                    >
                      <h5 className="text-sm font-bold text-navy-900 group-hover:text-gold-600 mb-1">
                        {item.title}
                      </h5>
                      <p className="text-xs text-body">{item.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* VISAS PANEL */}
            {activeTab === "visas" && (
              <div>
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
                  <div>
                    <h4 className="text-base font-bold text-navy-900 font-heading">
                      Global Visa Solutions &amp; Strategic Mobility
                    </h4>
                    <p className="text-xs text-body">
                      Independent founder visas, nomad tracks, and skilled employment mobility.
                    </p>
                  </div>
                  <Link href="/visas" onClick={onClose} className="text-xs font-bold text-gold-600 hover:underline">
                    View Visa Pathways →
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {visaItems.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.link}
                      onClick={onClose}
                      className="p-4 rounded-2xl border border-gray-100 bg-surface-100 hover:bg-white hover:border-gold-300 hover:shadow-card transition-all duration-200 group"
                    >
                      <h5 className="text-sm font-bold text-navy-900 group-hover:text-gold-600 mb-1">
                        {item.title}
                      </h5>
                      <p className="text-xs text-body">{item.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
