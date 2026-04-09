import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function HeroSection() {
  const hero = siteConfig.homeHero;

  return (
    <section className="page-container pt-14 sm:pt-20">
      <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-brand">{hero.eyebrow}</p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            {hero.title}
            <span className="text-brand"> {hero.highlight}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-slate-300">{hero.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-full bg-brand px-7 py-3 text-sm font-semibold text-primary">
              {hero.primaryCtaLabel}
            </Link>
            <Link href="/services" className="rounded-full border border-white/20 px-7 py-3 text-sm text-white">
              {hero.secondaryCtaLabel}
            </Link>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-5 sm:p-6">
          <div className="grid grid-cols-2 gap-4">
            {siteConfig.heroStats.map((item) => (
              <div key={item.label} className="rounded-xl border border-white/10 bg-primary-30 p-4">
                <p className="text-2xl font-semibold text-brand">{item.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
