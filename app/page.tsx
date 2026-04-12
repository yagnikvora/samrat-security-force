import { AboutShowcaseSection } from "@/components/about-showcase-section";
import { ExperienceStatsSection } from "@/components/experience-stats-section";
import { ProfessionalExpertiseSection } from "@/components/professional-expertise-section";
import { ServicesShowcaseSection } from "@/components/services-showcase-section";
import { TeamShowcaseSection } from "@/components/team-showcase-section";
import {
  FaqPreviewSection,
  HeroSection,
  HomeSecurityNeedsSection,
  HomeSecuritySolutionsSection,
} from "@/app/_components/home";

export default function Home() {
  const teamDescription =
    "Our team is made up of highly trained, disciplined, and dedicated security professionals who are committed to ensuring your safety.";

  return (
    <div className="pb-16">
      <HeroSection />
      <AboutShowcaseSection className="mt-20" />
      <ServicesShowcaseSection className="mt-15" />
      <ProfessionalExpertiseSection backgroundClassName="bg-secondary" />
      <HomeSecuritySolutionsSection />
      <HomeSecurityNeedsSection />
      <TeamShowcaseSection title="Our" highlight="Team Members" description={teamDescription} />
      <ExperienceStatsSection backgroundClassName="bg-secondary" />
      <FaqPreviewSection />
    </div>
  );
}
