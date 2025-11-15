'use client'
import { motion } from 'framer-motion'
import { useMemo } from 'react'

interface Stream {
  x: number
  duration: number
  delay: number
  char: string
}

export default function CodeRain() {
  // Tạo mảng streams 1 lần duy nhất
  const streams: Stream[] = useMemo(() => {
    const chars = '01<>/=+{}'
    return Array.from({ length: 35 }).map(() => ({
      x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
      duration: 4 + Math.random() * 5,
      delay: Math.random() * 5,
      char: chars[Math.floor(Math.random() * chars.length)],
    }))
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {streams.map((stream, i) => (
        <motion.div
          key={i}
          className="absolute text-green-300 font-mono text-lg opacity-30"
          initial={{ x: stream.x, y: -150 }}
          animate={{ y: typeof window !== 'undefined' ? window.innerHeight + 200 : 500 }}
          transition={{ duration: stream.duration, repeat: Infinity, delay: stream.delay, ease: 'linear' }}
        >
          {stream.char}
        </motion.div>
      ))}
    </div>
  )
}
