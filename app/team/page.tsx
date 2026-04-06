import { TeamGridSection } from "./_components";

export const metadata = {
  title: "Our Team",
};

export default function TeamPage() {
  return (
    <div className="page-container py-14 sm:py-20">
      <TeamGridSection />
    </div>
  );
}
