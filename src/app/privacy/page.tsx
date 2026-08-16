import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/home/CtaBand";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Izzy Immigration Limited collects, uses, stores, and protects your personal information.",
};

const SECTIONS = [
  {
    title: "1. Who We Are",
    body: [
      "This Privacy Policy explains how Izzy Immigration Limited ('we', 'us', 'our') collects, uses, and protects personal information submitted through this website (izzyimmigration.com) and during the course of our advisory services.",
    ],
  },
  {
    title: "2. Information We Collect",
    body: [
      "We collect information you voluntarily provide — including your name, email address, telephone number, country of residence, message content, and any details shared through inquiry forms, consultation bookings, and brochure requests.",
      "We may also collect limited technical data (IP address, browser type, pages visited) through analytics tools to understand how the website is used and to improve our services.",
    ],
  },
  {
    title: "3. How We Use Your Information",
    body: [
      "We use your information to respond to inquiries, schedule consultations, prepare assessments, deliver requested materials, and provide the advisory services you engage. We may also use it to share programme updates we believe are relevant to your expressed interests.",
      "Where we process an application on your behalf, additional documentation is collected under a separate professional engagement and subject to specific privacy terms agreed with you.",
    ],
  },
  {
    title: "4. Legal Basis for Processing",
    body: [
      "We process personal information on the basis of: (a) your consent, which you may withdraw at any time; (b) performance of a contract with you; (c) our legitimate interest in operating and improving our business; and (d) compliance with legal obligations, including anti-money-laundering and know-your-client requirements.",
    ],
  },
  {
    title: "5. Sharing Your Information",
    body: [
      "We do not sell or rent your personal information. We share information only as necessary to deliver our services: with government authorities and programme agents where you engage them through us, with professional advisers (lawyers, tax consultants, fund administrators) engaged on your matter, and with service providers who process data on our behalf under strict confidentiality obligations.",
      "Where you participate in a programme, information is shared with the relevant government authority in accordance with that programme's official requirements.",
    ],
  },
  {
    title: "6. Data Retention",
    body: [
      "We retain personal information only as long as necessary for the purposes described in this policy, to meet legal and regulatory obligations (including record-keeping for anti-money-laundering compliance), and to resolve disputes. Inquiry data not associated with an engagement is deleted after a maximum of 36 months.",
    ],
  },
  {
    title: "7. Your Rights",
    body: [
      "Depending on your jurisdiction, you may have the right to access, correct, delete, or restrict the processing of your personal information, and to object to processing or request data portability. To exercise any of these rights, email info@izzyimmigration.com and we will respond within 30 days.",
    ],
  },
  {
    title: "8. Security",
    body: [
      "We apply appropriate technical and organisational measures to protect your information — including encrypted transmission (TLS), access controls, and confidentiality obligations on our staff and service providers. No method of transmission over the internet is 100% secure, but we work diligently to safeguard your data.",
    ],
  },
  {
    title: "9. Cookies",
    body: [
      "This website uses essential cookies for core functionality and may use analytics cookies to understand visitor behaviour. You can control cookie preferences through your browser settings. We do not use third-party advertising cookies that track you across unrelated websites.",
    ],
  },
  {
    title: "10. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. The latest version will always be published on this page with an updated effective date. Significant changes will be communicated to clients with whom we have an active relationship.",
    ],
  },
  {
    title: "11. Contact Us",
    body: [
      "Questions, concerns, or requests relating to this policy should be directed to Izzy Immigration Limited at info@izzyimmigration.com or 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="Your privacy matters. Here is exactly how we handle your personal information."
        crumb={[{ label: "Privacy Policy" }]}
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
            Effective date: February 2026.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}