import { PageHero } from "@/components/ui/PageHero";
import { ProgrammeCatalogue } from "@/components/programmes/ProgrammeCatalogue";
import { CtaBand } from "@/components/home/CtaBand";

export const metadata = {
  title: "Citizenship by Investment Programmes",
  description:
    "Ten sovereign citizenship-by-investment programmes across the Caribbean and Europe — fully compared, priced and ready for your structured application.",
};

export default function CitizenshipPage() {
  return (
    <>
      <PageHero
        title="Sovereign Passports, Delivered"
        subtitle="Direct citizenship, lifelong passports and visa-free access to 150+ countries — with no relocation required."
        crumb={[{ label: "Citizenship" }]}
      />
      <section className="section-space pt-14 md:pt-14">
        <div className="container-izzy">
          <div className="mb-8 grid gap-6 sm:grid-cols-3">
            {[
              { label: "Direct Sovereign CBI Routes", value: "10" },
              { label: "Global Visa-Free Corridors", value: "150+" },
              { label: "Dual Nationality Guaranteed", value: "100%" },
            ].map((s) => (
              <div key={s.label} className="card card--gray flex flex-col items-center gap-1 p-6 text-center">
                <p className="text-3xl font-extrabold text-navy-900">{s.value}</p>
                <p className="text-[12.5px] font-semibold text-ink-light">{s.label}</p>
              </div>
            ))}
          </div>
          <ProgrammeCatalogue fixedType="citizenship" />
        </div>
      </section>
      <CtaBand />
    </>
  );
}