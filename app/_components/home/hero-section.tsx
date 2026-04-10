import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function HeroSection() {
  const hero = siteConfig.homeHero;
  const sealRingText = ` ${hero.sealText} • ${hero.sealText} •`;

  return (
    <section className="page-container">
      <div className="bg-black p-5 sm:p-8 lg:p-10">
        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
          <div>
            <p className="text-[15px] font-medium text-slate-100">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-brand align-middle" />
              {hero.eyebrow}
            </p>

            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-[55px]">
              {hero.title}
              <span className="mt-1 block text-brand">{hero.highlight}</span>
            </h1>
          </div>

          <div className="hidden justify-end lg:flex lg:pt-1">
            <div className="hero-seal" aria-hidden>
              <svg viewBox="0 0 180 180" className="hero-seal__svg" role="presentation">
                <defs>
                  <path
                    id="hero-seal-ring"
                    d="M 90,90 m -64,0 a 64,64 0 1,1 128,0 a 64,64 0 1,1 -128,0"
                  />
                </defs>
                <text className="hero-seal__text">
                  <textPath
                    href="#hero-seal-ring"
                    startOffset="0%"
                    textLength="402"
                    lengthAdjust="spacing"
                  >
                    {sealRingText}
                  </textPath>
                </text>
              </svg>
              <span className="hero-seal__center">
                <Image src="/svgs/common/Breadcrumbs_arrow.svg" alt="Arrow" width={70} height={70} />
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="grid grid-cols-3 gap-5">
            {(hero.stats ?? []).map((item) => (
              <div key={item.label}>
                <p className="text-4xl font-semibold leading-none text-white sm:text-5xl">{item.value}</p>
                <p className="mt-3 text-sm font-medium text-slate-200">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="lg:pt-2">
            <p className=" text-[14px] leading-5 text-slate-200">{hero.description}</p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-[1fr_0.34fr]">
          <div className="relative min-h-[280px] overflow-hidden rounded-xl sm:min-h-[330px]">
            <Image
              src={hero.primaryImage}
              alt="Security officers in active deployment"
              fill
              sizes="(max-width: 768px) 100vw, 72vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="relative min-h-[280px] overflow-hidden rounded-xl sm:min-h-[330px]">
            <Image
              src={hero.secondaryImage}
              alt="Professional security guard"
              fill
              sizes="(max-width: 768px) 100vw, 28vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-7 md:hidden">
          <Link href="/contact" className="cta-pill inline-flex items-center gap-2 rounded-full ps-3.5 pe-1.5 py-1.5 text-[15px]">
            <span>{hero.primaryCtaLabel}</span>
            <span className="cta-pill__icon inline-flex size-8 items-center justify-center rounded-full">
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
    </section>
  );
}
