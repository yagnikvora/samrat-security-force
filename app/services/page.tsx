import { ServicesFaqSection } from "./_components";
import { PageHero } from "@/components/page-hero";
import { ServicesShowcaseSection } from "@/components/services-showcase-section";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: siteConfig.pageHeroes.services.title,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero title={siteConfig.pageHeroes.services.title} breadcrumbs={siteConfig.pageHeroes.services.breadcrumbs} />

      <ServicesShowcaseSection showHeader={false} backgroundClassName="bg-secondary" />

      <div className="page-container py-14 sm:py-20">
        <ServicesFaqSection />
      </div>
    </>
  );
}
