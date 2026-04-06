import Link from "next/link";
import { SectionTitle } from "@/components/section-title";
import { FaqAccordion } from "@/components/faq-accordion";
import { siteConfig } from "@/lib/site-config";

export function FaqPreviewSection() {
  return (
    <section className="page-container mt-20 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="glass-card rounded-2xl p-6">
        <SectionTitle
          eyebrow="FAQ"
          title="Frequently Asked"
          highlight="Questions"
          description="Find quick answers about our process and service model."
        />
        <Link href="/faq" className="mt-6 inline-flex rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-black">
          See All FAQs
        </Link>
      </div>
      <FaqAccordion items={siteConfig.faqs} />
    </section>
  );
}
