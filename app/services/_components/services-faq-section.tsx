import { SectionTitle } from "@/components/section-title";
import { FaqAccordion } from "@/components/faq-accordion";
import { siteConfig } from "@/lib/site-config";

export function ServicesFaqSection() {
  return (
    <section className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
      <SectionTitle
        eyebrow="FAQ"
        title="Frequently Asked"
        highlight="Questions"
        description="Service and deployment questions answered clearly."
      />
      <FaqAccordion items={siteConfig.faqs} />
    </section>
  );
}
