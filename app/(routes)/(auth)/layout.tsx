import type { Metadata } from 'next'
import '@/app/globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Authentication | Smart Commerce for Franchises',
  description: 'Authentication',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-screen flex justify-center p-8 md:p-0 md:items-center">
      <div className="mx-auto flex-col lg:max-w-lg">{children}</div>
    </div>
  )
}
