"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { motionViewport, revealUpTransition, revealUpVariants } from "@/lib/motion";
import { siteConfig } from "@/lib/site-config";

type HomeSecuritySolutionsSectionProps = {
    className?: string;
};

/**
 * Top row  – card 0 ≈ 1/3, card 1 ≈ 2/3  (2 + 4 = 6)
 * Bottom row – three equal cards           (2 + 2 + 2 = 6)
 */
const cardGridClassName: Record<number, string> = {
    0: "lg:col-span-2",
    1: "lg:col-span-4",
    2: "lg:col-span-2",
    3: "lg:col-span-2",
    4: "lg:col-span-2",
};

function getImageSizes(index: number) {
    if (index === 0) return "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw";
    if (index === 1) return "(min-width: 1024px) 66vw, (min-width: 768px) 50vw, 100vw";
    return "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw";
}

export function HomeSecuritySolutionsSection({ className }: HomeSecuritySolutionsSectionProps) {
    const section = siteConfig.homeSecuritySolutions;
    const sectionClassName = className ? ` ${className}` : "";

    return (
        <section className={`relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-primary${sectionClassName}`}>
            <div className="w-full px-5 py-10 sm:px-8 sm:py-13 lg:px-12 lg:py-20">
                <div className="mx-auto w-full max-w-[70rem]">
                    <motion.header
                        className="border-b border-white/10 pb-7"
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

                        <div className="mt-3 grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_auto] md:items-center lg:gap-8">
                            <h2 className="min-w-0 text-[35px] font-bold leading-tight text-white">
                                {section.title} <span className="text-brand">{section.highlight}</span>
                            </h2>

                            <p className="min-w-0 text-sm md:max-w-[24rem] md:justify-self-end">
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
                    </motion.header>

                    <motion.div
                        className="mt-6 grid gap-3.5 md:grid-cols-2 lg:grid-cols-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={motionViewport}
                        variants={revealUpVariants}
                        transition={revealUpTransition(0.12)}
                    >
                        {section.cards.map((card, index) => (
                            <motion.article
                                key={card.title}
                                className={`rounded-2xl border border-white/10 bg-secondary p-2.5 pb-4 md:col-span-1 ${cardGridClassName[index] ?? ""} ${card.cardClassName ?? ""}`}
                                initial="hidden"
                                whileInView="visible"
                                viewport={motionViewport}
                                variants={revealUpVariants}
                                transition={revealUpTransition(0.18 + index * 0.09)}
                            >
                                <div className="group">
                                    <div className={`solution-card-img relative h-[180px]`}>
                                        <Image
                                            src={card.imageSrc}
                                            alt={card.imageAlt}
                                            fill
                                            sizes={getImageSizes(index)}
                                            className={`transition-transform duration-300 group-hover:scale-[1.02] ${card.imageClassName ?? "object-cover object-center"}`}
                                        />
                                        <span className="solution-card-icon-curve" aria-hidden />
                                        <Link
                                            href={card.href}
                                            aria-label={`Open ${card.title}`}
                                            className="solution-card-icon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
                                        >
                                            <Image src={section.actionIcon} alt="" width={52} height={52} className="h-[50px] w-[50px]" />
                                        </Link>
                                    </div>

                                    <div className="mt-3.5 px-1">
                                        <h3 className="text-[22px] font-bold leading-[1.15] text-brand">{card.title}</h3>
                                        <p className="mt-1.5 text-[13px] leading-relaxed">{card.description}</p>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}