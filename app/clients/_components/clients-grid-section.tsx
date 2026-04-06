import { SectionTitle } from "@/components/section-title";
import { siteConfig } from "@/lib/site-config";

export function ClientsGridSection() {
  return (
    <section>
      <SectionTitle
        eyebrow="Clients"
        title="Our Valuable"
        highlight="Clients"
        description="Trusted by institutions, businesses, and communities that require reliable protection."
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {siteConfig.clients.map((client) => (
          <article key={client.id} className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60">
            <div className="grid h-28 place-items-center bg-white text-sm font-semibold text-zinc-800">{client.name}</div>
            <div className="border-t border-brand/60 px-4 py-3 text-center text-sm text-brand">{client.name}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
