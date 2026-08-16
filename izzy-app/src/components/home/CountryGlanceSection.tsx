import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function CountryGlanceSection() {
  const topCountries = [
    { country: "United Kingdom", flag: "/assets/imgs/flags/gb.svg", type: "Innovator Founder & Student", time: "3-8 weeks", price: "Point-based", link: "/visas" },
    { country: "Portugal", flag: "/assets/imgs/flags/pt.svg", type: "CMVM Fund Golden Visa", time: "12-18 months", price: "EUR 250,000", link: "/programmes/portugal-golden-visa" },
    { country: "Greece", flag: "/assets/imgs/flags/gr.svg", type: "Permanent Golden Visa", time: "3-6 months", price: "EUR 250,000", link: "/programmes/greece-golden-visa" },
    { country: "Malta", flag: "/assets/imgs/flags/mt.svg", type: "Direct Citizenship (MEIN)", time: "12-36 months", price: "EUR 175,000", link: "/programmes/malta-citizenship" },
    { country: "Italy", flag: "/assets/imgs/flags/it.svg", type: "Investor Visa & Jus Sanguinis", time: "3-12 months", price: "EUR 250,000 / Free", link: "/ancestry" },
    { country: "Canada", flag: "/assets/imgs/flags/ca.svg", type: "Start-Up Visa & Express Entry", time: "12-24 months", price: "CAD 200,000", link: "/programmes/canada-startup-visa" },
    { country: "United States", flag: "/assets/imgs/flags/us.svg", type: "EB-5 Direct Green Card", time: "24-36 months", price: "USD 800,000", link: "/programmes/usa-eb5-residency" },
    { country: "Singapore", flag: "/assets/imgs/flags/sg.svg", type: "Global Investor Programme (GIP)", time: "9-12 months", price: "SGD 10,000,000", link: "/programmes/singapore-gip" },
  ];

  return (
    <section className="py-20 md:py-28 bg-surface-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-2xl">
            <Badge variant="soft">Quick Jurisdictional Overview</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 font-heading">
              Top Programmes At A Glance
            </h2>
            <p className="text-sm md:text-base text-body">
              Fast comparison of premier global mobility hubs, timelines, and statutory minimums.
            </p>
          </div>
          <Link
            href="/countries"
            className="text-xs font-bold text-gold-600 hover:text-navy-900 flex items-center gap-1.5 self-start md:self-auto"
          >
            <span>View All Countries Directory</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topCountries.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className="bg-white rounded-3xl p-6 border border-gray-200/80 hover:border-gold-400 hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-10 h-7 rounded shadow-xs overflow-hidden border border-gray-200 shrink-0">
                    <Image src={item.flag} alt={item.country} fill className="object-cover" sizes="40px" />
                  </div>
                  <h3 className="text-base font-bold font-heading text-navy-900 group-hover:text-gold-600 transition-colors">
                    {item.country}
                  </h3>
                </div>
                <p className="text-xs text-body font-medium mb-4 line-clamp-1">{item.type}</p>
                <div className="bg-surface-100 p-3 rounded-xl space-y-1 text-xs mb-2">
                  <div className="flex justify-between"><span className="text-gray-500">Starting:</span><span className="font-bold text-gold-600">{item.price}</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Timeline:</span><span className="font-medium text-navy-900">{item.time}</span></div>
                </div>
              </div>
              <div className="pt-2 flex items-center justify-between text-xs font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                <span>Explore</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
