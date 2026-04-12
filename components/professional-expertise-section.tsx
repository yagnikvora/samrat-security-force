"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { siteConfig } from "@/lib/site-config";

type ProfessionalExpertiseSectionProps = {
  className?: string;
  backgroundClassName?: "bg-primary" | "bg-secondary";
};

export function ProfessionalExpertiseSection({
  className,
  backgroundClassName = "bg-primary",
}: ProfessionalExpertiseSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const hasAnimatedProgressRef = useRef(false);
  const progressAnimationFrameRef = useRef<number | null>(null);
  const section = siteConfig.professionalExpertise;
  const sectionClassName = className ? ` ${className}` : "";
  const [animatedProgressValues, setAnimatedProgressValues] = useState<number[]>(() =>
    section.progressItems.map(() => 0),
  );

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
      setAnimatedProgressValues(section.progressItems.map((item) => item.value));
      return;
    }

    const animateProgressValues = () => {
      if (hasAnimatedProgressRef.current) {
        return;
      }

      hasAnimatedProgressRef.current = true;
      const targetValues = section.progressItems.map((item) => item.value);
      const animationDuration = 1200;
      let startedAt: number | null = null;

      const step = (timestamp: number) => {
        if (startedAt === null) {
          startedAt = timestamp;
        }

        const elapsed = timestamp - startedAt;
        const progress = Math.min(elapsed / animationDuration, 1);
        setAnimatedProgressValues(targetValues.map((value) => Math.round(value * progress)));

        if (progress < 1) {
          progressAnimationFrameRef.current = window.requestAnimationFrame(step);
          return;
        }

        setAnimatedProgressValues(targetValues);
        progressAnimationFrameRef.current = null;
      };

      progressAnimationFrameRef.current = window.requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          animateProgressValues();
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
      if (progressAnimationFrameRef.current !== null) {
        window.cancelAnimationFrame(progressAnimationFrameRef.current);
      }
    };
  }, [section.progressItems]);

  return (
    <section ref={sectionRef} className={`relative left-1/2 right-1/2 -mx-[50vw] w-screen ${backgroundClassName}${sectionClassName}`}>
      <div className="mx-auto grid w-full max-w-[76rem] gap-10 px-5 py-12 sm:px-8 sm:py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-8 lg:ps-10 lg:pe-24 lg:py-18 xl:pe-40">
        <div className="reveal-up max-w-[33rem]">
          <p className="flex items-center gap-2 text-sm font-medium text-slate-200">
            <span className="h-2 w-2 rounded-full bg-brand" aria-hidden />
            {section.eyebrow}
          </p>

          <h2 className="mt-4 text-[25px] font-bold leading-tight text-white sm:text-[35px]">
            {section.title} <span className="text-brand">{section.highlight}</span>
          </h2>

          <p className="mt-5 text-[15px]">{section.description}</p>

          <div className="mt-7">
            <Link
              href={section.ctaHref}
              className="cta-pill inline-flex items-center gap-3 rounded-full ps-7 pe-1.5 py-1.5 text-sm font-medium"
            >
              <span>{section.ctaLabel}</span>
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

        <div className="reveal-up reveal-delay-1 relative mx-auto w-full max-w-[27rem] lg:mx-0 lg:ms-0 xl:max-w-[28.5rem]">
          <div className="reveal-up reveal-delay-2 relative aspect-[315/373] overflow-hidden rounded-[20px] border border-white/10 bg-secondary shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
            <Image
              src={section.imageSrc}
              alt={section.imageAlt}
              fill
              quality={100}
              className="object-cover object-center"
              sizes="(min-width: 1280px) 28.5rem, (min-width: 1024px) 32rem, 100vw"
            />
          </div>

          <div className="reveal-up reveal-delay-2 mt-4 space-y-3 md:absolute md:-left-[14rem] md:bottom-6 md:mt-0 md:w-[21rem]">
            {section.progressItems.map((item, index) => (
              <article
                key={item.label}
                className={`reveal-up rounded-xl border border-white/18 bg-gradient-to-r from-[#171a22]/78 via-[#141720]/72 to-[#10131b]/66 px-3.5 py-2.5 shadow-[0_12px_24px_rgba(0,0,0,0.35)] backdrop-blur-lg ${
                  index === 0 ? "md:ms-10" : "md:-ms-2 md:-mt-1 md:relative md:z-10"
                }`}
                style={{ animationDelay: `${260 + index * 120}ms` }}
              >
                <div className="flex items-center justify-between gap-4 text-sm font-semibold text-white">
                  <span>{item.label}</span>
                  <span className="text-brand">{animatedProgressValues[index] ?? 0}%</span>
                </div>
                <div className="relative mt-3 h-2.5 overflow-hidden rounded-full bg-white/30">
                  <div
                    className="absolute inset-y-0 left-0 rounded-full bg-[#ff933a] shadow-[0_0_0_1px_rgba(255,147,58,0.22)] transition-[width] duration-300 ease-out"
                    style={{ width: `${Math.max(0, animatedProgressValues[index] ?? 0)}%` }}
                  />
                  <div
                    className="absolute inset-y-0 right-0 rounded-full"
                    style={{ width: `${Math.max(0, 100 - (animatedProgressValues[index] ?? 0))}%` }}
                    aria-hidden
                  />
                </div>
              </article>
            ))}
          </div>

          <aside className="reveal-up reveal-delay-3 mt-4 rounded-2xl border border-white/20 bg-gradient-to-b from-[#17191f]/65 via-[#14161d]/58 to-[#0f1116]/52 p-5 shadow-[0_20px_45px_rgba(0,0,0,0.5)] backdrop-blur-xl lg:absolute lg:right-0 lg:top-1/2 lg:mt-0 lg:w-[18rem] lg:translate-x-[85%] lg:-translate-y-1/2">
            <h3 className="text-[22px] font-semibold leading-tight text-brand">{section.sideCardTitle}</h3>
            <p className="mt-3 text-sm">{section.sideCardDescription}</p>

            <div className="mt-5 space-y-4">
              {section.points.map((point, index) => (
                <article key={point.title} className="reveal-up flex items-start gap-3" style={{ animationDelay: `${420 + index * 100}ms` }}>
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/15">
                    <Image src={section.sideCardIcon} alt="" width={20} height={20} className="h-11 w-11" aria-hidden />
                  </span>
                  <div>
                    <h4 className="text-[20px] font-semibold leading-none text-brand">{point.title}</h4>
                    <p className="mt-2 text-sm">{point.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
