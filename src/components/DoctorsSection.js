import { getDoctors } from "@/lib/data";
import { categories } from "@/lib/data";
import Link from "next/link";
import { Button } from "./ui/button";
import DoctorCard from "./DoctorCard";
import CategoryFilter from "./CategoryFilter";

export default async function DoctorsSection({ isHome = true, specialty = null }) {
  const doctors = await getDoctors();
  
  // Filter doctors by specialty if provided
  const filteredDoctors = specialty
    ? doctors.filter(
        (doctor) => doctor.specialization.toLowerCase() === specialty.toLowerCase()
      )
    : doctors;

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold">
              {isHome ? "Doctors You Need" : "Our Doctors"}
            </h2>
            {isHome && (
              <p className="text-gray-600 mt-2">
                Find the right specialist for your health needs
              </p>
            )}
          </div>
          <div className="flex gap-4 items-center">
            {!isHome && <CategoryFilter categories={categories} />}
            {isHome && (
              <Link href="/doctors">
                <Button variant="outline">View All Doctors</Button>
              </Link>
            )}
          </div>
        </div>

        {isHome && (
          <div className="mb-8 flex gap-2 overflow-x-auto pb-4">
            {categories.slice(0, 6).map((category) => (
              <Link 
                key={category} 
                href={`/doctors?specialty=${category.toLowerCase()}`}
                className="flex-shrink-0"
              >
                <Button variant="outline" className="whitespace-nowrap">
                  {category}
                </Button>
              </Link>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.slice(0, isHome ? 6 : undefined).map((doctor) => (
            <DoctorCard 
              key={doctor._id} 
              doctor={doctor}
              showAppointmentButton={!isHome}
            />
          ))}
        </div>
      </div>
    </section>
  );
}