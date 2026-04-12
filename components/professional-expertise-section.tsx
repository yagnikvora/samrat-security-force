"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { motionViewport, revealEase, revealUpTransition, revealUpVariants } from "@/lib/motion";
import { siteConfig } from "@/lib/site-config";

type ProfessionalExpertiseSectionProps = {
  className?: string;
  backgroundClassName?: "bg-primary" | "bg-secondary";
};

type AnimatedProgressCardProps = {
  label: string;
  value: number;
  index: number;
  className: string;
};

function AnimatedProgressCard({ label, value, index, className }: AnimatedProgressCardProps) {
  const cardRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });
  const progress = useMotionValue(prefersReducedMotion ? value : 0);
  const progressWidth = useTransform(progress, (latest) => `${Math.max(0, latest)}%`);
  const remainingWidth = useTransform(progress, (latest) => `${Math.max(0, 100 - latest)}%`);
  const [displayValue, setDisplayValue] = useState<number>(prefersReducedMotion ? value : 0);

  useMotionValueEvent(progress, "change", (latest) => {
    setDisplayValue(Math.round(latest));
  });

  useEffect(() => {
    if (prefersReducedMotion) {
      progress.set(value);
      return;
    }

    if (!isInView) {
      return;
    }

    const controls = animate(progress, value, {
      duration: 1.2,
      ease: revealEase,
    });

    return () => {
      controls.stop();
    };
  }, [isInView, prefersReducedMotion, progress, value]);

  return (
    <motion.article
      ref={cardRef}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={motionViewport}
      variants={revealUpVariants}
      transition={revealUpTransition(0.26 + index * 0.12)}
    >
      <div className="flex items-center justify-between gap-4 text-sm font-semibold text-white">
        <span>{label}</span>
        <span className="text-brand">{displayValue}%</span>
      </div>
      <div className="relative mt-3 h-2.5 overflow-hidden rounded-full bg-white/30">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-[#ff933a] shadow-[0_0_0_1px_rgba(255,147,58,0.22)]"
          style={{ width: progressWidth }}
        />
        <motion.div className="absolute inset-y-0 right-0 rounded-full" style={{ width: remainingWidth }} aria-hidden />
      </div>
    </motion.article>
  );
}

export function ProfessionalExpertiseSection({
  className,
  backgroundClassName = "bg-primary",
}: ProfessionalExpertiseSectionProps) {
  const section = siteConfig.professionalExpertise;
  const sectionClassName = className ? ` ${className}` : "";

  return (
    <section className={`relative left-1/2 right-1/2 -mx-[50vw] w-screen ${backgroundClassName}${sectionClassName}`}>
      <div className="mx-auto grid w-full max-w-[76rem] gap-10 px-5 py-12 sm:px-8 sm:py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-8 lg:ps-10 lg:pe-24 lg:py-18 xl:pe-40">
        <motion.div
          className="max-w-[33rem]"
          initial="hidden"
          whileInView="visible"
          viewport={motionViewport}
          variants={revealUpVariants}
          transition={revealUpTransition()}
        >
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
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[27rem] lg:mx-0 lg:ms-0 xl:max-w-[28.5rem]"
          initial="hidden"
          whileInView="visible"
          viewport={motionViewport}
          variants={revealUpVariants}
          transition={revealUpTransition(0.12)}
        >
          <motion.div
            className="relative aspect-[315/373] overflow-hidden rounded-[20px] border border-white/10 bg-secondary shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
            initial="hidden"
            whileInView="visible"
            viewport={motionViewport}
            variants={revealUpVariants}
            transition={revealUpTransition(0.22)}
          >
            <Image
              src={section.imageSrc}
              alt={section.imageAlt}
              fill
              quality={100}
              className="object-cover object-center"
              sizes="(min-width: 1280px) 28.5rem, (min-width: 1024px) 32rem, 100vw"
            />
          </motion.div>

          <motion.div
            className="mt-4 space-y-3 md:absolute md:-left-[14rem] md:bottom-6 md:mt-0 md:w-[21rem]"
            initial="hidden"
            whileInView="visible"
            viewport={motionViewport}
            variants={revealUpVariants}
            transition={revealUpTransition(0.22)}
          >
            {section.progressItems.map((item, index) => (
              <AnimatedProgressCard
                key={item.label}
                label={item.label}
                value={item.value}
                index={index}
                className={`rounded-xl border border-white/18 bg-gradient-to-r from-[#171a22]/78 via-[#141720]/72 to-[#10131b]/66 px-3.5 py-2.5 shadow-[0_12px_24px_rgba(0,0,0,0.35)] backdrop-blur-lg ${
                  index === 0 ? "md:ms-10" : "md:-ms-2 md:-mt-1 md:relative md:z-10"
                }`}
              />
            ))}
          </motion.div>

          <motion.aside
            className="mt-4 rounded-2xl border border-white/20 bg-gradient-to-b from-[#17191f]/65 via-[#14161d]/58 to-[#0f1116]/52 p-5 shadow-[0_20px_45px_rgba(0,0,0,0.5)] backdrop-blur-xl lg:absolute lg:right-0 lg:top-1/2 lg:mt-0 lg:w-[18rem] lg:translate-x-[85%] lg:-translate-y-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={motionViewport}
            variants={revealUpVariants}
            transition={revealUpTransition(0.32)}
          >
            <h3 className="text-[22px] font-semibold leading-tight text-brand">{section.sideCardTitle}</h3>
            <p className="mt-3 text-sm">{section.sideCardDescription}</p>

            <div className="mt-5 space-y-4">
              {section.points.map((point, index) => (
                <motion.article
                  key={point.title}
                  className="flex items-start gap-3"
                  initial="hidden"
                  whileInView="visible"
                  viewport={motionViewport}
                  variants={revealUpVariants}
                  transition={revealUpTransition(0.42 + index * 0.1)}
                >
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/15">
                    <Image src={section.sideCardIcon} alt="" width={20} height={20} className="h-11 w-11" aria-hidden />
                  </span>
                  <div>
                    <h4 className="text-[20px] font-semibold leading-none text-brand">{point.title}</h4>
                    <p className="mt-2 text-sm">{point.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.aside>
        </motion.div>
      </div>
    </section>
  );
}
