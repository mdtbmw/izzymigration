import { Scale, Map, ShieldCheck, TrendingUp, Home, Languages } from "lucide-react";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";

const TEAM = [
  {
    icon: Scale,
    img: "/assets/imgs/team/team-img1.png",
    title: "Immigration Counsel",
    text: "Licensed advisors guiding every application from document review to approval",
  },
  {
    icon: Map,
    img: "/assets/imgs/team/team-img2.png",
    title: "Residency & Citizenship Strategists",
    text: "Structuring the right programme for your goals, timeline and budget",
  },
  {
    icon: ShieldCheck,
    img: "/assets/imgs/team/team-img3.png",
    title: "Compliance & Due Diligence",
    text: "Every file checked against jurisdiction rules and source-of-funds requirements",
  },
  {
    icon: TrendingUp,
    img: "/assets/imgs/team/team-img4.png",
    title: "Investment Advisory",
    text: "Guidance on qualifying real estate, funds and approved business routes",
  },
  {
    icon: Home,
    img: "/assets/imgs/team/team-img5.png",
    title: "Relocation & Settling-In Support",
    text: "From housing and schooling to banking and local registration",
  },
  {
    icon: Languages,
    img: "/assets/imgs/team/team-img6.png",
    title: "Documentation & Translation",
    text: "Certified translations, apostilles and notarisation handled end-to-end",
  },
];

export function TeamSection() {
  return (
    <section className="section-space bg-surface-50">
      <div className="container-izzy">
        <SectionHead
          eyebrow="Our Team"
          title="Advisors Who Navigate Every Jurisdiction"
          text="One mentor-led team covering the full journey — strategy, compliance, investment and relocation."
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((t, i) => (
            <Reveal key={t.title} delay={(i % 3) * 90} className="h-full">
              <article className="card card--hover card--white group h-full overflow-hidden">
                <div className="relative h-56 overflow-hidden bg-navy-950">
                  <img
                    src={t.img}
                    alt={t.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute bottom-3 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gold-500 text-navy-950 shadow-lg">
                    <t.icon size={18} />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-[15.5px] font-extrabold">{t.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-ink-light">{t.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}