"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const DoctorDetailSheet = ({ children, doctor }) => {
  if (!doctor) return null;

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Doctor Details</SheetTitle>
          <SheetDescription>
            <div className="space-y-4">
              <Avatar className="w-24 h-24 mx-auto">
                <AvatarImage 
                  src={doctor.image || "/default-avatar.png"} 
                  alt={`${doctor.firstname} ${doctor.lastname}`} 
                />
                <AvatarFallback>
                  {doctor.firstname?.[0]}{doctor.lastname?.[0]}
                </AvatarFallback>
              </Avatar>
              <h1 className="font-bold text-2xl text-center">
                Dr. {doctor.firstname} {doctor.lastname}
              </h1>
            </div>
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-2">Specialization</h2>
            <p className="text-gray-600">{doctor.specialization}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Experience</h2>
            <p className="text-gray-600">{doctor.experience} years</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Hospital</h2>
            <p className="text-gray-600">{doctor.hospital}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Consultation Fee</h2>
            <p className="text-gray-600">${doctor.consultationFee}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Available Time</h2>
            <p className="text-gray-600">{doctor.appointmentTime}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Available Days</h2>
            <p className="text-gray-600">
              {doctor.availableDays?.join(", ") || "Not specified"}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">About</h2>
            <p className="text-gray-600">{doctor.about || "No information available"}</p>
          </div>

          <Link href={`/doctors/${doctor._id}`} className="block">
            <Button className="w-full">View Full Profile</Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default DoctorDetailSheet;