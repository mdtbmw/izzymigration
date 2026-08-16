import { HeroSlider } from "@/components/home/HeroSlider";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ChooseUsSection } from "@/components/home/ChooseUsSection";
import { PortfolioCategory } from "@/components/home/PortfolioCategory";
import { VisaCategories } from "@/components/home/VisaCategories";
import { RouteMatcher } from "@/components/home/RouteMatcher";
import { AdventureSection } from "@/components/home/AdventureSection";
import { ProgrammeGlance } from "@/components/home/ProgrammeGlance";
import { CoachingSection } from "@/components/home/CoachingSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TeamSection } from "@/components/home/TeamSection";
import { StoriesSection } from "@/components/home/StoriesSection";
import { FaqSection } from "@/components/home/FaqSection";
import { PartnersStrip } from "@/components/home/PartnersStrip";
import { TrustStrip } from "@/components/home/TrustStrip";
import { CtaBand } from "@/components/home/CtaBand";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <ServicesSection />
      <ChooseUsSection />
      <PortfolioCategory />
      <VisaCategories />
      <RouteMatcher />
      <AdventureSection />
      <ProgrammeGlance />
      <CoachingSection />
      <ProcessSection />
      <TeamSection />
      <StoriesSection />
      <FaqSection />
      <PartnersStrip />
      <TrustStrip />
      <CtaBand />
    </>
  );
}
