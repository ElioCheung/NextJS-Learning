import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import InstallMSWWebWorker from './components/InstallMSWWebWorker'

if (process.env.NEXT_RUNTIME === 'nodejs' && process.env.NEXT_PUBLIC_MOCK_ENABLE) {
  const { server } = require('@/mocks/server')
  server.listen({
    onUnhandledRequest: 'bypass',
  })
  console.log('[Mock Info]: node server start')
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next App with using MSW',
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
        {children}
        <InstallMSWWebWorker />
      </body>
    </html>
  )
}
