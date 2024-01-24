'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

import { Database } from '@/lib/database.types'
import { useRouter } from 'next/navigation'
import { LogOut } from 'lucide-react'

export default function SignOutButton() {
  const router = useRouter()
  const supabase = createClientComponentClient<Database>()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }
  return (
    <div role="button" onClick={handleSignOut} className="flex items-center">
      <LogOut className="h-4 w-4 mr-1" />
      Signout
    </div>
  )
}
