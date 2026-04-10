import Image from "next/image";
import Link from "next/link";
import type { BreadcrumbItem } from "@/lib/site-config";

type PageHeroProps = {
  title: string;
  breadcrumbs: BreadcrumbItem[];
};

export function PageHero({ title, breadcrumbs }: PageHeroProps) {
  return (
    <section className="bg-primary py-10 sm:py-12 lg:py-14">
      <div className="page-container text-center">
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">{title}</h1>
        <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-2 text-sm text-slate-300">
          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1;

            return (
              <div key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
                {isLast ? (
                  <span className="text-white">{item.label}</span>
                ) : item.href ? (
                  <Link href={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                ) : (
                  <span>{item.label}</span>
                )}

                {!isLast ? (
                  <Image
                    src="/svgs/common/Breadcrumbs_arrow.svg"
                    alt="breadcrumb"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
