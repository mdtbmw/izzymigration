import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/home/CtaBand";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "The terms and conditions governing the use of the izzyimmigration.com website and engagement of Izzy Immigration Limited services.",
};

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    body: [
      "By accessing or using this website, you agree to be bound by these Terms & Conditions and our Privacy Policy. If you do not agree with any part of these terms, please discontinue use of the website.",
    ],
  },
  {
    title: "2. Nature of Our Services",
    body: [
      "Izzy Immigration Limited provides advisory and consultancy services relating to citizenship by investment, residency programmes, golden visas, global real estate, and related mobility solutions. Specific services are provided under separate written engagement agreements; general information on this website does not constitute an offer of service.",
    ],
  },
  {
    title: "3. No Legal or Financial Advice",
    body: [
      "Information on this website is provided for general guidance and does not constitute legal, tax, accounting, or financial advice. You should obtain independent professional advice tailored to your circumstances before making decisions related to immigration, investment, or property purchase.",
    ],
  },
  {
    title: "4. Accuracy of Information",
    body: [
      "We make reasonable efforts to ensure the accuracy of programme details (investment thresholds, processing times, requirements) published on this website, but programme terms are set and changed by sovereign governments. Information may become outdated between updates, and we accept no liability for reliance on stale information.",
    ],
  },
  {
    title: "5. Your Responsibilities",
    body: [
      "You agree to provide accurate, complete, and truthful information in all inquiries and engagements. Furnishing false or incomplete information may result in refusal of your application and may have legal consequences, including barring. We are not responsible for rejection caused by information supplied by the client.",
      "You must be of legal age in your jurisdiction to engage our services and to use this website.",
    ],
  },
  {
    title: "6. Quotes and Fees",
    body: [
      "Quotes for professional fees are provided in writing before engagement. Published investment figures represent programme minimums set by governments, not our fees. Unless otherwise agreed, fees are payable in accordance with the engagement letter, and third-party costs (government fees, legal transfer fees, due diligence charges) are invoiced at actual cost.",
    ],
  },
  {
    title: "7. Intellectual Property",
    body: [
      "All content on this website — including text, graphics, logos, images, and design — is the property of Izzy Immigration Limited or its licensors and is protected by applicable laws. You may not reproduce, distribute, or create derivative works from any content without our prior written consent.",
    ],
  },
  {
    title: "8. Limitation of Liability",
    body: [
      "To the maximum extent permitted by law, Izzy Immigration Limited shall not be liable for any indirect, incidental, consequential, or punitive damages arising from use of this website. Nothing in these terms limits liability that cannot be excluded under applicable law.",
    ],
  },
  {
    title: "9. Governing Law",
    body: [
      "These Terms & Conditions are governed by the laws of England and Wales, and the courts of England and Wales shall have exclusive jurisdiction over any disputes, without prejudice to mandatory consumer protections applicable in your country of residence.",
    ],
  },
  {
    title: "10. Contact",
    body: [
      "Questions about these terms may be directed to Izzy Immigration Limited at info@izzyimmigration.com or 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms & Conditions"
        subtitle="The ground rules for using our website and engaging our advisory services."
        crumb={[{ label: "Terms & Conditions" }]}
      />

      <section className="section-space bg-white">
        <div className="container-izzy mx-auto max-w-4xl space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-xl font-bold text-navy-900 md:text-2xl">{s.title}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="mt-4 text-[15.5px] leading-[1.85] text-slate-600">
                  {p}
                </p>
              ))}
            </div>
          ))}
          <p className="rounded-2xl border border-gold-500/40 bg-gold-50 px-6 py-5 text-[14px] leading-relaxed text-navy-900">
            Last updated: February 2026.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}