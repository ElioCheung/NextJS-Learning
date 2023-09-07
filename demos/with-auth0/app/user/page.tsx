import Image from 'next/image'
import { getSession } from '@auth0/nextjs-auth0';
import Link from 'next/link';

export default async function UserProfile() {
  const session = await getSession()

  if (!session) {
    return (
      <>
        <p className='text-red-500'>You are not logged in.</p>
        <Link href='/api/auth/login' className='hover:text-emerald-600 text-blue-600'>Login</Link>
      </>
    )
  }

  return (
    session && session.user && (
      <div className='min-h-screen flex flex-col items-center justify-center'>
        <Image src={session.user.picture} alt={session.user.name} width={120} height={120} />
        <h2>{session.user.name}</h2>
        <p>{session.user.email}</p>
        <Link href='/api/auth/logout' className='hover:text-emerald-600 text-gray-400'>Logout</Link>
      </div>
    )
  )
}