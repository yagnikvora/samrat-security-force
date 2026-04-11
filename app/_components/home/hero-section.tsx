import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import styles from "./hero-section.module.css";
import { AnimatedStatValue } from "./animated-stat-value";

export function HeroSection() {
  const hero = siteConfig.homeHero;
  const sealRingText = ` ${hero.sealText} • ${hero.sealText} •`;

  return (
    <section className="page-container">
      <div className="bg-black p-4 sm:p-8 lg:p-10">
        <div className="grid gap-5 sm:gap-6 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
          <div className="text-center lg:text-left">
            <p className={`${styles.enter} ${styles.enter1} text-[15px] font-medium text-slate-100`}>
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-brand align-middle" />
              {hero.eyebrow}
            </p>

            <h1 className={`${styles.enter} ${styles.enter2} ${styles.title} mt-4 text-[2.1rem] font-bold leading-[1.05] text-white sm:text-5xl lg:text-[55px]`}>
              {hero.title}
              <span className="mt-1 block text-brand">{hero.highlight}</span>
            </h1>

            <div className={`${styles.enter} ${styles.enter3} mt-5 flex justify-center lg:hidden`} aria-hidden>
              <div className="relative inline-block h-[130px] w-[130px]">
                <svg viewBox="0 0 180 180" className="hero-seal__svg" role="presentation">
                  <defs>
                    <path
                      id="hero-seal-ring-mobile"
                      d="M 90,90 m -64,0 a 64,64 0 1,1 128,0 a 64,64 0 1,1 -128,0"
                    />
                  </defs>
                  <text className="hero-seal__text">
                    <textPath
                      href="#hero-seal-ring-mobile"
                      startOffset="0%"
                      textLength="402"
                      lengthAdjust="spacing"
                    >
                      {sealRingText}
                    </textPath>
                  </text>
                </svg>
                <span className="hero-seal__center">
                  <Image src="/svgs/common/Breadcrumbs_arrow.svg" alt="Arrow" width={52} height={52} />
                </span>
              </div>
            </div>
          </div>

          <div className={`${styles.enter} ${styles.enter4} hidden justify-end lg:flex lg:pt-1`}>
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

        <div className="mt-6 grid gap-7 sm:mt-8 sm:gap-10 lg:grid-cols-2 lg:items-start">
          <div className={`${styles.enter} ${styles.enter5} hidden grid-cols-3 gap-5 lg:grid`}>
            {(hero.stats ?? []).map((item, index) => (
              <div key={item.label}>
                <p className="text-4xl font-semibold leading-none text-white sm:text-5xl">
                  <AnimatedStatValue value={item.value} delayMs={index * 120} />
                </p>
                <p className="mt-3 text-sm font-medium text-slate-200">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="lg:pt-2">
            <p className={`${styles.enter} ${styles.enter6} text-center text-[14px] leading-5 text-slate-200 lg:text-left`}>{hero.description}</p>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-4 lg:grid-cols-[1fr_0.34fr]">
          <div className={`${styles.enter} ${styles.enter7} ${styles.imageReveal} relative hidden min-h-[330px] overflow-hidden rounded-xl lg:block`}>
            <Image
              src={hero.primaryImage}
              alt="Security officers in active deployment"
              fill
              sizes="(max-width: 768px) 100vw, 72vw"
              className="object-cover object-center"
              priority
            />
          </div>

          <div className={`${styles.enter} ${styles.enter8} ${styles.imageReveal} relative aspect-[16/10] overflow-hidden rounded-xl lg:min-h-[330px] lg:aspect-auto`}>
            <Image
              src={hero.secondaryImage}
              alt="Professional security guard"
              fill
              sizes="(max-width: 768px) 100vw, 28vw"
              className="object-cover object-top sm:object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
