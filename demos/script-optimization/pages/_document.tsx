'use client'

import Script from 'next/script';

export default function DocumentPage() {
  return (
    <>
      <Script
        src='https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js'
        id='dayjs'
        strategy='beforeInteractive'
        onLoad={(() => console.log('Load DayJs Packake Successfully'))}
        onReady={() => console.log('Dayjs is ready')}
      />
    </>
  )
}