import { SectionTitle } from "@/components/section-title";
import { siteConfig } from "@/lib/site-config";

export function TeamGridSection() {
  return (
    <section>
      <SectionTitle
        eyebrow="Our Team"
        title="Meet Our"
        highlight="Security Team"
        description="A disciplined team with strong operational standards and responsive leadership."
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {siteConfig.team.map((member) => (
          <article key={member.id} className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/55">
            <div className="h-44 bg-gradient-to-b from-zinc-700 to-zinc-900" />
            <div className="border-t border-brand/60 p-4">
              <h3 className="text-lg font-semibold text-brand">{member.name}</h3>
              <p className="text-sm text-slate-300">{member.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
