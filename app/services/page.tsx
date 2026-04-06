import { ServicesFaqSection, ServicesGridSection } from "./_components";

export const metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <div className="page-container py-14 sm:py-20">
      <ServicesGridSection />
      <ServicesFaqSection />
    </div>
  );
}
