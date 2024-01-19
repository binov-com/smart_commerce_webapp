'use server'

import { cookies } from 'next/headers'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'

import { Database } from '@/lib/database.types'

interface IUserInput {
  email: string
  password: string
  firstName: string
  lastName: string
}

interface IUserOutput {
  userId: string
}

export const actionAddUser = async (
  _user: IUserInput
): Promise<IUserOutput | null> => {
  const supabase = createServerActionClient<Database>({ cookies })

  const {
    data: { user },
    error,
  } = await supabase.auth.signUp({
    email: _user.email,
    password: _user.password,
    options: {
      emailRedirectTo: `${process.env.SITE_URL}/sign-in?verified=true`,
      data: {
        firstName: _user.firstName,
        lastName: _user.lastName,
      },
    },
  })

  if (error) {
    console.log('🟥 [auth - signup] error:', error)
    return null
  }

  if (!user) {
    console.log('🟥 [auth - signup] error: user is null')
    return null
  }

  console.log('🟩 [auth - signup] success: user created')
  return { userId: user.id }
}

export const actionConfirmSignupUser = async (code: string) => {
  const supabase = createServerActionClient<Database>({ cookies })
}
