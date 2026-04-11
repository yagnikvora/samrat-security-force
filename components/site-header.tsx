"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const isContactRoute = pathname === "/contact" || pathname.startsWith("/contact/");

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-40 bg-primary-90 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center">
          <Image src="/Logos/logo.png.svg" alt="Samrat Security logo" width={72} height={72} className="h-[72px] w-auto" priority />
        </Link>

        <nav className="hidden items-center gap-11 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[15px] font-medium transition ${
                isActive(item.href) ? "text-brand" : "text-slate-100 hover:text-brand"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className={`cta-pill hidden items-center gap-2 rounded-full ps-3.5 pe-1.5 py-1.5 text-[15px] sm:inline-flex ${
            isContactRoute ? "invisible pointer-events-none" : ""
          }`}
          aria-hidden={isContactRoute}
          tabIndex={isContactRoute ? -1 : undefined}
        >
          <span>Get In Touch</span>
          <span className="cta-pill-icon inline-flex size-8 items-center justify-center rounded-full">
            <Image
              src="/svgs/common/cta-arrow-up-right.svg"
              alt="Arrow"
              width={16}
              height={16}
              className="cta-pill-arrow h-4 w-4"
            />
          </span>
        </Link>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMobileOpen}
          onClick={() => setIsMobileOpen((old) => !old)}
        >
          <span className="text-xl leading-none">{isMobileOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {isMobileOpen ? (
        <div className="border-t border-white/10 bg-primary-95 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                  isActive(item.href) ? "bg-white/5 text-brand" : "text-slate-100 hover:bg-white/5 hover:text-brand"
                }`}
                onClick={() => setIsMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {!isContactRoute ? (
            <Link
              href="/contact"
              className="cta-pill mt-4 inline-flex items-center gap-2 rounded-full ps-3.5 pe-1.5 py-1.5 text-[15px]"
              onClick={() => setIsMobileOpen(false)}
            >
              <span>Get In Touch</span>
              <span className="cta-pill-icon inline-flex size-8 items-center justify-center rounded-full">
                <Image
                  src="/svgs/common/cta-arrow-up-right.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                  className="cta-pill-arrow h-4 w-4"
                />
              </span>
            </Link>
          ) : null}
        </div>
      ) : null}
    </header>
  );
}
