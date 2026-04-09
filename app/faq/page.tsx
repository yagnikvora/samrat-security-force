import { FaqLayoutSection } from "./_components";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: siteConfig.pageHeroes.faq.title,
};

export default function FaqPage() {
  return (
    <>
      <PageHero title={siteConfig.pageHeroes.faq.title} breadcrumbs={siteConfig.pageHeroes.faq.breadcrumbs} />

      <div className="page-container py-14 sm:py-20">
        <FaqLayoutSection />
      </div>
    </>
  );
}
