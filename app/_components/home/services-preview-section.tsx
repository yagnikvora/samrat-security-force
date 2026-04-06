import { SectionTitle } from "@/components/section-title";
import { siteConfig } from "@/lib/site-config";

export function ServicesPreviewSection() {
  return (
    <section className="page-container mt-20">
      <SectionTitle
        eyebrow="Our Services"
        title="Our Exclusive"
        highlight="Services"
        description="A strong portfolio of protective services tailored for operational continuity."
      />
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {siteConfig.services.map((service) => (
          <article key={service.id} className="glass-card rounded-2xl p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              <span className="text-xs text-brand">{service.id}</span>
            </div>
            <p className="mt-3 text-sm text-slate-300">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
