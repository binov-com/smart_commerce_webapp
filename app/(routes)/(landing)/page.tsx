import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'

const AdminHomePage = () => {
  return (
    <div>
      <h1>Unprotected</h1>
      <div>
        <Link href="/admin">
          <Button>Login</Button>
        </Link>
      </div>
    </div>
  )
}

export default AdminHomePage
