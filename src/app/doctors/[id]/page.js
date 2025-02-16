import { getDoctorById } from "@/lib/data";
import { auth } from "../../../../auth";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function DoctorPage({ params }) {
  const doctor = await getDoctorById(params.id);
  const session = await auth();

  if (!doctor) {
    return <div className="container mx-auto py-8">Doctor not found</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center space-x-6">
          <div className="relative w-[120px] h-[120px]">
            <Image
              src={doctor.picture || "/default-avatar.png"}
              alt={`Dr. ${doctor.firstname} ${doctor.lastname}`}
              width={120}
              height={120}
              className="rounded-full object-cover"
              priority
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold">
              Dr. {doctor.firstname} {doctor.lastname}
            </h1>
            <p className="text-xl text-gray-600">{doctor.specialization}</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">About</h2>
            <p className="text-gray-700">{doctor.about || "No information available"}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Details</h2>
            <ul className="space-y-2">
              <li>Experience: {doctor.experience} years</li>
              <li>Consultation Fee: ${doctor.consultationFee}</li>
              <li>Available Days: {doctor.availableDays?.join(", ") || "Not specified"}</li>
            </ul>
          </div>
        </div>

        {session ? (
          <Link href={`/book-appointment/${doctor._id}`}>
            <Button className="mt-8">Book Appointment</Button>
          </Link>
        ) : (
          <Link href="/signin">
            <Button className="mt-8">Sign in to Book Appointment</Button>
          </Link>
        )}
      </div>
    </div>
  );
}