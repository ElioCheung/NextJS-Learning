'use client'

import Script from 'next/script'
import useLog from '../hooks/useLog'
import { useEffect } from 'react'


export default function LazyLoadPage() {
  const [log, { addLog }] = useLog('Lazy')

  useEffect(() => {
    addLog(`Page loaded window.FB is undefined`)
  }, [addLog])

  return (
    <>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          addLog(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>Lazy Load Page</h1>
      <ul>
        {log.map(({ time, text }) => (
          <li key={+time}>
            {time.toISOString()}: {text}
          </li>
        ))}
      </ul>
    </>
  )
}