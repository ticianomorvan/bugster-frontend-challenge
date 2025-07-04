"use client"

import { useEffect, useState } from "react"

interface CounterProps {
  to: number
  from?: number
  duration?: number
}

/**
 * This component is used to animate a count up animation.
 * It will animate the count from the `from` value to the
 * `to` value, and will take `duration` milliseconds to do so.
 */
export default function Counter({ to, from = 0, duration = 1000 }: CounterProps) {
  const [count, setCount] = useState<number>(from)

  useEffect(() => {
    let animationFrameId: number = 0

    const start = performance.now()

    function update(timestamp: number) {
      const progress = Math.min((timestamp - start) / duration, 1);
      const value = Math.floor(progress * (to - from) + from)
      setCount(value)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(update)
      }
    }
    
    animationFrameId = requestAnimationFrame(update)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [from, to, duration])

  return (
    <span>{count.toLocaleString()}</span>
  )
}