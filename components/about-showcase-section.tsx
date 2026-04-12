"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { siteConfig } from "@/lib/site-config";

type AboutShowcaseSectionProps = {
  className?: string;
  showTopViewAll?: boolean;
  showBottomMoreAbout?: boolean;
};

export function AboutShowcaseSection({
  className,
  showTopViewAll = true,
  showBottomMoreAbout = true,
}: AboutShowcaseSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const section = siteConfig.aboutShowcase;
  const callHref = `tel:${siteConfig.brand.supportPhone.replace(/[^+\d]/g, "")}`;
  const sectionClassName = className ? ` ${className}` : "";
  const topRowGridClassName = showTopViewAll
    ? "md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_auto]"
    : "md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]";

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) {
      return;
    }

    const targets = Array.from(root.querySelectorAll<HTMLElement>(".reveal-up"));
    if (!targets.length) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className={`relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-secondary${sectionClassName}`}>
      <div className="mx-auto w-full max-w-[76rem] px-5 py-5 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
        <header className="reveal-up border-b border-white/10 pb-8">
          <p className="flex items-center gap-2 text-sm font-medium text-slate-200">
            <span className="h-2 w-2 rounded-full bg-brand" aria-hidden />
            {section.eyebrow}
          </p>

          <div className={`mt-3 grid gap-6 ${topRowGridClassName} md:items-center md:gap-4 lg:gap-5`}>
            <h2 className="min-w-0 text-[33px] font-bold leading-tight text-white">
              {section.title} <span className="text-brand">{section.highlight}</span>
            </h2>

            <p className="min-w-0 max-w-none text-sm md:max-w-[23.5rem] md:justify-self-end lg:max-w-md">{section.description}</p>

            {showTopViewAll ? (
              <div className="flex items-center md:justify-self-end">
                <Link
                  href={section.viewAllHref}
                  className="cta-pill inline-flex items-center gap-3 rounded-full ps-7 pe-1.5 py-1.5 text-sm font-medium"
                >
                  <span>{section.viewAllLabel}</span>
                  <span className="cta-pill__icon inline-flex h-8 w-8 items-center justify-center rounded-full">
                    <Image
                      src="/svgs/common/cta-arrow-up-right.svg"
                      alt="Arrow"
                      width={16}
                      height={16}
                      className="cta-pill__arrow h-4 w-4"
                    />
                  </span>
                </Link>
              </div>
            ) : null}
          </div>
        </header>

        <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-start">
          <div className="reveal-up reveal-delay-1 grid gap-4 sm:grid-cols-2 sm:grid-rows-[179px_178px] md:min-w-0 md:flex-[1.03]">
            <div className="relative aspect-[315/373] overflow-hidden rounded-2xl sm:row-span-2 sm:h-full sm:aspect-auto">
              <Image
                src={section.primaryImage}
                alt="Security officers"
                fill
                className="object-cover object-[50%_42%]"
                sizes="(min-width: 1280px) 26rem, (min-width: 640px) 40vw, 100vw"
              />
            </div>

            <div className="flex aspect-[315/177] flex-col justify-between rounded-2xl bg-brand p-5 text-white sm:h-full sm:aspect-auto">
              <h3 className="text-3xl font-semibold leading-none">{section.supportCardTitle}</h3>
              <div className="flex items-end justify-between gap-4">
                <p className="max-w-[16rem] text-sm leading-relaxed text-orange-50">{section.supportCardDescription}</p>
                <Link
                  href={section.supportCardCtaHref}
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/70 text-white transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  aria-label="Contact support"
                >
                  <Image
                    src="/svgs/common/cta-arrow-up-right.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="h-4 w-4 brightness-0 invert"
                  />
                </Link>
              </div>
            </div>

            <div className="relative aspect-[315/177] overflow-hidden rounded-2xl sm:h-full sm:aspect-auto">
              <Image
                src={section.secondaryImage}
                alt="Security control room"
                fill
                className="object-cover object-[50%_54%]"
                sizes="(min-width: 1280px) 19.5rem, (min-width: 640px) 30vw, 100vw"
              />
            </div>
          </div>

          <div className="reveal-up reveal-delay-2 flex h-full flex-col justify-between md:min-w-0 md:flex-1">
            <div className="space-y-6">
              {section.features.map((item, index) => (
                <article key={item.title} className="reveal-up flex gap-4" style={{ animationDelay: `${260 + index * 120}ms` }}>
                  <span className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/15">
                    <Image src={section.featureIcon} alt="Feature" width={28} height={28} className="h-11 w-11" />
                  </span>
                  <div>
                    <h3 className="text-[25px] font-semibold leading-none text-brand">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {showBottomMoreAbout ? (
                <Link
                  href={section.moreCtaHref}
                  className="cta-pill inline-flex w-fit self-start items-center gap-3 whitespace-nowrap rounded-full ps-6 pe-1.5 py-1.5 text-sm font-medium sm:self-auto"
                >
                  <span>{section.moreCtaLabel}</span>
                  <span className="cta-pill__icon inline-flex h-8 w-8 items-center justify-center rounded-full">
                    <Image
                      src="/svgs/common/cta-arrow-up-right.svg"
                      alt="Arrow"
                      width={16}
                      height={16}
                      className="cta-pill__arrow h-4 w-4"
                    />
                  </span>
                </Link>
              ) : null}

              <div className="inline-flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand">
                  <Image src={section.callIcon} alt="Call" width={22} height={22} className="h-11 w-11" />
                </span>
                <div>
                  <p className="text-[25px] font-semibold leading-none text-brand">{section.callLabel}</p>
                  <a href={callHref} className="mt-1 block text-base font-medium text-white transition hover:text-brand">
                    {siteConfig.brand.supportPhone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal-up reveal-delay-3 mt-10 border-t border-white/10 pt-6">
          <ul className="grid grid-cols-2 items-center gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {section.logos.map((logo, index) => (
              <li
                key={logo.src}
                className="reveal-up group relative h-12 opacity-85 transition-all duration-300 hover:-translate-y-0.5 hover:opacity-100 sm:h-14 lg:h-16"
                style={{ animationDelay: `${360 + index * 70}ms` }}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-xl border border-white/8 bg-white/[0.02] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain transition-all duration-300 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 15vw, (min-width: 640px) 30vw, 45vw"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
