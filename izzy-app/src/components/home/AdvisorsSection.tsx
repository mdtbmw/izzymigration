import React from "react";
import { Scale, Users, ShieldCheck, TrendingUp, Compass, FileCheck2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function AdvisorsSection() {
  const advisors = [
    {
      icon: Scale,
      role: "Immigration Counsel",
      desc: "Licensed attorneys specializing in sovereign naturalization laws, treaty applications, and judicial appeals.",
    },
    {
      icon: Users,
      role: "Residency & Citizenship Strategists",
      desc: "Private client mobility architects designing multi-jurisdictional family settlement blueprints.",
    },
    {
      icon: ShieldCheck,
      role: "Compliance & Due Diligence Officers",
      desc: "Internal AML, PEP, and World-Check risk analysts ensuring zero-defect petition submissions.",
    },
    {
      icon: TrendingUp,
      role: "Sovereign Real Estate Advisors",
      desc: "Vetting CIP-approved luxury hotel equities, freehold condominiums, and developer buyback covenants.",
    },
    {
      icon: Compass,
      role: "Relocation & Settling-In Support",
      desc: "Comprehensive on-the-ground assistance with tax registrations, banking escrows, and schooling.",
    },
    {
      icon: FileCheck2,
      role: "Archival Research & Document Unit",
      desc: "Genealogists and certified translators locating vital records in municipal and religious registries worldwide.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Badge variant="soft">Supporting Our Clients</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 font-heading">
            Advisors Who Navigate Every Jurisdiction
          </h2>
          <p className="text-sm md:text-base text-body">
            Our multi-disciplinary team brings together sovereign attorneys, compliance directors, and archival researchers across three continents.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advisors.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-surface-100 rounded-3xl p-8 border border-gray-200/80 hover:border-gold-400 hover:bg-white hover:shadow-sovereign transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white text-gold-600 group-hover:bg-gold-500 group-hover:text-white flex items-center justify-center mb-5 transition-colors shadow-2xs border border-gray-200 group-hover:border-gold-500">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-heading text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                  {item.role}
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
