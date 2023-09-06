import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';

export async function GET(_req: NextRequest) {
  redirect('https://nextjs.org')
}