
import { auth, signIn } from "../../../auth";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
 
export default  async function SignIn() {
    const session = await auth();
    if(session) redirect('/')
  return (
    <form className="flex justify-center text-center mx-auto container mt-9"
      action={async () => { 
        "use server"
        await signIn("google")
      }}
    >
        
        <Button> Signin with Google</Button>
    </form>
  )
} 