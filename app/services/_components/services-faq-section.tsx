import { SectionTitle } from "@/components/section-title";
import { FaqAccordion } from "@/components/faq-accordion";
import { siteConfig } from "@/lib/site-config";

export function ServicesFaqSection() {
  const section = siteConfig.sections.servicesFaq;

  return (
    <section className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
      <SectionTitle
        eyebrow={section.eyebrow}
        title={section.title}
        highlight={section.highlight}
        description={section.description}
      />
      <FaqAccordion items={siteConfig.faqs} />
    </section>
  );
}
