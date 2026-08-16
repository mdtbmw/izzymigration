import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/home/CtaBand";

export const metadata = {
  title: "Legal Disclaimer",
  description:
    "Important legal and regulatory information regarding the services provided by Izzy Immigration Limited.",
};

const SECTIONS = [
  {
    title: "General Information",
    body: [
      "The content published on this website is provided for general informational purposes only and does not constitute legal, financial, tax, or immigration advice. No visitor–client relationship is created by browsing this website, submitting an inquiry, or downloading any material published on it.",
      "Citizenship and residency by investment programmes are governed by the laws, regulations, and official policies of their respective sovereign governments, which may change without prior notice. Always confirm current terms directly with the competent authority before making any investment decision.",
    ],
  },
  {
    title: "No Guarantee of Outcome",
    body: [
      "Approvals for citizenship, residency, visas, and other immigration applications are granted or refused at the sole discretion of the relevant government authority. Izzy Immigration Limited does not guarantee the outcome of any application, and nothing on this website should be interpreted as a promise of approval.",
      "Investment returns, property values, and fund performance figures referenced on this website are illustrative and historical in nature and are not a reliable indicator of future results.",
    ],
  },
  {
    title: "Regulatory Scope",
    body: [
      "Izzy Immigration Limited is an advisory and consultancy firm. It is not a licensed bank, broker, or investment adviser unless expressly stated otherwise. Where required by law, clients are referred to appropriately licensed professionals — including lawyers, notaries, tax advisers, and fund administrators — for the execution of legal and financial transactions.",
      "The provision of services is subject to our professional engagement terms, applicable law in the jurisdictions where services are delivered, and any regulatory licensing requirements in force from time to time.",
    ],
  },
  {
    title: "External Links",
    body: [
      "This website may contain links to third-party websites operated by governments, developers, financial institutions, and other organisations. Izzy Immigration Limited is not responsible for the content, accuracy, or policies of any external website and does not endorse the information presented on them.",
    ],
  },
  {
    title: "Limitation of Liability",
    body: [
      "To the maximum extent permitted by law, Izzy Immigration Limited, its directors, employees, and agents shall not be liable for any loss or damage — direct, indirect, incidental, or consequential — arising from the use of this website or reliance on any information published on it. You are responsible for verifying all information independently before acting.",
    ],
  },
];

export default function DisclaimerPage() {
  return (
    <>
      <PageHero
        title="Legal Disclaimer"
        subtitle="Please read this disclaimer carefully before relying on any information published on this website."
        crumb={[{ label: "Disclaimer" }]}
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
            Last updated: February 2026. If you have any questions about this disclaimer, contact us at{" "}
            <a href="mailto:info@izzyimmigration.com" className="font-bold text-gold-700">
              info@izzyimmigration.com
            </a>
            .
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}