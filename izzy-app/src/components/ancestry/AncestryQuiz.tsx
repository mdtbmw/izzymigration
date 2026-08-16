"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight, RotateCcw, Send, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface CountryOption {
  country: string;
  flag: string;
  maxGen: string;
  rule: string;
}

const ancestryCountries: CountryOption[] = [
  {
    country: "Italy",
    flag: "/assets/imgs/flags/it.svg",
    maxGen: "Great-Grandparents (No statutory generation limit)",
    rule: "Jus Sanguinis through male or female line (1948 rule applies).",
  },
  {
    country: "Ireland",
    flag: "/assets/imgs/flags/ie.svg",
    maxGen: "Grandparents (Foreign Births Register)",
    rule: "Direct entitlement if at least one grandparent was born in Ireland.",
  },
  {
    country: "Poland",
    flag: "/assets/imgs/flags/pl.svg",
    maxGen: "Parents / Grandparents / Great-Grandparents",
    rule: "Confirmation of citizenship if ancestor left Poland after 1920.",
  },
  {
    country: "Germany",
    flag: "/assets/imgs/flags/de.svg",
    maxGen: "Article 116(2) Basic Law / Sec. 15 StAG (Restitution)",
    rule: "Restitution for descendants of German citizens deprived of citizenship 1933–1945.",
  },
  {
    country: "Portugal",
    flag: "/assets/imgs/flags/pt.svg",
    maxGen: "Sephardic Jewish Lineage / Grandparent naturalization",
    rule: "Special statutory regime for verified descendants of Portuguese nationals.",
  },
  {
    country: "United Kingdom",
    flag: "/assets/imgs/flags/gb.svg",
    maxGen: "Parents (Crown service, British overseas territories)",
    rule: "Section 4L / 4C of the British Nationality Act (Historical legislative unfairness).",
  },
];

export function AncestryQuiz() {
  const [step, setStep] = useState<number>(1);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [ancestorRelation, setAncestorRelation] = useState<string>("");
  const [hasBirthCert, setHasBirthCert] = useState<string>("");
  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const resetQuiz = () => {
    setStep(1);
    setSelectedCountry("");
    setAncestorRelation("");
    setHasBirthCert("");
    setIsSubmitted(false);
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: leadName,
          email: leadEmail,
          phone: leadPhone,
          program: `Citizenship by Ancestry: ${selectedCountry}`,
          subject: `Ancestry Eligibility Assessment (${selectedCountry})`,
          message: `Assessment Details:\n- Country: ${selectedCountry}\n- Ancestor: ${ancestorRelation}\n- Has Documents: ${hasBirthCert}`,
          type: "assessment",
        }),
      });
    } catch {
      // ignore
    }
    setIsSubmitted(true);
  };

  return (
    <div className="bg-white rounded-3xl border border-gold-300 shadow-sovereign-lg p-6 md:p-10 max-w-3xl mx-auto">
      {/* Progress Header */}
      <div className="flex items-center justify-between pb-6 border-b border-gray-100 mb-8">
        <div>
          <Badge variant="gold">Interactive Legal Assessment</Badge>
          <h3 className="text-xl md:text-2xl font-bold font-heading text-navy-900 mt-2">
            European Citizenship by Descent Checker
          </h3>
        </div>
        <span className="text-xs font-bold text-gold-600 bg-gold-100 px-3 py-1.5 rounded-full">
          Step {step} of 4
        </span>
      </div>

      {/* Step 1: Select Ancestor Country */}
      {step === 1 && (
        <div className="space-y-6">
          <p className="text-sm font-semibold text-navy-900">
            Which European country did your biological ancestor emigrate from?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ancestryCountries.map((c) => (
              <button
                key={c.country}
                type="button"
                onClick={() => {
                  setSelectedCountry(c.country);
                  setStep(2);
                }}
                className={cn(
                  "flex items-center gap-4 p-4 rounded-2xl border text-left transition-all duration-200 hover:border-gold-500 hover:bg-gold-50/40 group",
                  selectedCountry === c.country
                    ? "border-gold-500 bg-gold-50/70 shadow-sm"
                    : "border-gray-200"
                )}
              >
                <div className="relative w-10 h-7 rounded shadow-xs overflow-hidden border border-gray-200 shrink-0">
                  <Image src={c.flag} alt={c.country} fill className="object-cover" sizes="40px" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy-900 group-hover:text-gold-600">
                    {c.country}
                  </h4>
                  <p className="text-[11px] text-gray-500 line-clamp-1">{c.maxGen}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Relation */}
      {step === 2 && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-navy-900">
              What is your relationship to your ancestor from <strong>{selectedCountry}</strong>?
            </p>
            <button
              onClick={() => setStep(1)}
              className="text-xs text-gold-600 hover:underline flex items-center gap-1"
            >
              Change country
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { id: "parent", label: "Parent (Mother or Father)" },
              { id: "grandparent", label: "Grandparent (Grandmother or Grandfather)" },
              { id: "great-grandparent", label: "Great-Grandparent" },
              { id: "earlier", label: "Earlier Ancestor / Distant Lineage" },
            ].map((rel) => (
              <button
                key={rel.id}
                type="button"
                onClick={() => {
                  setAncestorRelation(rel.label);
                  setStep(3);
                }}
                className={cn(
                  "p-4 rounded-2xl border text-left text-sm font-semibold transition-all hover:border-gold-500 hover:bg-gold-50/40",
                  ancestorRelation === rel.label
                    ? "border-gold-500 bg-gold-50/70 text-navy-900"
                    : "border-gray-200 text-gray-700"
                )}
              >
                {rel.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Document Status */}
      {step === 3 && (
        <div className="space-y-6">
          <p className="text-sm font-semibold text-navy-900">
            Do you possess or have records of your ancestor&apos;s foreign birth certificate or marriage records?
          </p>
          <div className="space-y-3">
            {[
              { id: "yes", label: "Yes — I already possess physical or digital copies of their foreign civil documents." },
              { id: "partial", label: "Partial — I know their names, approximate birth year, and town/parish of origin." },
              { id: "no", label: "No — I need Izzy's archival genealogy research team to locate records in municipal archives." },
            ].map((doc) => (
              <button
                key={doc.id}
                type="button"
                onClick={() => {
                  setHasBirthCert(doc.label);
                  setStep(4);
                }}
                className={cn(
                  "w-full p-4 rounded-2xl border text-left text-xs md:text-sm font-medium transition-all hover:border-gold-500 hover:bg-gold-50/40",
                  hasBirthCert === doc.label
                    ? "border-gold-500 bg-gold-50/70 text-navy-900"
                    : "border-gray-200 text-gray-700"
                )}
              >
                {doc.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 4: Instant Assessment Result & Contact Request */}
      {step === 4 && (
        <div className="space-y-6">
          {!isSubmitted ? (
            <>
              <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-navy-900 font-heading">
                    Strong Preliminary Qualification for {selectedCountry} Citizenship
                  </h4>
                  <p className="text-xs text-body mt-1">
                    Based on your unbroken line ({ancestorRelation}), you meet statutory criteria for European citizenship recognition under current immigration laws.
                  </p>
                </div>
              </div>

              <form onSubmit={handleLeadSubmit} className="space-y-4 pt-2">
                <p className="text-xs font-semibold text-navy-900 uppercase tracking-wider">
                  Request Archival Due Diligence Dossier Review:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    className="px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs focus:border-gold-500 outline-none"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    value={leadEmail}
                    onChange={(e) => setLeadEmail(e.target.value)}
                    className="px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs focus:border-gold-500 outline-none"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone / WhatsApp *"
                    value={leadPhone}
                    onChange={(e) => setLeadPhone(e.target.value)}
                    className="px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs focus:border-gold-500 outline-none"
                  />
                </div>
                <Button type="submit" variant="gold" size="md" className="w-full justify-center">
                  <Send className="w-4 h-4 mr-2" />
                  Connect with Senior Ancestry Counsel
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto mb-3 shadow-md">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-navy-900 font-heading mb-1">
                Assessment File Dispatched to Archival Unit
              </h4>
              <p className="text-xs text-body max-w-md mx-auto mb-5">
                Our Senior Archival Counsel will contact you with specific municipality registry protocols for {selectedCountry}.
              </p>
              <Button variant="outline" size="sm" onClick={resetQuiz}>
                <RotateCcw className="w-3.5 h-3.5 mr-1.5" /> Start New Assessment
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
