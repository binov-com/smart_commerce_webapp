import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'

export default function InformationCard({ email }: { email: string }) {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl text-center">
          Confirm your signup ✅
        </CardTitle>
        <CardDescription className="text-center">
          Please check your email for the confirmation link
        </CardDescription>
      </CardHeader>
      <CardContent className="text-xl">
        An email with a verification code was just sent to <b>{email}</b>.
      </CardContent>
      <CardFooter className="flex flex-col">
        <p className="mt-2 text-xs text-center text-gray-700">
          {' '}
          Please free to{' '}
          <Link
            href="/sign-in"
            className="text-blue-600 font-medium hover:underline"
          >
            sign in
          </Link>{' '}
          once you have confirmed your email.{' '}
        </p>
      </CardFooter>
    </Card>
  )
}
