import Script from 'next/script';

export default function InlinePage() {
  return (
    <>
      <Script
        id='inline-script'
        dangerouslySetInnerHTML={{
          __html: `console.log('Inlie Script')`
        }}
      />
      <h1>Script Inline Page</h1>
    </>
  )
}