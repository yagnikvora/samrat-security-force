import { siteConfig } from "@/lib/site-config";

export function ContactMapSection() {
  return (
    <section>
        <div className="overflow-hidden border border-white/10">
          <iframe
            src={siteConfig.contactMap.embedUrl}
            title={siteConfig.contactMap.title}
            width="100%"
            className="h-[420px] w-full sm:h-[460px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
    </section>
  );
}
