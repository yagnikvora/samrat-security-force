"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  const pathname = usePathname() || "/";
  const isBlogDetailPage = pathname.startsWith("/blog/");
  const isCompactFooter = siteConfig.footer.compactRoutes.includes(pathname) || isBlogDetailPage;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      {!isCompactFooter ? (
        <div className="page-container relative z-20">
          <div className="rounded-[20px] bg-gradient-to-r from-zinc-900/95 to-zinc-800/80 px-6 py-7 shadow-[0_24px_64px_rgba(0,0,0,0.5)] sm:px-10 sm:py-9">
            <div className="grid gap-7 lg:grid-cols-[1fr_0.95fr] lg:items-center">
              <div>
                <h3 className="max-w-lg text-[35px] font-semibold leading-tight text-white">{siteConfig.footer.topBox.title}</h3>
                <p className="mt-4 max-w-xl text-[15px] leading-7 text-slate-300">{siteConfig.footer.topBox.description}</p>
              </div>

              <form className="rounded-2xl border border-white/15 bg-black/25 p-4 sm:p-5">
                <input
                  placeholder={siteConfig.footer.topBox.inputPlaceholder}
                  className="w-full rounded-xl border border-white/20 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:border-brand"
                />
                <button
                  type="button"
                  className="mt-4 inline-flex w-full items-center justify-center gap-1 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
                >
                  {siteConfig.footer.topBox.buttonLabel}
                  <Image src="/svgs/common/Breadcrumbs_arrow.svg" alt="arrow" width={14} height={14} className="h-4 w-4 brightness-0 invert" />
                </button>
              </form>
            </div>
          </div>

          <button
            type="button"
            aria-label="Scroll to top"
            onClick={scrollToTop}
            className="absolute bottom-0 left-1/2 z-40 inline-flex size-14 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full border-[8px] border-black bg-brand"
          >
            <Image src="/svgs/common/Footer_up_arrow.svg" alt="up arrow" width={16} height={16} className="h-11 w-11" />
          </button>
        </div>
      ) : null}

      <div className={`relative z-10 border-t border-white/5 bg-black pb-10 ${isCompactFooter ? "pt-14" : "-mt-28 pt-36 sm:-mt-32 sm:pt-40"}`}>
        {isCompactFooter ? (
          <button
            type="button"
            aria-label="Scroll to top"
            onClick={scrollToTop}
            className="absolute left-1/2 top-0 inline-flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[8px] border-black bg-brand"
          >
            <Image src="/svgs/common/Footer_up_arrow.svg" alt="up arrow" width={16} height={16} className="h-11 w-11" />
          </button>
        ) : null}

        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          <div>
            <Image src={siteConfig.footer.logoSrc} alt={siteConfig.brand.name} width={74} height={74} className="h-16 w-auto" />
            <p className="mt-4 max-w-[300px] text-[15px] text-base">{siteConfig.footer.description}</p>
            <div className="mt-4 flex items-center gap-2.5">
              {siteConfig.footer.socials.map((social) => (
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

          <div className="lg:ms-10">
            <h4 className="text-[18px] font-semibold text-brand">{siteConfig.footerHeadings.quickLinks}</h4>
            <ul className="mt-4 space-y-2.5 text-[15px] text-slate-200">
              {siteConfig.footerLinks.quick.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:ms-10">
            <h4 className="text-[18px] font-semibold text-brand">{siteConfig.footerHeadings.support}</h4>
            <ul className="mt-4 space-y-2.5 text-[15px] text-slate-200">
              {siteConfig.footerLinks.support.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:ms-10">
            <h4 className="text-[18px] font-semibold text-brand">{siteConfig.footerHeadings.contactInfo}</h4>
            <ul className="mt-6 space-y-4 text-[15px] text-slate-200">
              {siteConfig.footer.contactItems.map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <Image src={item.icon} alt="icon" width={20} height={20} className="mt-0.5 h-[20px] w-[20px]" />
                  {item.href ? (
                    <a href={item.href} className="transition hover:text-white">
                      {item.label}
                    </a>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-zinc-900/60 py-5 text-center text-xs text-slate-400">
        {siteConfig.footer.copyrightText}
      </div>
    </footer>
  );
}
