import { SectionTitle } from "@/components/section-title";

export function AboutIntroSection() {
  return (
    <section>
      <SectionTitle
        eyebrow="About Us"
        title="Your Trusted"
        highlight="Security Partner"
        description="We are committed to practical, accountable protection that keeps people and operations safe."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <article className="glass-card rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-brand">24/7 Support</h3>
          <p className="mt-3 text-sm text-slate-300">Our team remains available for emergencies and rapid response coordination.</p>
        </article>
        <article className="glass-card rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-brand">Trained Professionals</h3>
          <p className="mt-3 text-sm text-slate-300">Every officer is site-briefed, disciplined, and aligned with security protocols.</p>
        </article>
        <article className="glass-card rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-brand">Advanced Technology</h3>
          <p className="mt-3 text-sm text-slate-300">Monitoring processes and reporting systems are integrated with field operations.</p>
        </article>
      </div>
    </section>
  );
}
