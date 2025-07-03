"use client"

import { useEffect, useState } from "react"

interface CounterProps {
  to: number
  from?: number
  duration?: number
}

export default function Counter({ to, from = 0, duration = 1000 }: CounterProps) {
  const [count, setCount] = useState<number>(from)

  useEffect(() => {
    const start = performance.now()

    function update(timestamp: number) {
      const progress = Math.min((timestamp - start) / duration, 1);
      const value = Math.floor(progress * (to - from) + from)
      setCount(value)

      if (progress < 1) {
        requestAnimationFrame(update)
      }
    }
    
    requestAnimationFrame(update)
  }, [from, to, duration])

  return (
    <span>{count.toLocaleString()}</span>
  )
}