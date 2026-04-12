"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { motionViewport, revealUpTransition, revealUpVariants } from "@/lib/motion";
import { siteConfig } from "@/lib/site-config";

type TeamShowcaseSectionProps = {
  className?: string;
  backgroundClassName?: "bg-primary" | "bg-secondary" | "bh-primary";
  title?: string;
  highlight?: string;
  description?: string;
  showViewAll?: boolean;
};

export function TeamShowcaseSection({
  className,
  backgroundClassName = "bh-primary",
  title,
  highlight,
  description,
  showViewAll = true,
}: TeamShowcaseSectionProps) {
  const section = siteConfig.teamShowcase;
  const sectionClassName = className ? ` ${className}` : "";
  const sectionTitle = title ?? section.title;
  const sectionHighlight = highlight ?? section.highlight;
  const sectionDescription = description ?? section.description;
  const headerGridClassName = showViewAll
    ? "mt-3 grid gap-5 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)_auto] md:items-center"
    : "mt-3 grid gap-5 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:items-center";

  return (
    <section className={`relative left-1/2 right-1/2 -mx-[50vw] w-screen ${backgroundClassName}${sectionClassName}`}>
      <div className="mx-auto w-full max-w-[76rem] px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        <motion.header
          className="border-b border-white/10 pb-8"
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

          <div className={headerGridClassName}>
            <h2 className="min-w-0 text-[33px] font-bold leading-tight text-white">
              {sectionTitle} <span className="text-brand">{sectionHighlight}</span>
            </h2>

            <p className="text-[14px]">
              {sectionDescription}
            </p>

            {showViewAll ? (
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
        </motion.header>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {section.members.map((member, index) => (
            <motion.article
              key={member.imageSrc}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-secondary/60"
              initial="hidden"
              whileInView="visible"
              viewport={motionViewport}
              variants={revealUpVariants}
              transition={revealUpTransition(0.08 + index * 0.08)}
            >
              <div className="relative aspect-[5/7] w-full overflow-hidden sm:aspect-[4/5]">
                <Image
                  src={member.imageSrc}
                  alt={member.imageAlt}
                  fill
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
