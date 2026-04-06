import { AboutIntroSection, AboutStatsSection } from "./_components";

export const metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <div className="page-container py-14 sm:py-20">
      <AboutIntroSection />
      <AboutStatsSection />
    </div>
  );
}
