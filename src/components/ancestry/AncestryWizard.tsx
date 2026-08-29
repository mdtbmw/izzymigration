"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, ChevronRight, Loader2, RotateCcw, Send, Sparkles, ShieldCheck, TreePine } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { submitLead } from "@/lib/lead";
import { siteConfig } from "@/data/siteConfig";
import { getClientProfile, saveClientProfile, dispatchToWhatsApp, createWhatsAppLink } from "@/lib/whatsapp";

interface AncestryPathway {
  id: string;
  country: string;
  code: string;
  program: string;
  flag: string;
  generations: string;
  timeline: string;
  description: string;
}

const PATHWAYS: AncestryPathway[] = [
  {
    id: "italy",
    country: "Italy",
    code: "IT",
    program: "Italian Citizenship by Descent (Jure Sanguinis)",
    flag: "/assets/imgs/flags/it.svg",
    generations: "Unbroken line to 1861 (Parents, Grandparents, Great-Grandparents)",
    timeline: "12 - 24 months",
    description: "One of the world's most generous citizenship by descent laws with no generation limit, provided the ancestor did not renounce Italian nationality prior to the next generation's birth.",
  },
  {
    id: "ireland",
    country: "Ireland",
    code: "IE",
    program: "Irish Foreign Births Register (FBR)",
    flag: "/assets/imgs/flags/gb.svg",
    generations: "Parents or Grandparents born in Ireland",
    timeline: "9 - 14 months",
    description: "Direct Irish citizenship granting full European Union settlement and unrestricted living and working rights in the United Kingdom under the Common Travel Area.",
  },
  {
    id: "poland",
    country: "Poland",
    code: "PL",
    program: "Confirmation of Polish Citizenship",
    flag: "/assets/imgs/flags/hu.svg",
    generations: "Parents, Grandparents, or Great-Grandparents",
    timeline: "10 - 18 months",
    description: "Confirmation of existing Polish citizenship through descent with no Polish language or physical residency requirement.",
  },
  {
    id: "germany",
    country: "Germany",
    code: "DE",
    program: "Restoration & Declaration (Art. 116 / StAG 5)",
    flag: "/assets/imgs/flags/ch.svg",
    generations: "Descendants of German citizens deprived of nationality or affected by gender discrimination",
    timeline: "12 - 24 months",
    description: "Statutory citizenship declaration offering dual nationality and full German citizenship rights.",
  },
  {
    id: "greece",
    country: "Greece",
    code: "GR",
    program: "Greek Citizenship by Ancestry (Municipal Registration)",
    flag: "/assets/imgs/flags/gr.svg",
    generations: "Parents or Grandparents registered in Greek Municipal Records",
    timeline: "12 - 18 months",
    description: "Direct European passport access through verified lineage registered in municipal birth registries (Dimotologio).",
  },
  {
    id: "uk",
    country: "United Kingdom",
    code: "UK",
    program: "UK Ancestry Visa & Commonwealth Lineage",
    flag: "/assets/imgs/flags/gb.svg",
    generations: "Grandparent born in the UK, Channel Islands or Isle of Man",
    timeline: "3 - 6 months",
    description: "5-year settlement pathway to Permanent Settlement (ILR) and British Citizenship for qualifying Commonwealth citizens.",
  },
];

export function AncestryWizard() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedCountry, setSelectedCountry] = useState<string>("italy");
  const [ancestor, setAncestor] = useState<string>("grandparent");
  const [documents, setDocuments] = useState<string[]>(["birth_cert"]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
    website: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [whatsappLink, setWhatsappLink] = useState("");

  useEffect(() => {
    const saved = getClientProfile();
    setFormData((prev) => ({
      ...prev,
      name: prev.name || saved.name || "",
      email: prev.email || saved.email || "",
      phone: prev.phone || saved.phone || "",
    }));
  }, []);

  const currentPathway = PATHWAYS.find((p) => p.id === selectedCountry) || PATHWAYS[0];

  const toggleDoc = (docId: string) => {
    setDocuments((prev) =>
      prev.includes(docId) ? prev.filter((d) => d !== docId) : [...prev, docId]
    );
  };

  const handleAssessmentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    saveClientProfile({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    });

    const summary = `Ancestry Assessment for ${currentPathway.country} (${currentPathway.program}). Qualifying Ancestor: ${ancestor}. Held Documents: ${documents.join(", ") || "None"}. Client Notes: ${formData.notes || "None"}`;

    const waData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      country: currentPathway.country,
      program: currentPathway.program,
      subject: `Citizenship by Ancestry: ${currentPathway.country}`,
      message: summary,
      type: "ancestry" as const,
    };

    const waLink = createWhatsAppLink(waData);
    setWhatsappLink(waLink);

    const res = await submitLead({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      program: `Ancestry: ${currentPathway.country}`,
      subject: `Ancestry Assessment — ${currentPathway.country}`,
      message: summary,
      type: "ancestry",
      website: formData.website,
    });

    if (res.ok) {
      setStatus("success");
      dispatchToWhatsApp(waData);
    } else {
      setStatus("error");
      setErrorMsg(res.error || "Assessment submission failed. Please try again.");
    }
  };

  const resetWizard = () => {
    setStep(1);
    setStatus("idle");
    setFormData({ name: "", email: "", phone: "", notes: "", website: "" });
  };

  return (
    <div className="card overflow-hidden rounded-[28px] border border-surface-200 bg-white p-6 shadow-xl shadow-navy-950/5 md:p-10">
      {/* Progress header */}
      <div className="mb-8 border-b border-surface-200 pb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-500/15 text-gold-600">
              <TreePine size={24} />
            </span>
            <div>
              <span className="chip chip--gold uppercase tracking-wider text-[11px]">Interactive Assessment</span>
              <h3 className="text-xl font-extrabold text-navy-900">Check Your Ancestry & Descent Eligibility</h3>
            </div>
          </div>
          <span className="rounded-full bg-surface-100 px-4 py-1.5 text-xs font-bold text-navy-900">
            Step {step} of 4
          </span>
        </div>

        {/* Progress bar */}
        <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-surface-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-gold-500 to-gold-400 transition-all duration-500"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>
      </div>

      {status === "success" ? (
        <div className="py-8 text-center">
          <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30">
            <CheckCircle2 size={40} />
          </span>
          <h4 className="mt-6 text-2xl font-extrabold text-navy-900">Assessment Dossier Created</h4>
          <p className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-ink-light">
            Thank you, <strong>{formData.name}</strong>. Our sovereign genealogy research team has received your lineage details for <strong>{currentPathway.program}</strong>. A specialist will review your records and reach out within 24 hours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={whatsappLink || `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(`Hello Izzy Migration Mentors, I submitted an ancestry eligibility assessment for ${currentPathway.country}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold bg-[#25D366] hover:bg-[#128C7E] text-white border-0"
            >
              Open Formatted Dossier on WhatsApp <ChevronRight size={16} />
            </a>
            <button
              type="button"
              onClick={resetWizard}
              className="btn btn-outline"
            >
              <RotateCcw size={15} /> Check Another Ancestry Route
            </button>
          </div>
        </div>
      ) : (
        <div>
          {/* STEP 1: SELECT JURISDICTION */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-extrabold text-navy-900">1. Where does your ancestral heritage trace back to?</h4>
                <p className="mt-1 text-[13.5px] text-ink-light">Select the country of your parents, grandparents, or great-grandparents.</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {PATHWAYS.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setSelectedCountry(p.id)}
                    className={`flex flex-col items-start rounded-2xl border p-5 text-left transition-all ${
                      selectedCountry === p.id
                        ? "border-gold-500 bg-gold-500/5 ring-2 ring-gold-500/20 shadow-md"
                        : "border-surface-200 bg-surface-50 hover:border-surface-300 hover:bg-white"
                    }`}
                  >
                    <div className="flex w-full items-center justify-between">
                      <span className="flex h-7 w-10 overflow-hidden rounded border border-surface-200 bg-white">
                        <img src={p.flag} alt="" className="h-full w-full object-cover" />
                      </span>
                      {selectedCountry === p.id && (
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-500 text-navy-950">
                          <CheckCircle2 size={15} />
                        </span>
                      )}
                    </div>
                    <span className="mt-3 block text-base font-extrabold text-navy-900">{p.country}</span>
                    <span className="mt-1 block text-xs font-semibold text-ink-light line-clamp-2">{p.generations}</span>
                  </button>
                ))}
              </div>

              <div className="mt-8 flex justify-end">
                <Button variant="gold" onClick={() => setStep(2)}>
                  Continue to Ancestor Line <ChevronRight size={16} />
                </Button>
              </div>
            </div>
          )}

          {/* STEP 2: SELECT ANCESTOR */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-extrabold text-navy-900">2. Which ancestor was born in or held {currentPathway.country} nationality?</h4>
                <p className="mt-1 text-[13.5px] text-ink-light">Select your closest qualifying direct bloodline relative.</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { id: "parent", label: "Mother or Father", desc: "Direct parent born in target country" },
                  { id: "grandparent", label: "Grandmother or Grandfather", desc: "Maternal or paternal grandparent" },
                  { id: "great-grandparent", label: "Great-Grandparent", desc: "Applicable for Italian and Polish descent" },
                  { id: "sephardic-historical", label: "Historical / Special Descent", desc: "German Art. 116 / Sephardic / Other historical line" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setAncestor(item.id)}
                    className={`flex items-start gap-4 rounded-2xl border p-4 text-left transition-all ${
                      ancestor === item.id
                        ? "border-gold-500 bg-gold-500/5 ring-2 ring-gold-500/20"
                        : "border-surface-200 bg-surface-50 hover:bg-white"
                    }`}
                  >
                    <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                      ancestor === item.id ? "border-gold-500 bg-gold-500 text-navy-950" : "border-surface-300"
                    }`}>
                      {ancestor === item.id && <div className="h-2 w-2 rounded-full bg-navy-950" />}
                    </div>
                    <div>
                      <p className="text-[14.5px] font-extrabold text-navy-900">{item.label}</p>
                      <p className="text-[12.5px] text-ink-light">{item.desc}</p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between">
                <button type="button" onClick={() => setStep(1)} className="btn btn-outline">
                  Back
                </button>
                <Button variant="gold" onClick={() => setStep(3)}>
                  Continue to Documents <ChevronRight size={16} />
                </Button>
              </div>
            </div>
          )}

          {/* STEP 3: DOCUMENTATION STATUS */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-extrabold text-navy-900">3. Which documents do you currently have?</h4>
                <p className="mt-1 text-[13.5px] text-ink-light">Check all that apply. (If you don't have them yet, our research team can source them for you).</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { id: "birth_cert", label: "Birth Certificates", desc: "Ancestors or applicant birth records" },
                  { id: "marriage_cert", label: "Marriage Certificates", desc: "Civil or church wedding certificates" },
                  { id: "naturalization", label: "Naturalization / Immigration Records", desc: "Proof of date when ancestor naturalized abroad" },
                  { id: "passports", label: "Old Passports / Military Books", desc: "Historical identification documents" },
                  { id: "none_yet", label: "None Yet / Need Sourcing", desc: "We need Izzy to trace and extract archives" },
                ].map((doc) => {
                  const isChecked = documents.includes(doc.id);
                  return (
                    <button
                      key={doc.id}
                      type="button"
                      onClick={() => toggleDoc(doc.id)}
                      className={`flex items-start gap-4 rounded-2xl border p-4 text-left transition-all ${
                        isChecked
                          ? "border-gold-500 bg-gold-500/5 ring-1 ring-gold-500"
                          : "border-surface-200 bg-surface-50 hover:bg-white"
                      }`}
                    >
                      <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border ${
                        isChecked ? "border-gold-500 bg-gold-500 text-navy-950" : "border-surface-300 bg-white"
                      }`}>
                        {isChecked && <CheckCircle2 size={14} />}
                      </div>
                      <div>
                        <p className="text-[14px] font-extrabold text-navy-900">{doc.label}</p>
                        <p className="text-[12px] text-ink-light">{doc.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 flex items-center justify-between">
                <button type="button" onClick={() => setStep(2)} className="btn btn-outline">
                  Back
                </button>
                <Button variant="gold" onClick={() => setStep(4)}>
                  Review &amp; Submit Details <ChevronRight size={16} />
                </Button>
              </div>
            </div>
          )}

          {/* STEP 4: CONTACT & SUBMIT */}
          {step === 4 && (
            <form onSubmit={handleAssessmentSubmit} className="space-y-6">
              <div>
                <h4 className="text-lg font-extrabold text-navy-900">4. Where should we send your preliminary assessment?</h4>
                <p className="mt-1 text-[13.5px] text-ink-light">Enter your confidential contact details for your custom ancestry dossier.</p>
              </div>

              {/* Honeypot */}
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {status === "error" && (
                <p className="form-msg form-msg--error">{errorMsg}</p>
              )}

              <div className="rounded-2xl border border-surface-200 bg-surface-50 p-4.5">
                <p className="text-xs font-bold uppercase tracking-wider text-ink-light">Selected Pathway Summary</p>
                <p className="mt-1 text-sm font-extrabold text-navy-900">
                  {currentPathway.program} · Ancestor: <span className="capitalize text-gold-600">{ancestor.replace("-", " ")}</span>
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-bold text-navy-900">Your Full Name *</span>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. David Sterling"
                    className="field"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-bold text-navy-900">Email Address *</span>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. david@example.com"
                    className="field"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block text-xs font-bold text-navy-900">Phone / WhatsApp Number *</span>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +1 555 019 2345"
                    className="field"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block text-xs font-bold text-navy-900">Additional Family Context (Optional)</span>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Known birth towns, immigration dates, surnames or family history details…"
                    className="field resize-y"
                  />
                </label>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <button type="button" onClick={() => setStep(3)} className="btn btn-outline" disabled={status === "loading"}>
                  Back
                </button>
                <Button type="submit" variant="gold" disabled={status === "loading"}>
                  {status === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Submitting Dossier…
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Request Preliminary Assessment
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
