import { ServicesFaqSection } from "./_components";
import { ExperienceStatsSection } from "@/components/experience-stats-section";
import { PageHero } from "@/components/page-hero";
import { ProfessionalExpertiseSection } from "@/components/professional-expertise-section";
import { ServicesShowcaseSection } from "@/components/services-showcase-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: siteConfig.pageHeroes.services.title,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero title={siteConfig.pageHeroes.services.title} breadcrumbs={siteConfig.pageHeroes.services.breadcrumbs} />


      <ServicesShowcaseSection showHeader={false} backgroundClassName="bg-secondary" />
      <ExperienceStatsSection backgroundClassName="bg-primary" />

      <ProfessionalExpertiseSection backgroundClassName="bg-primary" />
      <TestimonialsSection className="-mb-33 pb-33" backgroundClassName="bg-secondary" />

    </>
  );
}
