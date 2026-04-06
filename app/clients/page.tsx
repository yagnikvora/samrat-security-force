import { ClientsGridSection } from "./_components";

export const metadata = {
  title: "Our Clients",
};

export default function ClientsPage() {
  return (
    <div className="page-container py-14 sm:py-20">
      <ClientsGridSection />
    </div>
  );
}
