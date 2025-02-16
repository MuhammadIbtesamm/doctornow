import { getDoctors } from "@/lib/data";
import DoctorsSection from "@/components/DoctorsSection";
import Header from "@/components/Header";

export default async function DoctorsPage({ searchParams }) {
  const specialty = searchParams.specialty || null;

  return (
    <div>
      <Header />
      <DoctorsSection isHome={false} specialty={specialty} />
    </div>
  );
}