import { TeamGridSection } from "./_components";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: siteConfig.pageHeroes.team.title,
};

export default function TeamPage() {
  return (
    <>
      <PageHero title={siteConfig.pageHeroes.team.title} breadcrumbs={siteConfig.pageHeroes.team.breadcrumbs} />

      <div className="page-container py-14 sm:py-20">
        <TeamGridSection />
      </div>
    </>
  );
}
