import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function HeroSection() {
  return (
    <section className="page-container pt-14 sm:pt-20">
      <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-brand">Trusted Protection</p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Where Safety Meets
            <span className="text-brand"> Professional Excellence</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-slate-300">
            We deliver practical, human-first security services for businesses, residential communities, and events.
            Our teams are trained, responsive, and accountable.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-full bg-brand px-7 py-3 text-sm font-semibold text-black">
              Get In Touch
            </Link>
            <Link href="/services" className="rounded-full border border-white/20 px-7 py-3 text-sm text-white">
              View Services
            </Link>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-5 sm:p-6">
          <div className="grid grid-cols-2 gap-4">
            {siteConfig.heroStats.map((item) => (
              <div key={item.label} className="rounded-xl border border-white/10 bg-black/30 p-4">
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
