import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-white/5 bg-[#070707]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="text-lg font-semibold text-white">{siteConfig.brand.name}</h3>
          <p className="mt-3 text-sm text-slate-400">{siteConfig.brand.tagline}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {siteConfig.footerLinks.quick.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Help & Support</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {siteConfig.footerLinks.support.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Contact Info</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>{siteConfig.brand.address}</li>
            <li>{siteConfig.brand.supportEmail}</li>
            <li>{siteConfig.brand.supportPhone}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 py-5 text-center text-xs text-slate-500">
        Copyright {new Date().getFullYear()} {siteConfig.brand.name}. All rights reserved.
      </div>
    </footer>
  );
}
