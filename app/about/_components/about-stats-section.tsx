import { siteConfig } from "@/lib/site-config";

export function AboutStatsSection() {
  return (
    <section className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {siteConfig.heroStats.map((item) => (
        <div key={item.label} className="rounded-xl border border-white/10 bg-zinc-900/50 p-5 text-center">
          <p className="text-3xl font-semibold text-brand">{item.value}</p>
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
        </div>
      ))}
    </section>
  );
}
