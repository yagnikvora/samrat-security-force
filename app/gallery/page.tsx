import { GalleryGridSection } from "./_components";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: siteConfig.pageHeroes.gallery.title,
};

export default function GalleryPage() {
  return (
    <>
      <PageHero title={siteConfig.pageHeroes.gallery.title} breadcrumbs={siteConfig.pageHeroes.gallery.breadcrumbs} />

      <div className="page-container py-14 sm:py-20">
        <GalleryGridSection />
      </div>
    </>
  );
}
