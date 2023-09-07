'use client'

import { experimental_useFormStatus as useFormStatus } from 'react-dom'

export default function SubmitButton() {

  const { pending } = useFormStatus()

  return (
    <input
      className='w-full  hover:bg-violet-100 borde rounded-full px-4 py-2 mr-4 border-0 bg-violet-50 text-violet-700'
      type='submit'
      disabled={pending}
      value={pending ? '登录...' : '登录'}
    />
  )
}