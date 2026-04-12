"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { siteConfig } from "@/lib/site-config";

type ServicesShowcaseSectionProps = {
  className?: string;
  showHeader?: boolean;
  backgroundClassName?: "bg-primary" | "bg-secondary";
};

export function ServicesShowcaseSection({
  className,
  showHeader = true,
  backgroundClassName = "bg-primary",
}: ServicesShowcaseSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const section = siteConfig.servicesShowcase;
  const sectionClassName = className ? ` ${className}` : "";
  const cardsSpacingClassName = showHeader ? "mt-9" : "mt-0";

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
    <section ref={sectionRef} className={`relative left-1/2 right-1/2 -mx-[50vw] w-screen ${backgroundClassName}${sectionClassName}`}>
      <div className="mx-auto w-full max-w-[76rem] px-5 py-10 sm:px-8 sm:py-13 lg:px-10 lg:py-20">
        {showHeader ? (
          <header className="reveal-up border-b border-white/10 pb-8">
            <p className="flex items-center gap-2 text-sm font-medium text-slate-200">
              <span className="h-2 w-2 rounded-full bg-brand" aria-hidden />
              {section.eyebrow}
            </p>

            <div className="mt-3 grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_auto] md:items-center md:gap-4 lg:gap-5">
              <h2 className="min-w-0 text-[33px] font-bold leading-tight text-white">
                {section.title} <span className="text-brand">{section.highlight}</span>
              </h2>

              <p className="min-w-0 max-w-none text-sm text-slate-300 md:max-w-[23.5rem] md:justify-self-end lg:max-w-md">
                {section.description}
              </p>

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
            </div>
          </header>
        ) : null}

        <div className={`reveal-up reveal-delay-1 ${cardsSpacingClassName} grid gap-x-7 gap-y-15 md:grid-cols-2 lg:grid-cols-3`}>
          {siteConfig.services.map((service, index) => (
            <article
              key={service.id}
              className="reveal-up rounded-2xl border border-white/10 bg-secondary px-5 py-6 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-white/20 hover:shadow-[0_10px_26px_rgba(0,0,0,0.22)]"
              style={{ animationDelay: `${180 + index * 90}ms` }}
            >
              <div className="flex items-start justify-between gap-5">
                <div className="flex min-w-0 items-center gap-3">
                  <Image src={section.cardIcon} alt="" width={50} height={50} className="h-11 w-11 shrink-0" aria-hidden />
                  <h3 className="text-[20px] font-bold text-brand">{service.title}</h3>
                </div>

                <span className="inline-flex h-7 min-w-10 shrink-0 items-center justify-center rounded-full border border-brand/70 px-2 text-xs font-semibold text-brand">
                  {service.id}
                </span>
              </div>

              <p className="px-2 text-[15px] mt-4 max-w-[34ch]">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}