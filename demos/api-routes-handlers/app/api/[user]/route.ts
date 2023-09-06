import { NextRequest } from 'next/server';

export async function GET(req: NextRequest, {params}: {params: {user: string}}) {
  return new Response(`Hello, ${params.user}.`, {
    status: 200,
  })
}