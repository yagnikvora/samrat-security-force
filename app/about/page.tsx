import { AboutIntroSection, AboutStatsSection } from "./_components";
import { PageHero } from "@/components/page-hero";
import { TeamShowcaseSection } from "@/components/team-showcase-section";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: siteConfig.pageHeroes.about.title,
};

export default function AboutPage() {
  const teamDescription =
    "Our team is made up of highly trained, disciplined, and dedicated security professionals who are committed to ensuring your safety.";

  return (
    <>
      <PageHero title={siteConfig.pageHeroes.about.title} breadcrumbs={siteConfig.pageHeroes.about.breadcrumbs} />

      <AboutIntroSection />
      <TeamShowcaseSection
        className="mt-2"
        title="Meet Our"
        highlight="Security"
        description={teamDescription}
        showViewAll={false}
      />
    </>
  );
}
