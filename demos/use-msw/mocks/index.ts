export async function start() {
  if (typeof window === 'undefined') {
    const { server } = await import('./server')
    console.log('[Mock Server Info]: start node server')
    server.listen({
      onUnhandledRequest: 'bypass',
    })
  } else {
    const { worker } = await import('./browser')
    worker.start({
      onUnhandledRequest: 'bypass',
    })
    console.log('[Mock Server Info]: start web worker')
  }
}

start()