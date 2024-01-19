'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

import { Database } from '@/lib/database.types'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function SignOutButton() {
  const router = useRouter()
  const supabase = createClientComponentClient<Database>()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }
  return <Button onClick={handleSignOut}>Sign out</Button>
}
