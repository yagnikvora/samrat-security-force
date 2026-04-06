import { SectionTitle } from "@/components/section-title";
import { siteConfig } from "@/lib/site-config";

export function ServicesGridSection() {
  return (
    <section>
      <SectionTitle
        eyebrow="Our Services"
        title="Security Services"
        highlight="That Scale"
        description="Reliable security operations for companies, residences, and public events."
      />

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {siteConfig.services.map((service) => (
          <article key={service.id} className="glass-card rounded-2xl p-5">
            <p className="text-xs text-brand">{service.id}</p>
            <h3 className="mt-2 text-xl font-semibold text-white">{service.title}</h3>
            <p className="mt-3 text-sm text-slate-300">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
