import React from "react";
import Link from "next/link";
import { ShieldCheck, Landmark, Home, Compass, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function ServicePillars() {
  const pillars = [
    {
      icon: Landmark,
      title: "Strategic Sovereign Advisory & Consulting",
      desc: "Holistic jurisdictional analysis, tax residency certificates, and tailored family mobility roadmap design.",
      link: "/expertise",
    },
    {
      icon: ShieldCheck,
      title: "Investment Immigration (CBI & Golden Visas)",
      desc: "Direct naturalization and European permanent residency across 55+ government-accredited jurisdictions.",
      link: "/programmes",
    },
    {
      icon: Home,
      title: "Global Real Estate Investment",
      desc: "Government-approved prime resort equity, coastal condominiums, and freehold developments with guaranteed yields.",
      link: "/real-estate",
    },
    {
      icon: Compass,
      title: "Luxury Cruise & Maritime Experiences",
      desc: "Specialized visa processing, statutory medical credentialing, and consular handling for crew and executives.",
      link: "/cruise-travel",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                href={item.link}
                className="bg-surface-100 hover:bg-white rounded-3xl p-7 border border-gray-200/80 hover:border-gold-400 hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white text-gold-600 group-hover:bg-gold-500 group-hover:text-white flex items-center justify-center mb-5 transition-colors duration-300 shadow-2xs border border-gray-200/60 group-hover:border-gold-500">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold font-heading text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-body leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
