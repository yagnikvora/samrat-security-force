import { ClientsGridSection } from "./_components";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: siteConfig.pageHeroes.clients.title,
};

export default function ClientsPage() {
  return (
    <>
      <PageHero title={siteConfig.pageHeroes.clients.title} breadcrumbs={siteConfig.pageHeroes.clients.breadcrumbs} />

      <div className="page-container py-14 sm:py-20">
        <ClientsGridSection />
      </div>
    </>
  );
}
