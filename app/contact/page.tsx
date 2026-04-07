import Link from "next/link";
import Image from "next/image";
import { ContactLayoutSection } from "./_components";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: siteConfig.contactPage.metadataTitle,
};

export default function ContactPage() {
  const contactPage = siteConfig.contactPage;

  return (
    <>
      <section className="border-b border-white/5 bg-black py-16 sm:py-20 lg:py-24">
        <div className="page-container text-center">
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">{contactPage.heroTitle}</h1>
          <div className="mt-5 inline-flex items-center gap-2 text-sm text-slate-300">
            <Link href={contactPage.breadcrumbHomeHref} className="transition hover:text-white">
              {contactPage.breadcrumbHome}
            </Link>
            <Image src="/svgs/common/Breadcrumbs_arrow.svg" alt="breadcrumb" width={20} height={20} className="h-5 w-5" />
            <span className="text-white">{contactPage.breadcrumbCurrent}</span>
          </div>
        </div>
      </section>

      <ContactLayoutSection />
    </>
  );
}
