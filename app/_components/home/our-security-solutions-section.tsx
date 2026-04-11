import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

type HomeSecuritySolutionsSectionProps = {
    className?: string;
};

const cardLayoutClassNames = ["", "md:col-span-2 lg:col-span-2", "", "", ""];
const cardImageHeightClassName = "h-[170px] sm:h-[185px] lg:h-[195px]";

export function HomeSecuritySolutionsSection({ className }: HomeSecuritySolutionsSectionProps) {
    const section = siteConfig.homeSecuritySolutions;
    const sectionClassName = className ? ` ${className}` : "";

    return (
        <section className={`relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-primary${sectionClassName}`}>
            <div className="mx-auto w-full max-w-[76rem] px-5 py-10 sm:px-8 sm:py-13 lg:px-10 lg:py-20">
                <header className="border-b border-white/10 pb-7">
                    <p className="flex items-center gap-2 text-sm font-medium text-slate-200">
                        <span className="h-2 w-2 rounded-full bg-brand" aria-hidden />
                        {section.eyebrow}
                    </p>

                    <div className="mt-3 grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_auto] md:items-center lg:gap-8">
                        <h2 className="min-w-0 text-[20px] font-bold leading-tight text-white sm:text-[30px]">
                            {section.title} <span className="text-brand">{section.highlight}</span>
                        </h2>

                        <p className="min-w-0 text-sm text-slate-300 md:max-w-[24rem] md:justify-self-end">
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

                <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {section.cards.map((card, index) => (
                        <article
                            key={card.title}
                            className={`rounded-2xl border border-white/10 bg-secondary px-3 pb-4 pt-3 ${cardLayoutClassNames[index] ?? ""}`}
                        >
                            <div className="group">
                                <div className="relative">
                                    <div className={`relative overflow-hidden rounded-xl border border-white/10 ${cardImageHeightClassName}`}>
                                        <Image
                                            src={card.imageSrc}
                                            alt={card.imageAlt}
                                            fill
                                            sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
                                            className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.01]"
                                        />
                                    </div>

                                    <Link
                                        href={card.href}
                                        aria-label={`Open ${card.title}`}
                                        className="absolute bottom-2 right-3 inline-flex h-[52px] w-[52px] items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
                                    >
                                        <Image src={section.actionIcon} alt="" width={52} height={52} className="h-[52px] w-[52px]" />
                                    </Link>
                                </div>

                                 <div className="mt-5">
                                    <h3 className="text-[21px] font-bold text-brand">{card.title}</h3>
                                    <p className="mt-2 text-[14px]">{card.description}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}