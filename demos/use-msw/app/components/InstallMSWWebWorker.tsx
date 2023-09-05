'use client'

import { useEffect } from 'react'

export default function InstallMSWWebWorker() {
  useEffect(() => {

    if (process.env.NEXT_PUBLIC_MOCK_ENABLE) {
      const { worker } = require('@/mocks/browser/index')
      worker.start({
        onUnhandledRequest: 'bypass',
      })
      console.log('[Mock Info]: start web worker service')
    }
  }, [])
  return null
}