import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { Menu, Receipt, User, Users } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { Database } from '@/lib/database.types'
import SignOutButton from '@/components/auth/signout-button'

export const Actions = async () => {
  const supabase = createServerComponentClient<Database>({ cookies })
  const authenticatedUser = await supabase.auth.getUser()

  if (!authenticatedUser) redirect('/sign-in')

  const {
    data: { user },
  } = authenticatedUser

  return (
    <div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
      {!!user && (
        <div className="flex items-center gap-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center p-2 rounded-lg text-white/70 hover:text-primary hover:bg-white transition">
              <Menu className="h-5 w-5 lg:mr-2" />
              <span className="hidden lg:block">Menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mr-2">
              <DropdownMenuLabel>
                <div className="flex items-center gap-x-2">
                  <User className="h-7 w-7" />
                  <div className="flex flex-col">
                    <span>
                      {user?.user_metadata?.firstName}{' '}
                      {user?.user_metadata?.lastName}
                    </span>
                    <span className="text-xs font-normal">{user?.email}</span>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Receipt className="h-4 w-4 mr-1" />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Users className="h-4 w-4 mr-1" />
                Team
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <SignOutButton />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* <UserButton afterSignOutUrl="/" /> */}
        </div>
      )}
    </div>
  )
}
