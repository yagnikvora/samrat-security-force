import { ContactMailtoForm } from "@/components/contact-mailto-form";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export function ContactLayoutSection() {
  const section = siteConfig.contactSection;

  return (
    <section className="bg-[#121215] py-14 sm:py-16">
      <div className="page-container grid gap-10 lg:grid-cols-[1.25fr_0.85fr]">
        <div>
          <h2 className="text-[40px] font-semibold text-white">{section.heading}</h2>
          <p className="mt-4 max-w-2xl text-[14px] text-slate-300">{section.description}</p>

          <div className="mt-7">
            <ContactMailtoForm />
          </div>
        </div>

        <aside>
          <h3 className="text-[40px] font-semibold text-white">{section.infoHeading}</h3>
          <p className="mt-4 text-[14px] text-slate-300">{section.infoDescription}</p>

          <ul className="mt-9 space-y-6">
            {section.details.map((detail) => (
              <li key={detail.key} className="flex items-start gap-4">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-brand">
                  <Image src={detail.icon} alt={detail.alt} width={20} height={20} className="h-12 w-12" />
                </span>
                <div>
                  <p className="text-[15px] font-semibold uppercase tracking-[0.02em] text-brand">{detail.label}</p>
                  <p className="mt-1 text-lg font-semibold text-white sm:text-xl">{siteConfig.brand[detail.key]}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-center justify-between rounded-xl border border-white/10 bg-zinc-900/60 px-15 py-5">
            <p className="text-[18px] font-semibold text-brand">{section.followLabel}</p>
            <div className="flex items-center gap-2.5">
              {section.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="inline-flex size-8 items-center justify-center rounded-full bg-brand"
                  aria-label={social.name}
                >
                  <Image src={social.icon} alt={social.name} width={14} height={14} className="h-8 w-8" />
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
