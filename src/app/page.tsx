import { HeroSlider } from "@/components/home/HeroSlider";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ChooseUsSection } from "@/components/home/ChooseUsSection";
import { PortfolioCategory } from "@/components/home/PortfolioCategory";
import { RouteMatcher } from "@/components/home/RouteMatcher";
import { AdventureSection } from "@/components/home/AdventureSection";
import { CoachingSection } from "@/components/home/CoachingSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TeamSection } from "@/components/home/TeamSection";
import { StoriesSection } from "@/components/home/StoriesSection";
import { FaqSection } from "@/components/home/FaqSection";
import { PartnersStrip } from "@/components/home/PartnersStrip";
import { CtaBand } from "@/components/home/CtaBand";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <ServicesSection />
      <ChooseUsSection />
      <PortfolioCategory />
      <RouteMatcher />
      <AdventureSection />
      <CoachingSection />
      <ProcessSection />
      <TeamSection />
      <StoriesSection />
      <FaqSection />
      <PartnersStrip />
      <CtaBand />
    </>
  );
}
