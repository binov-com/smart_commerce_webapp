import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

import type { Database } from '@/lib/database.types'
import SignInForm from '@/app/(routes)/(auth)/_components/signin-form'

interface Props {
  searchParams: {
    verified?: boolean
  }
}

export default async function SignInPage({
  searchParams: { verified },
}: Props) {
  const supabase = createServerComponentClient<Database>({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session) redirect('/')

  return (
    <>
      <SignInForm isVerified={verified} />
    </>
  )
}
