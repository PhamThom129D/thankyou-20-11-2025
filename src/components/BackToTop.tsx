'use client'
import { motion } from 'framer-motion'

interface BackToTopProps {
  show: boolean
  onClick: () => void
}

export default function BackToTop({ show, onClick }: BackToTopProps) {
  if (!show) return null

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClick}
      className="fixed right-8 bottom-8 bg-cyan-500 text-white p-3 rounded-full shadow-lg"
    >
      ↑
    </motion.button>
  )
}
