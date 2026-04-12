"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { AnimatedStatValue } from "@/app/_components/home/animated-stat-value";
import { motionViewport, revealUpTransition, revealUpVariants } from "@/lib/motion";
import { siteConfig } from "@/lib/site-config";

type ExperienceStatsSectionProps = {
  className?: string;
  backgroundClassName?: "bg-primary" | "bg-secondary";
};

export function ExperienceStatsSection({
  className,
  backgroundClassName = "bg-secondary",
}: ExperienceStatsSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const hasEnteredViewport = useInView(sectionRef, { once: true, amount: 0.3 });
  const sectionClassName = className ? ` ${className}` : "";

  return (
    <section ref={sectionRef} className={`${backgroundClassName}${sectionClassName}`}>
      <div className="mx-auto w-full max-w-[76rem] px-5 py-4 sm:px-8 sm:py-3 lg:px-10 lg:py-5">
        <div className="grid grid-cols-2 gap-y-6 py-4 sm:py-5 lg:grid-cols-4 lg:gap-y-0">
          {siteConfig.experienceStats.items.map((item, index) => {
            const isEmphasized = item.emphasize;
            const valueColorClass = isEmphasized ? "text-brand" : "text-white";
            const labelColorClass = isEmphasized ? "text-brand" : "text-slate-100";

            return (
              <motion.article
                key={item.label}
                className="text-center"
                initial="hidden"
                whileInView="visible"
                viewport={motionViewport}
                variants={revealUpVariants}
                transition={revealUpTransition(0.08 + index * 0.09)}
              >
                <p className={`text-[36px] font-bold leading-none sm:text-[42px] ${valueColorClass}`}>
                  {hasEnteredViewport ? <AnimatedStatValue value={item.value} delayMs={index * 120} /> : item.value}
                </p>
                <p className={`mt-3 text-[12px] font-semibold tracking-[0.01em] sm:text-[14px] ${labelColorClass}`}>{item.label}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
