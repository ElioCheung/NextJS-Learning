'use client'
import Script from 'next/script';
import useLog from '../hooks/useLog';
import { useEffect } from 'react';

export default function AfterPage() {
  const [log, { addLog }] = useLog('After Load')

  useEffect(() => {
    addLog('Page loaded window.moment is undefined')
  }, [addLog])

  return (
    <>
      <Script
        src='https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js'
        strategy='afterInteractive'
        onLoad={() => {
          addLog('script loaded correctly, window.moment has been populated')
        }}
      />
      <h1>After Page</h1>
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