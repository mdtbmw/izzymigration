import { ClipboardList, FolderCheck, ShieldCheck, Stamp } from "lucide-react";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  {
    icon: ClipboardList,
    no: "01",
    title: "Confidential Pre-Vetting",
    text: "Initial compliance check, World-Check AML screening, and background evaluation conducted by an Izzy Senior Mentor before committing capital.",
  },
  {
    icon: FolderCheck,
    no: "02",
    title: "Dossier Compilation & Translation",
    text: "Complete legal assembly of certified statutory documents, sworn translations, apostilles, and verified source-of-funds wealth declarations.",
  },
  {
    icon: ShieldCheck,
    no: "03",
    title: "Statutory Submission & Due Diligence",
    text: "Direct submission to sovereign government Citizenship by Investment Units (CIU) or immigration ministries with proactive attorney advocacy.",
  },
  {
    icon: Stamp,
    no: "04",
    title: "Approval & Passport Delivery",
    text: "Execution of government escrow investment, issuance of Naturalization Certificate, and secure worldwide delivery of your sovereign passports.",
  },
];

export function ProcessSection() {
  return (
    <section className="section-space bg-white">
      <div className="container-izzy">
        <SectionHead
          eyebrow="Process Overview"
          title="From First Call to Approved Application"
          text="A transparent, statutory 4-step execution model engineered to guarantee a 99.4% approval rate."
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.no} delay={i * 90} className="h-full">
              <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[24px] border border-surface-200 bg-surface-50 p-7 transition-all duration-300 hover:border-gold-400 hover:bg-white hover:shadow-lg">
                <span className="absolute -right-2 -top-5 text-[80px] font-extrabold leading-none text-surface-300/40 select-none group-hover:text-gold-200/40 transition-colors">
                  {s.no}
                </span>
                <div>
                  <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-2xl bg-navy-950 text-gold-400 shadow-sm">
                    <s.icon size={20} />
                  </span>
                  <h3 className="relative z-10 mt-5 text-[16px] font-extrabold text-navy-900 leading-snug">
                    {s.title}
                  </h3>
                  <p className="relative z-10 mt-2.5 text-[13px] leading-relaxed text-ink-light font-normal">
                    {s.text}
                  </p>
                </div>
                <div className="relative z-10 mt-5 border-t border-surface-200 pt-3 text-[11.5px] font-bold text-gold-600">
                  Step {s.no} Execution
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}