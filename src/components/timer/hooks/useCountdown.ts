import { useCallback, useEffect, useState } from 'react'

export const useCountdown = (
  seconds: number,
  onElapsedHandler: VoidFunction
) => {
  const [time, setTime] = useState(seconds * 1000)
  const [isRunning, setIsRunning] = useState(false)
  const [intervalId, setIntervalId] = useState<number | undefined>()

  useEffect(() => {
    if (isRunning) {
      const tickTime = 100
      const id = setInterval(() => {
        setTime((prev) => prev - tickTime / 2)
      }, tickTime)
      setIntervalId(id)
    } else {
      clearInterval(intervalId)
    }

    return () => {
      clearInterval(intervalId)
    }
  }, [isRunning, time])

  const start = () => {
    setIsRunning(true)
  }

  const stop = () => {
    setIsRunning(false)
  }

  const reset = () => {
    setTime(seconds * 1000)
    setIsRunning(false)
  }

  useEffect(() => {
    if (time <= 0) {
      stop()
      onElapsedHandler()
    }
  }, [time, onElapsedHandler])

  return {
    time,
    start,
    stop,
    reset,
  }
}
