import { SectionTitle } from "@/components/section-title";
import { FaqAccordion } from "@/components/faq-accordion";
import { siteConfig } from "@/lib/site-config";

export function FaqLayoutSection() {
  return (
    <section>
      <SectionTitle
        eyebrow="F.A.Q"
        title="Answers to Common"
        highlight="Security Questions"
        description="Clear, direct responses to help you understand our process and coverage model."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <FaqAccordion items={siteConfig.faqs.slice(0, 3)} />
        <FaqAccordion items={siteConfig.faqs.slice(2)} />
      </div>
    </section>
  );
}
