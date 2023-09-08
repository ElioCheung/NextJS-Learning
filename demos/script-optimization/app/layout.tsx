import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Script Optimization',
  description: 'Author by Elio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='min-h-screen flex flex-col'>
          <ul className='w-full flex p-2 bg-gray-200 rounded-lg'>
            <li className='text-blue-400 hover:text-blue-600 px-5 border-gray-500 border-r-2'>
              <Link href='/'>Home</Link>
            </li>
            <li className='text-blue-400 hover:text-blue-600 px-5 border-gray-500 border-r-2'>
              <Link href='/before'>Before Load Page</Link>
            </li>
            <li className='text-blue-400 hover:text-blue-600 px-5 border-gray-500 border-r-2'>
              <Link href='/lazy'>Lazy Load Page</Link>
            </li>
            <li className='text-blue-400 hover:text-blue-600 px-5 border-gray-500 border-r-2'>
              <Link href='/after'>After Load Page</Link>
            </li>
            <li className='text-blue-400 hover:text-blue-600 px-5 border-gray-500 border-r-2'>
              <Link href='/inline'>Inline Load Page</Link>
            </li>
          </ul>
          <div className='flex-1'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
