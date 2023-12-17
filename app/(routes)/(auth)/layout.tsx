import type { Metadata } from 'next'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: 'Authentication | Smart Commerce for Franchises',
  description: 'Created by Binov company',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-full items-center justify-center">{children}</div>
  )
}
