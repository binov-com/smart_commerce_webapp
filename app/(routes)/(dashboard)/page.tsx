import { cookies } from 'next/headers'

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

import { redirect, useRouter } from 'next/navigation'

const DashboardPage = async () => {
  const router = useRouter()
  const supabase = createServerComponentClient({ cookies })

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect('/sign-in')
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
    </div>
  )
}

export default DashboardPage
