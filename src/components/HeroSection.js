import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link"; 
import { auth, signIn } from "../../auth";
import SignIn from "@/app/signin/page";

 export default async function HeroSection() {
 
   const session = await auth();
  return (
    <section className="text-gray-600 my-10 body-font">
      <div className="container mx-auto flex  md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-3/4  md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="font-semibold sm:text-2xl text-xl mb-4 text-gray-900">
            DOCTOR APPOINTMENT SYSTEM
          </h1>
          <p className="mb-8 leading-relaxed">
            Book your doctor appointment or Apply as a Doctor in just a few clicks!
             With DoctorNow,
            connecting to qualified medical professionals has never been easier.
            Whether you need a routine checkup or specialized care, find the
            right doctor and schedule your visit instantly. Say goodbye to long
            waits and complicated bookings—get the care you need, when you need
            it.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="outline">Find Doctor You Need</Button>
            <Link href={ session ? "/doctors/apply" : "/signin"}>
            <Button>Apply as a Doctor</Button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-end">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            height={400}
            width={400}
            src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D"
          />
        </div>
      </div>
    </section>
  );
}
