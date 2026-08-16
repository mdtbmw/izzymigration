import { Scale, Users, Globe2, ShieldCheck } from "lucide-react";
import { SectionHead } from "@/components/ui/SectionHead";

const TRUSTS = [
  {
    icon: Scale,
    title: "Licensed Immigration Lawyers",
    text: "Fully registered legal practitioners with direct access to embassy and government filing channels.",
  },
  {
    icon: Users,
    title: "ICC Member Firm",
    text: "Proud member of the International Chamber of Commerce, upholding global standards of business practice.",
  },
  {
    icon: Globe2,
    title: "Investment Migration Council",
    text: "Affiliated with the leading global body for residence and citizenship by investment professionals.",
  },
  {
    icon: ShieldCheck,
    title: "GDPR Compliant & ISO Certified",
    text: "Your personal data is protected by enterprise-grade security, encryption, and strict data-handling protocols.",
  },
];

export function TrustStrip() {
  return (
    <section className="section-space bg-surface-50">
      <div className="container-izzy">
        <SectionHead
          eyebrow="Global Trust & Recognition"
          title="Accredited, Licensed &"
          titleAccent="Recognized Worldwide"
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRUSTS.map((t, i) => (
            <div key={t.title} className="card card--white card--hover flex h-full flex-col gap-5 p-7 text-center">
              <span className="icon-badge icon-badge--gold mx-auto shrink-0">
                <t.icon size={24} />
              </span>
              <h3 className="text-[15.5px] font-extrabold">{t.title}</h3>
              <p className="mt-auto text-[13px] leading-relaxed text-ink-light">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}