'use client'
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

export default function Home() {

  const { user, isLoading } = useUser()
  console.log(user)

  return (
    <main className='min-h-screen bg-neutral-300 p-2'>
      <h1>NextJs App with using Auth0</h1>
      {isLoading && <p>Loading...</p>}
      {
        !isLoading && !user && (
          <>
            <p className='text-red-500'>You are not logged in.</p>
            <ul className='p-3'>
              <li className='hover:text-blue-600 text-blue-400'>
                <Link href='/api/auth/login'>Login</Link>
              </li>
            </ul>
          </>
        )
      }
      {
        user && (
          <ul className='p-3'>
            <li className='hover:text-blue-600 text-blue-400'>
              <Link href='/user'>User Info</Link>
            </li>
            <li className='hover:text-blue-600 text-blue-400'>
              <Link href='/api/logout'>Logout</Link>
            </li>
          </ul>
        )
      }
    </main>
  )
}
