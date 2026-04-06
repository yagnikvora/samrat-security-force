import { SectionTitle } from "@/components/section-title";
import { siteConfig } from "@/lib/site-config";

export function NewsletterSection() {
  return (
    <section className="page-container mt-20">
      <div className="glass-card rounded-3xl p-7 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <SectionTitle title={siteConfig.newsletter.title} description={siteConfig.newsletter.description} align="left" />
          <form className="rounded-2xl border border-white/10 bg-black/35 p-4 sm:p-6">
            <label className="mb-3 block text-xs uppercase tracking-[0.2em] text-slate-400">Your Email Address</label>
            <input
              placeholder="name@domain.com"
              className="w-full rounded-lg border border-white/20 bg-zinc-900 px-4 py-3 text-sm outline-none focus:border-brand"
            />
            <button type="button" className="mt-4 w-full rounded-full bg-brand px-5 py-3 text-sm font-semibold text-black">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
