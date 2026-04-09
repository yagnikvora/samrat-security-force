import { SectionTitle } from "@/components/section-title";
import { siteConfig } from "@/lib/site-config";

export function GalleryGridSection() {
  const section = siteConfig.sections.galleryGrid;

  return (
    <section>
      <SectionTitle
        eyebrow={section.eyebrow}
        title={section.title}
        highlight={section.highlight}
        description={section.description}
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {siteConfig.galleryItems.map((item) => (
          <article key={item.id} className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60">
            <div className="grid h-36 place-items-center bg-gradient-to-br from-zinc-800 to-zinc-950 px-4 text-center text-sm font-semibold text-white">
              {item.title}
            </div>
            <div className="border-t border-brand/50 px-4 py-3 text-center text-sm text-brand">{item.category}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
