import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

import type { Database } from '@/lib/database.types'
import SignUpForm from '@/components/auth/signup-form'

export const dynamic = 'force-dynamic'

export default async function SignUpPage() {
  const supabase = createServerComponentClient<Database>({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session) redirect('/')

  return <SignUpForm />
}
