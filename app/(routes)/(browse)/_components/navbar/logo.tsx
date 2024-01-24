import Link from 'next/link'
import Image from 'next/image'

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-4 hover:opacity-70 transition">
        <div className="p-1 mr-12 shrink-0 lg:mr-0 lg:shrink">
          <Image
            src="/smartcommerce-logo.svg"
            alt="SmartCommerce"
            height="35"
            width="0"
            priority
            className="w-auto"
          />
        </div>
      </div>
    </Link>
  )
}
