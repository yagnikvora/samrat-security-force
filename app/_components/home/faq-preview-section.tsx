import Link from "next/link";
import { SectionTitle } from "@/components/section-title";
import { FaqAccordion } from "@/components/faq-accordion";
import { siteConfig } from "@/lib/site-config";

export function FaqPreviewSection() {
  const section = siteConfig.sections.homeFaqPreview;

  return (
    <section className="page-container mt-20 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="glass-card rounded-2xl p-6">
        <SectionTitle
          eyebrow={section.eyebrow}
          title={section.title}
          highlight={section.highlight}
          description={section.description}
        />
        <Link href="/faq" className="mt-6 inline-flex rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-black">
          {section.ctaLabel}
        </Link>
      </div>
      <FaqAccordion items={siteConfig.faqs} />
    </section>
  );
}
