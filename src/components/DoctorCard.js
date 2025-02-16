"use client";

import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import DoctorDetailSheet from "./DoctorDetailSheet";

const DoctorCard = ({ doctor, showAppointmentButton = false }) => {
  if (!doctor) return null;

  return (
    <Card className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-4">
        <div className="relative w-20 h-20">
          <DoctorDetailSheet doctor={doctor}>
            <Image
              src={doctor.image || "/default-avatar.png"}
              alt={`Dr. ${doctor.firstname} ${doctor.lastname}`}
              width={80}
              height={80}
              className="rounded-full object-cover cursor-pointer"
              priority
            />
          </DoctorDetailSheet>
        </div>
        <div>
          <DoctorDetailSheet doctor={doctor}>
            <div className="cursor-pointer">
              <h3 className="text-xl font-semibold">
                Dr. {doctor.firstname} {doctor.lastname}
              </h3>
              <p className="text-gray-600">{doctor.specialization}</p>
            </div>
          </DoctorDetailSheet>
        </div>
      </div>

      <CardContent className="mt-4 space-y-2 px-0">
        <p className="text-gray-700">
          <span className="font-medium">Experience:</span> {doctor.experience} years
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Consultation Fee:</span> ${doctor.consultationFee}
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Hospital:</span> {doctor.hospital}
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Available Time:</span> {doctor.appointmentTime}
        </p>
      </CardContent>

      <CardFooter className="px-0 pt-4">
        <Link href={`/doctors/${doctor.id}`} className="w-full">
          <Button className="w-full">
            {showAppointmentButton ? "Book Appointment" : "View Profile"}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default DoctorCard;