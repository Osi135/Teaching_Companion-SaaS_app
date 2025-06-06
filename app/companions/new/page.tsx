import CompanionForm from "@/components/CompanionForm"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { newCompanionPermissions } from "@/lib/actions/companion.actions"
import Image from "next/image"
import Link from "next/link"

const NewCompanion = async () => {
  const { userId } = await auth();
  if(!userId) redirect("/sign-in");

  const canCreateCompanion = await newCompanionPermissions();

  return (
    <main className="xl:w-1/3 lg:w-1/2 md:w-2/3 items-center justify-center">
      { canCreateCompanion ? (
        <article className="w-full gap-4 flex flex-col">
          <h1>Companion Builder</h1>
          <CompanionForm />
        </article>
      ) : (
        <article className="companion-limit">
          <Image 
            src="/images/limit.svg"
            alt="Limit Reached"
            width={360}
            height={360}
          />
          <div className="cta-badge">
            Upgrade your plan
          </div>
          <h1>You've Reached Your Limit</h1>
          <p>You've reached your companion limit. Upgrade to create more companions and premium features.</p>
          <Link href="/plans" className="btn-primary w-full justify-center">Upgrade my plan</Link>
        </article>
      )}
    </main>
  )
}

export default NewCompanion