import GithubCorner from '@/components/github-corner/GithubCorner'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Route Interception',
  description: 'Author: Elio',
}

export default function RootLayout(props: { children: React.ReactNode, modal: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <GithubCorner />
        {props.children}
        {props.modal}
      </body>
    </html>
  )
}
