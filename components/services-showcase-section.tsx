import Image from "next/image";
import Link from "next/link";

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
  const section = siteConfig.servicesShowcase;
  const sectionClassName = className ? ` ${className}` : "";
  const cardsSpacingClassName = showHeader ? "mt-9" : "mt-0";

  return (
    <section className={`relative left-1/2 right-1/2 -mx-[50vw] w-screen ${backgroundClassName}${sectionClassName}`}>
      <div className="mx-auto w-full max-w-[76rem] px-5 py-10 sm:px-8 sm:py-13 lg:px-10 lg:py-20">
        {showHeader ? (
          <header className="border-b border-white/10 pb-8">
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

        <div className={`${cardsSpacingClassName} grid gap-x-7 gap-y-15 md:grid-cols-2 lg:grid-cols-3`}>
          {siteConfig.services.map((service) => (
            <article
              key={service.id}
              className="rounded-2xl border border-white/10 bg-secondary px-5 py-6"
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