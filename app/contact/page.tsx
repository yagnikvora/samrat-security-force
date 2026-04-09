import { ContactLayoutSection, ContactMapSection } from "./_components";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: siteConfig.pageHeroes.contact.title,
};

export default function ContactPage() {
  const contactHero = siteConfig.pageHeroes.contact;

  return (
    <>
      <PageHero title={contactHero.title} breadcrumbs={contactHero.breadcrumbs} />

      <ContactLayoutSection />
      <ContactMapSection />
    </>
  );
}
