import { FaqPreviewSection, HeroSection, ServicesPreviewSection } from "@/app/_components/home";

export default function Home() {
  return (
    <div className="pb-16">
      <HeroSection />
      <ServicesPreviewSection />
      <FaqPreviewSection />
    </div>
  );
}
