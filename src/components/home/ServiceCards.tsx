import React from "react";
import Link from "next/link";
import { Compass, Landmark, ShieldCheck, Building, ArrowRight } from "lucide-react";

export function ServiceCards() {
  const services = [
    {
      icon: Landmark,
      title: "Strategic Advisory & Consulting",
      desc: "Structured immigration and investment planning, business setup and long-term global mobility strategy for individuals, families and enterprises.",
      link: "/expertise",
    },
    {
      icon: ShieldCheck,
      title: "Investment Immigration",
      desc: "Citizenship & residency solutions through investment — golden visa and citizenship-by-investment programmes across 46+ jurisdictions, structured for tax efficiency and family inclusion.",
      link: "/programmes",
    },
    {
      icon: Building,
      title: "Global Real Estate Investment",
      desc: "Qualifying real estate and premium property investment options that support residency, citizenship and long-term wealth growth worldwide.",
      link: "/real-estate",
    },
    {
      icon: Compass,
      title: "Luxury Cruise & Travel Experiences",
      desc: "World-class cruise journeys and bespoke travel experiences that complete the premium global mobility lifestyle.",
      link: "/cruise-travel",
    },
  ];

  return (
    <section className="py-16 bg-[#f4f5f8] border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                href={item.link}
                className="service__item group"
              >
                <div>
                  <div className="service__item-icon">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold font-heading text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs md:text-sm text-body leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold text-navy-900 group-hover:text-gold-600 transition-colors pt-2 border-t border-gray-200/60">
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
