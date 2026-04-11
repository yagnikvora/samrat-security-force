import { FaqPreviewSection, HeroSection, ServicesPreviewSection } from "@/app/_components/home";
import { AboutShowcaseSection } from "@/components/about-showcase-section";

export default function Home() {
  return (
    <div className="pb-16">
      <HeroSection />
      <AboutShowcaseSection className="mt-20" />
      <ServicesPreviewSection />
      <FaqPreviewSection />
    </div>
  );
}
