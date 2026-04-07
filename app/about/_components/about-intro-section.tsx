import { SectionTitle } from "@/components/section-title";
import { siteConfig } from "@/lib/site-config";

export function AboutIntroSection() {
  const section = siteConfig.sections.aboutIntro;

  return (
    <section>
      <SectionTitle
        eyebrow={section.eyebrow}
        title={section.title}
        highlight={section.highlight}
        description={section.description}
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {siteConfig.aboutHighlights.map((item) => (
          <article key={item.title} className="glass-card rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-brand">{item.title}</h3>
            <p className="mt-3 text-sm text-slate-300">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
