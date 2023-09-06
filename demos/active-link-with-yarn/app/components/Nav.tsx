'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Nav() {
  const pathname = usePathname()

  const isActive = (pn: string) => pn === pathname ? 'text-indigo-500' : 'text-indigo-200'

  return (
    <nav className='p-3'>
      <ul className='bg-orange-50 p-4'>
        <li>
          <Link
            href='/'
            className={isActive('/')}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={isActive('/about')}
            href='/about'
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={isActive('/blog')}
            href='/blog'
          >
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  )
}