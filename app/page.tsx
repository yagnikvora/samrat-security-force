import { AboutShowcaseSection } from "@/components/about-showcase-section";
import { ServicesShowcaseSection } from "@/components/services-showcase-section";
import { FaqPreviewSection, HeroSection } from "@/app/_components/home";

export default function Home() {
  return (
    <div className="pb-16">
      <HeroSection />
      <AboutShowcaseSection className="mt-20" />
      <ServicesShowcaseSection className="mt-15" />
      <FaqPreviewSection />
    </div>
  );
}
