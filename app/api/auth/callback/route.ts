import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'
import type { Database } from '@/lib/database.types'

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  console.log('🟩 request code:', code)

  if (code) {
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient<Database>({
      cookies: () => cookieStore,
    })
    const response = await supabase.auth.exchangeCodeForSession(code)
    console.log('🟩 response:', response)
  }

  // URL to redirect to after sign in process completes
  console.log('🟩 request url - origin: ', requestUrl.origin)
  return NextResponse.redirect(`${requestUrl.origin}`)
}
