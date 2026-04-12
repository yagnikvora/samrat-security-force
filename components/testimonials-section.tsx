"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { motionViewport, revealUpTransition, revealUpVariants } from "@/lib/motion";
import { siteConfig } from "@/lib/site-config";

type TestimonialsSectionProps = {
  className?: string;
  backgroundClassName?: "bg-primary" | "bg-secondary";
};

export function TestimonialsSection({
  className,
  backgroundClassName = "bg-primary",
}: TestimonialsSectionProps) {
  const section = siteConfig.testimonials;
  const sectionClassName = className ? ` ${className}` : "";

  return (
    <section className={`relative left-1/2 right-1/2 -mx-[50vw] w-screen ${backgroundClassName}${sectionClassName}`}>
      <div className="mx-auto grid w-full max-w-[76rem] gap-10 px-5 py-12 sm:px-8 sm:py-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-12 lg:px-10 lg:py-16">
        <motion.div
          className="relative mx-auto w-full max-w-[22rem] lg:mx-0 lg:max-w-[25rem]"
          initial="hidden"
          whileInView="visible"
          viewport={motionViewport}
          variants={revealUpVariants}
          transition={revealUpTransition()}
        >
          <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-full border border-white/12 shadow-[0_24px_54px_rgba(0,0,0,0.45)]">
            <Image
              src={section.imageSrc}
              alt={section.imageAlt}
              fill
              priority={false}
              className="object object-center"
              sizes="(min-width: 1024px) 25rem, (min-width: 640px) 22rem, 88vw"
            />
          </div>

          <motion.span
            className="absolute left-5 top-2 inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand shadow-[0_12px_24px_rgba(0,0,0,0.35)] sm:h-[4.5rem] sm:w-[4.5rem]"
            initial="hidden"
            whileInView="visible"
            viewport={motionViewport}
            variants={revealUpVariants}
            transition={revealUpTransition(0.12)}
          >
            <Image src={section.quoteIcon} alt="Quote" width={26} height={26} className="h-18 w-18" />
          </motion.span>

          <motion.span
            className="absolute bottom-5 left-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand shadow-[0_12px_24px_rgba(0,0,0,0.35)] sm:h-16 sm:w-16"
            initial="hidden"
            whileInView="visible"
            viewport={motionViewport}
            variants={revealUpVariants}
            transition={revealUpTransition(0.2)}
          >
            <Image src={section.userIcon} alt="Client" width={26} height={26} className="h-18 w-18 " />
          </motion.span>

          <motion.span
            className="absolute bottom-10 right-0 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand shadow-[0_12px_24px_rgba(0,0,0,0.35)] sm:h-16 sm:w-16"
            initial="hidden"
            whileInView="visible"
            viewport={motionViewport}
            variants={revealUpVariants}
            transition={revealUpTransition(0.28)}
          >
            <Image src={section.userIcon} alt="Client" width={26} height={26} className="h-18 w-18" />
          </motion.span>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={motionViewport}
          variants={revealUpVariants}
          transition={revealUpTransition(0.08)}
        >
          <p className="flex items-center gap-2 text-sm font-medium text-slate-200">
            <span className="h-2 w-2 rounded-full bg-brand" aria-hidden />
            {section.eyebrow}
          </p>

          <h2 className="mt-4 text-[35px] font-bold leading-tight text-white">
            {section.title} <span className="text-brand">{section.highlight}</span> {section.titleSuffix}
          </h2>

          <p className="mt-4 max-w-[36rem] text-[15px]">{section.description}</p>

          <motion.article
            className="mt-6 rounded-2xl border border-white/10 bg-secondary p-6 shadow-[0_20px_45px_rgba(0,0,0,0.4)] backdrop-blur-sm sm:p-7"
            initial="hidden"
            whileInView="visible"
            viewport={motionViewport}
            variants={revealUpVariants}
            transition={revealUpTransition(0.18)}
          >
            <p className="text-[25px] tracking-[0.3em] text-brand" aria-label={`${section.rating} star rating`}>
              {"★".repeat(section.rating)}
            </p>

            <p className="mt-4 max-w-[25rem] text-[14px] leading-7 text-slate-300">{section.quote}</p>

            <div className="mt-6 flex items-center gap-3.5">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand">
                <Image src={section.userIcon} alt="Author" width={20} height={20} className="h-11 w-11" />
              </span>
              <div>
                <p className="text-[22px] font-semibold leading-none text-white">{section.authorName}</p>
                <p className="mt-2 text-sm text-slate-300">{section.authorRole}</p>
              </div>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
