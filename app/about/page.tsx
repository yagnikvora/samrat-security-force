import { AboutIntroSection, AboutStatsSection } from "./_components";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: siteConfig.pageHeroes.about.title,
};

export default function AboutPage() {
  return (
    <>
      <PageHero title={siteConfig.pageHeroes.about.title} breadcrumbs={siteConfig.pageHeroes.about.breadcrumbs} />

      <div className="page-container py-14 sm:py-20">
        <AboutIntroSection />
        <AboutStatsSection />
      </div>
    </>
  );
}
