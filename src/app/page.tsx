import { HeroSlider } from "@/components/home/HeroSlider";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WealthBand } from "@/components/home/WealthBand";
import { ChooseUsSection } from "@/components/home/ChooseUsSection";
import { ProgrammeShowcase } from "@/components/home/ProgrammeShowcase";
import { VisaCategories } from "@/components/home/VisaCategories";
import { FaqSection } from "@/components/home/FaqSection";
import { CountriesSection } from "@/components/home/CountriesSection";
import { ProgrammeGlance } from "@/components/home/ProgrammeGlance";
import { TeamSection } from "@/components/home/TeamSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { StoriesSection } from "@/components/home/StoriesSection";
import { PartnersStrip } from "@/components/home/PartnersStrip";
import { TrustStrip } from "@/components/home/TrustStrip";
import { CtaBand } from "@/components/home/CtaBand";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <ServicesSection />
      <WealthBand />
      <ChooseUsSection />
      <ProgrammeShowcase />
      <VisaCategories />
      <FaqSection />
      <CountriesSection />
      <ProgrammeGlance />
      <TeamSection />
      <ProcessSection />
      <StoriesSection />
      <PartnersStrip />
      <TrustStrip />
      <CtaBand />
    </>
  );
}