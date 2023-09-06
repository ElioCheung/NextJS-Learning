import { headers } from 'next/headers'

export default function HeadersPage() {
  const list = headers()

  return (
    <main>
      <h1>This is Headers Page</h1>
      <p>x-hello-from-middleware1: {list.get('x-hello-from-middleware1')}</p>
      <p>x-hello-from-middleware2: {list.get('x-hello-from-middleware2')}</p>
    </main>
  )
}