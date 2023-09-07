'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

const UERNAME = 'elio'
const PASSWORD = '123456'

export async function login(data: FormData) {
  const username = data.get('username')
  const password = data.get('password')

  // 模拟等待
  await new Promise((r) => setTimeout(r, 4000))

  if (username === UERNAME && password === PASSWORD) {
    // 实际可能会与DB建立链接或者与其他API交互
    revalidatePath('/')
    redirect('/home')
  }

  redirect('/forbidden')
}