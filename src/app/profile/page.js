import { auth, signOut } from "../../../auth"
import { redirect } from "next/navigation"
import Image from "next/image"
import Header from "@/components/Header"
import { Button } from "@/components/ui/button"
import DoctorApplicationForm from "@/components/DoctorApplicationForm"

export default async function ProfilePage() {
  const session = await auth()

  if(session) redirect('/')
    

  return (
    <div className="min-h-screen bg-gray-100">
      <Header 
        title="Profile" 
        description="Manage your personal information" 
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="p-8 border-b border-gray-200 flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <Image 
                src={session.user.image || '/default-avatar.png'}
                alt={session.user.name || 'User Profile'}
                width={120}
                height={120}
                className="rounded-full border-4 border-gray-200 object-cover"
              />
              <div>
                <h1 className="text-3xl font-bold text-gray-800">{session.user.name}</h1>
                <p className="text-lg text-gray-500 mt-2">{session.user.email}</p>
              </div>
            </div>
            <form
                  action={async () => {
                    "use server";
                    await signOut("google");
                  }}
                >
                 <Button variant={"outline"}> LogOut</Button>
                </form>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Personal Details</h2>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <span className="font-medium">Full Name:</span> {session.user.name}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Email:</span> {session.user.email}
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Account Settings</h2>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <span className="font-medium">Joined:</span> {new Date().toLocaleDateString()}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Last Login:</span> {new Date().toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {session?.user?.role !== "doctor" && (
        <div className="container mx-auto py-8">
          <h2 className="text-xl font-semibold mb-4">Apply as Doctor</h2>
          <DoctorApplicationForm />
        </div>
      )}
    </div>
  )
}