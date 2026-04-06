import { ContactMailtoForm } from "@/components/contact-mailto-form";
import { SectionTitle } from "@/components/section-title";
import { siteConfig } from "@/lib/site-config";

export function ContactLayoutSection() {
  return (
    <section>
      <SectionTitle
        eyebrow="Contact"
        title="Get In Touch"
        highlight="With Us"
        description="Share your requirements and open your mailbox with a prefilled message instantly."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="glass-card rounded-2xl p-6 sm:p-7">
          <ContactMailtoForm />
        </div>

        <aside className="glass-card rounded-2xl p-6 sm:p-7">
          <h3 className="text-2xl font-semibold text-white">Contact Info</h3>
          <ul className="mt-6 space-y-4 text-sm text-slate-300">
            <li>
              <p className="text-xs uppercase tracking-[0.2em] text-brand">Phone</p>
              <p className="mt-1">{siteConfig.brand.supportPhone}</p>
            </li>
            <li>
              <p className="text-xs uppercase tracking-[0.2em] text-brand">Email</p>
              <p className="mt-1">{siteConfig.brand.supportEmail}</p>
            </li>
            <li>
              <p className="text-xs uppercase tracking-[0.2em] text-brand">Office</p>
              <p className="mt-1">{siteConfig.brand.address}</p>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
