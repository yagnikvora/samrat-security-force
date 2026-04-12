"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { motionViewport, revealUpTransition, revealUpVariants } from "@/lib/motion";
import { siteConfig } from "@/lib/site-config";

type SharedFaqSectionProps = {
  className?: string;
  backgroundClassName?: "bg-primary" | "bg-secondary";
};

export function SharedFaqSection({ className, backgroundClassName = "bg-primary" }: SharedFaqSectionProps) {
  const content = siteConfig.sharedFaqSection;
  const items = siteConfig.faqs.slice(0, 5);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionClassName = className ? ` ${className}` : "";

  return (
    <section className={`relative left-1/2 right-1/2 -mx-[50vw] w-screen ${backgroundClassName}${sectionClassName}`}>
      <div className="mx-auto w-full max-w-[76rem] px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-20">
        <div className="grid items-start gap-9 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.28fr)] lg:gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={motionViewport}
            variants={revealUpVariants}
            transition={revealUpTransition()}
          >
            <p className="flex items-center gap-2 text-sm font-medium text-slate-200">
              <span className="h-2 w-2 rounded-full bg-brand" aria-hidden />
              {content.eyebrow}
            </p>

            <h2 className="mt-4 max-w-[25rem] text-[35px] font-bold leading-[1.12] text-white">
              {content.title} <span className="text-brand">{content.highlight}</span>
            </h2>

            <p className="mt-4 max-w-[26rem] text-base">{content.description}</p>

            <motion.aside
              className="mt-8 max-w-[30rem] rounded-2xl border border-white/10 bg-gradient-to-br from-[#1c1c1f] via-[#17171a] to-[#121215] p-6 shadow-[0_16px_34px_rgba(0,0,0,0.3)]"
              initial="hidden"
              whileInView="visible"
              viewport={motionViewport}
              variants={revealUpVariants}
              transition={revealUpTransition(0.1)}
            >
              <h3 className="text-[25px] font-semibold leading-tight text-brand">{content.cardTitle}</h3>
              <p className="mt-2 text-base">{content.cardDescription}</p>

              <Link
                href={content.cardButtonHref}
                className="cta-pill mt-6 inline-flex items-center gap-3 rounded-full ps-7 pe-1.5 py-1.5 text-sm font-medium"
              >
                <span>{content.cardButtonLabel}</span>
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
            </motion.aside>
          </motion.div>

          <motion.div
            className="space-y-3"
            initial="hidden"
            whileInView="visible"
            viewport={motionViewport}
            variants={revealUpVariants}
            transition={revealUpTransition(0.1)}
          >
            {items.map((item, index) => {
              const isOpen = index === activeIndex;

              return (
                <motion.div
                  key={item.question}
                  initial="hidden"
                  whileInView="visible"
                  viewport={motionViewport}
                  variants={revealUpVariants}
                  transition={revealUpTransition(0.18 + index * 0.08)}
                >
                  <article className="rounded-xl border border-white/10 bg-gradient-to-r from-[#1f1f22] to-[#17171a] shadow-[0_8px_20px_rgba(0,0,0,0.24)]">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                      aria-expanded={isOpen}
                      onClick={() => setActiveIndex(isOpen ? -1 : index)}
                    >
                      <span className={`text-[18px] font-semibold leading-7 ${isOpen ? "text-brand" : "text-white"}`}>
                        {item.question}
                      </span>
                      <span className={`shrink-0 text-white transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                        <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </button>
                  </article>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-3 py-2 text-base">{item.answer}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}