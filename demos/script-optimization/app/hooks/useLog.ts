import { useCallback, useEffect, useState } from 'react'

interface Log {
  time: Date
  text: string
}

export default function useLog(tag: string): [Log[], { addLog: (text: string) => void }] {
  const [log, setLog] = useState<Log[]>([])

  const addLog = useCallback(
    (text: string) => {
      setLog(log => log.concat({
        text: `[Log ${tag}]: ${text}`,
        time: new Date(),
      }))
    },
    [tag, setLog]
  )

  return [log, { addLog }]
}