import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-black/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center">
          <Image src="/Logos/logo.png.svg" alt="Samrat Security logo" width={64} height={64} className="h-16 w-auto" priority />
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-black transition hover:brightness-110"
        >
          Get In Touch
        </Link>
      </div>
    </header>
  );
}
