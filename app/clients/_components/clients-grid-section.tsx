import Image from "next/image";
import { SectionTitle } from "@/components/section-title";
import { siteConfig } from "@/lib/site-config";

export function ClientsGridSection() {
  const section = siteConfig.sections.clientsGrid;

  return (
    <section className="bg-secondary px-4 pt-5 pb-48 -mb-33">
      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {siteConfig.clients.map((client) => (
          <article
            key={client.id}
            className="group aspect-square overflow-hidden rounded-xl border border-white/10 bg-secondary shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:shadow-[0_10px_26px_rgba(0,0,0,0.38)]"
          >
            <div className="flex h-full flex-col">
              <div className="relative min-h-0 flex-1 bg-white">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  sizes="(min-width: 1024px) 220px, (min-width: 640px) 45vw, 92vw"
                  className="object-contain p-2 transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="h-[3px] w-full bg-brand" />
              <div className="px-3 py-3 text-center text-base font-semibold text-brand">{client.name}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
