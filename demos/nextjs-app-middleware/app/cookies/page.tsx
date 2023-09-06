import { cookies } from 'next/headers'

export default function CookiesPage() {
  const list = cookies()

  const nextjs = list.get('nextjs')

  return (
    <>
      <h1>This is Cookies Page</h1>
      {
        nextjs && <code>{JSON.stringify(nextjs, null, 2)}</code>
      }
    </>
  )
}