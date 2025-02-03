import { auth, signIn } from "../../../auth"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"

export default async function SignIn() {
    const session = await auth()
    if(session) redirect('/')

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign in to your account
                    </h2>
                </div>
                <form 
                    className="mt-8 space-y-6"
                    action={async () => { 
                        'use server'
                        await signIn("google")
                    }}
                >
                    <div>
                        <Button 
                            type="submit" 
                            className="w-full"
                        >
                            Sign in with Google
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}