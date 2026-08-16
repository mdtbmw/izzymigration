import React from "react";
import { ShieldCheck, Scale, Lock, Users, Award, Gem } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function WhyChooseSection() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Government-Direct Accreditation",
      desc: "Direct representation before national Citizenship by Investment Units (CIUs) and immigration ministries without retail broker markups.",
    },
    {
      icon: Scale,
      title: "Transparent Fixed Statutory Pricing",
      desc: "Complete transparency with itemized government due diligence fees, statutory fund levies, and escrow safeguards.",
    },
    {
      icon: Lock,
      title: "Strict Private Client Confidentiality",
      desc: "Enterprise-grade encryption, GDPR compliance, and non-disclosure protocols protecting your family's personal wealth and sovereignty data.",
    },
    {
      icon: Users,
      title: "Multi-Generational Heritage Protection",
      desc: "Dossier architecture designed to include spouses, children up to age 30, dependent parents, grandparents, and future descendants.",
    },
    {
      icon: Award,
      title: "99.4% Verified Approval Track Record",
      desc: "Rigorous internal preliminary due diligence ensuring only petitions with 100% compliance are formally submitted to sovereign authorities.",
    },
    {
      icon: Gem,
      title: "High-Yield Sovereign Real Estate",
      desc: "Access to government-approved luxury hotel shares, resort residences, and freehold developments with contractual buyback options.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-surface-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Badge variant="soft">The Izzy Sovereign Advantage</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 font-heading">
            Your Trusted Partner for Global Visas &amp; Residency
          </h2>
          <p className="text-sm md:text-base text-body leading-relaxed">
            With over 15 years of international migration practice and advisory across 55+ jurisdictions, we provide unmatched clarity, security, and strategic execution.
          </p>
        </div>

        {/* 6-Grid Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-gray-200/80 hover:border-gold-400 hover:shadow-sovereign transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-surface-200 text-gold-600 group-hover:bg-gold-500 group-hover:text-white flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold font-heading text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-body leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
