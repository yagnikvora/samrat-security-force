"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-black/90 backdrop-blur-lg">
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
                isActive(item.href) ? "text-brand" : "text-slate-100 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-full bg-brand ps-3.5 pe-1.5 py-1.5 text-[15px] text-white transition hover:brightness-110 sm:inline-flex"
        >
          <span>Get In Touch</span>
          <span className="inline-flex size-8 items-center justify-center rounded-full bg-white/95">
            <Image
              src="/images/nevbar_right_arrow.png"
              alt="Arrow"
              width={30}
              height={30}
              className="h-[30px] w-[30px]"
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
        <div className="border-t border-white/10 bg-black/95 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                  isActive(item.href) ? "bg-white/5 text-brand" : "text-slate-100 hover:bg-white/5"
                }`}
                onClick={() => setIsMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand ps-3.5 pe-1.5 py-1.5 text-[15px] text-white transition hover:brightness-110"
            onClick={() => setIsMobileOpen(false)}
          >
            <span>Get In Touch</span>
            <span className="inline-flex size-8 items-center justify-center rounded-full bg-white/95">
              <Image src="/images/nevbar_right_arrow.png" alt="Arrow" width={30} height={30} className="h-[30px] w-[30px]" />
            </span>
          </Link>
        </div>
      ) : null}
    </header>
  );
}
