import type { Metadata } from 'next'
import '@/app/globals.css'
import { Toaster } from '@/components/ui/sonner'

export const metadata: Metadata = {
  title: 'Smart Commerce for Franchises',
  description: 'Created by Binov company',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        {children}
        <Toaster richColors position="bottom-center" />
      </body>
    </html>
  )
}
