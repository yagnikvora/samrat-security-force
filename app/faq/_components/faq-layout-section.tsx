"use client";

import { FaqAccordion } from "@/components/faq-accordion";
import { siteConfig } from "@/lib/site-config";

export function FaqLayoutSection() {
  const leftItems = siteConfig.faqs.slice(0, 5);
  const rightItems = siteConfig.faqs.slice(5);

  return (
    <section>
      <div className="mt-3 grid gap-6 lg:grid-cols-2 lg:items-start">
        <FaqAccordion items={leftItems} />
        <FaqAccordion items={rightItems} />
      </div>
    </section>
  );
}
