"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { motionViewport, revealUpTransition, revealUpVariants } from "@/lib/motion";
import { siteConfig } from "@/lib/site-config";

type HomeSecurityNeedsSectionProps = {
    className?: string;
};

export function HomeSecurityNeedsSection({ className }: HomeSecurityNeedsSectionProps) {
    const section = siteConfig.homeSecurityNeeds;
    const sectionClassName = className ? ` ${className}` : "";

    return (
        <section className={`bg-secondary${sectionClassName}`}>
            <div className="mx-auto w-full max-w-[70rem] pt-25 px-7">
                <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-end">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={motionViewport}
                        variants={revealUpVariants}
                        transition={revealUpTransition()}
                    >
                        <p className="flex items-center gap-2 text-sm font-medium text-white/90">
                            <span className="h-2 w-2 rounded-full bg-brand" aria-hidden />
                            {section.eyebrow}
                        </p>

                        <h2 className="mt-4 text-[32px] font-bold leading-tight text-white">
                            {section.title} <span className="text-brand">{section.highlight}</span> {section.titleSuffix}
                        </h2>

                        <p className="mt-4 text-sm">{section.description}</p>

                        <div className="mt-6 space-y-4">
                            {section.features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    className="flex items-start gap-3"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={motionViewport}
                                    variants={revealUpVariants}
                                    transition={revealUpTransition(0.1 + index * 0.1)}
                                >
                                    <span className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand">
                                        <Image src={feature.icon} alt={feature.iconAlt} width={20} height={20} className="h-11 w-11" />
                                    </span>
                                    <div>
                                        <h3 className="text-[18px] font-bold leading-tight text-brand">{feature.title}</h3>
                                        <p className="mt-1 text-sm">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            className="relative h-[220px] -mt-2 overflow-hidden rounded-2xl sm:h-[260px]"
                            initial="hidden"
                            whileInView="visible"
                            viewport={motionViewport}
                            variants={revealUpVariants}
                            transition={revealUpTransition(0.22)}
                        >
                            <Image
                                src={section.primaryImageSrc}
                                alt={section.primaryImageAlt}
                                fill
                                sizes="(min-width: 1024px) 31vw, (min-width: 640px) 80vw, 100vw"
                                className="object-contain object-bottom"
                            />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="relative h-[360px] self-end overflow-hidden rounded-2xl sm:h-[460px] lg:h-[620px]"
                        initial="hidden"
                        whileInView="visible"
                        viewport={motionViewport}
                        variants={revealUpVariants}
                        transition={revealUpTransition(0.14)}
                    >
                        <Image

                            src={section.secondaryImageSrc}
                            alt={section.secondaryImageAlt}
                            fill
                            sizes="(min-width: 1024px) 45vw, 100vw"
                            className="object-contain object-bottom"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}