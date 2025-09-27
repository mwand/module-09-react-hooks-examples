import * as React from 'react'
import { useEffect, useState } from 'react'

export default function App() {
  const [now, setNow] = useState(Date.now())
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])
  return <div>useEffect demo: {new Date(now).toLocaleTimeString()}</div>
}
