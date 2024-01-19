import { cookies } from 'next/headers'

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

import { redirect } from 'next/navigation'
import SignOutButton from '@/app/(routes)/(auth)/_components/signout-button'

export default async function DashboardPage() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect('/sign-in')
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <SignOutButton />
    </div>
  )
}
