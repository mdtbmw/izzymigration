import { ArrowRight, Plane, Briefcase, GraduationCap, Home, Globe, Landmark } from "lucide-react";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const VISAS = [
  {
    icon: Home,
    title: "Cyprus Permanent Residency",
    meta: "Real Estate · EUR 300,000",
    href: "/programmes/cyprus-pr",
  },
  {
    icon: Briefcase,
    title: "France Business Creation",
    meta: "Company Setup · EUR 30,000",
    href: "/programmes/france-business-creation",
  },
  {
    icon: Landmark,
    title: "Greece Golden Visa",
    meta: "Real Estate · EUR 250,000",
    href: "/programmes/greece-golden-visa",
  },
  {
    icon: Globe,
    title: "US EB-5 Immigrant Investor",
    meta: "Commercial Enterprise · USD 800,000",
    href: "/programmes/us-eb5",
  },
  {
    icon: Plane,
    title: "Canada Start-Up Visa",
    meta: "Approved Organisation · CAD 75,000",
    href: "/programmes/canada-startup",
  },
  {
    icon: GraduationCap,
    title: "Turkey Citizenship by Investment",
    meta: "Real Estate · USD 400,000",
    href: "/programmes/turkiye-citizenship",
  },
];

export function VisaCategories() {
  return (
    <section className="section-space bg-white">
      <div className="container-izzy">
        <SectionHead
          eyebrow="Pathways"
          title="Residency & Citizenship, Mapped by Route"
          text="Every major category of global mobility — matched to the fastest, most secure programme in its class."
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VISAS.map((v, i) => (
            <Reveal key={v.title} delay={i * 70} className="h-full">
              <a href={v.href} className="card card--hover card--gray group flex h-full items-center gap-5 p-6">
                <span className="icon-badge icon-badge--gold shrink-0">
                  <v.icon size={24} />
                </span>
                <span className="flex-1">
                  <span className="block text-[15px] font-extrabold leading-snug transition-colors group-hover:text-gold-600">
                    {v.title}
                  </span>
                  <span className="mt-1 block text-[12.5px] font-semibold text-ink-light">{v.meta}</span>
                </span>
                <ArrowRight size={18} className="shrink-0 text-surface-400 transition-all group-hover:translate-x-1 group-hover:text-gold-500" />
              </a>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/visas" variant="outline">
            Explore All Visa Pathways <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}