import { UserButton } from '@clerk/nextjs'

const AdminHomePage = () => {
  return (
    <div>
      <h1>Protected</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}

export default AdminHomePage
