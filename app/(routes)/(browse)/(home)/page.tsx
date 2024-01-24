import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

import SignOutButton from '@/components/auth/signout-button'

import { Navbar } from '../_components/navbar'

export const dynamic = 'force-dynamic'

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
      <Navbar />
      <SignOutButton />
    </div>
  )
}
