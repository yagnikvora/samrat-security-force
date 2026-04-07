import { SectionTitle } from "@/components/section-title";
import { FaqAccordion } from "@/components/faq-accordion";
import { siteConfig } from "@/lib/site-config";

export function FaqLayoutSection() {
  const section = siteConfig.sections.faqPage;

  return (
    <section>
      <SectionTitle
        eyebrow={section.eyebrow}
        title={section.title}
        highlight={section.highlight}
        description={section.description}
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <FaqAccordion items={siteConfig.faqs.slice(0, 3)} />
        <FaqAccordion items={siteConfig.faqs.slice(2)} />
      </div>
    </section>
  );
}
