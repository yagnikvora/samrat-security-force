import { ServicesFaqSection, ServicesGridSection } from "./_components";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: siteConfig.pageHeroes.services.title,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero title={siteConfig.pageHeroes.services.title} breadcrumbs={siteConfig.pageHeroes.services.breadcrumbs} />

      <div className="page-container py-14 sm:py-20">
        <ServicesGridSection />
        <ServicesFaqSection />
      </div>
    </>
  );
}
