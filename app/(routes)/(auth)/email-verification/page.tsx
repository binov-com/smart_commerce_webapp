import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

import type { Database } from '@/lib/database.types'
import InformationCard from './_components/information-card'

interface Props {
  searchParams: { email: string }
}

export default async function EmailVerificationPage({
  searchParams: { email },
}: Props) {
  const supabase = createServerComponentClient<Database>({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session) redirect('/')

  return <InformationCard email={email} />
}
