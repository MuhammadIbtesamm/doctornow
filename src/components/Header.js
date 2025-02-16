"use client"

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Button } from "@/components/ui/button"
import { signOut, useSession } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Header() {
  const { data: session } = useSession()
  const router = useRouter()

  const handleNavigation = (path) => {
    router.push(path)
  }

  const handleSignOut = async () => {
    await signOut({
      callbackUrl: "/signin",
    })
  }

  return (
    <header className="bg-secondary py-3">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <h1 onClick={() => handleNavigation("/")} className="cursor-pointer font-mono text-xl font-bold">
            DoctorNow
          </h1>
        </div>

        {session ? (
          <Menubar className="border-none bg-transparent">
            <MenubarMenu>
              <MenubarTrigger className="cursor-pointer focus:bg-transparent data-[state=open]:bg-transparent">
                <Image
                  src={session.user?.image || "/default-avatar.png"}
                  alt="User profile"
                  height={40}
                  width={40}
                  className="rounded-full"
                />
              </MenubarTrigger>
              <MenubarContent align="end" className="min-w-[200px]">
                <MenubarItem onSelect={() => handleNavigation("/profile")}>Profile</MenubarItem>
                <MenubarSeparator />
                <MenubarItem onSelect={() => handleNavigation("/appointments")}>My Appointments</MenubarItem>
                <MenubarSeparator />
                <MenubarItem onSelect={handleSignOut}>Logout</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        ) : (
          <Button variant="outline" className="hover:bg-secondary" onClick={() => handleNavigation("/signin")}>
            Sign in
          </Button>
        )}
      </div>
    </header>
  )
}

