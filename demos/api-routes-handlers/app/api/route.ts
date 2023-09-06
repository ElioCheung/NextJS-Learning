import { type NextRequest, NextResponse } from 'next/server';
import { cookies, headers } from 'next/headers';

export async function GET(req: NextRequest) {
  const headersList = headers()
  const referer = headersList.get('referer') || ''

  return  new Response('Hello Nextjs', {
    status: 200
  })
}