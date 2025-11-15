'use client'
import { motion } from 'framer-motion'
import CodeRain from './CodeRain'

interface HeroSectionProps {
  y: number
  sectionRefs: React.RefObject<HTMLDivElement | null>[]
}

export default function HeroSection({ y, sectionRefs }: HeroSectionProps) {
  const smoothScrollTo = (targetY: number, duration: number) => {
    return new Promise<void>((resolve) => {
      const startY = window.scrollY
      const distance = targetY - startY
      let startTime: number | null = null
      const easeInOutCubic = (t: number) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const elapsed = timestamp - startTime
        const progress = Math.min(elapsed / duration, 1)
        const easedProgress = easeInOutCubic(progress)
        window.scrollTo(0, startY + distance * easedProgress)
        if (progress < 1) requestAnimationFrame(step)
        else resolve()
      }
      requestAnimationFrame(step)
    })
  }

  const slowScroll = (distance: number = 50, duration: number = 2500) => {
    return new Promise<void>((resolve) => {
      const startY = window.scrollY
      let startTime: number | null = null
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const elapsed = timestamp - startTime
        const progress = Math.min(elapsed / duration, 1)
        window.scrollTo(0, startY + distance * progress)
        if (progress < 1) requestAnimationFrame(step)
        else resolve()
      }
      requestAnimationFrame(step)
    })
  }

  const scrollThroughSections = async () => {
    for (const ref of sectionRefs) {
      if (!ref.current) continue
      const top = ref.current.offsetTop
      await smoothScrollTo(top, 2000)
      await slowScroll(ref.current.offsetHeight - window.innerHeight, 12500)
    }
  }

  return (
    <motion.section
      className="relative min-h-[100vh] flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-16 pt-32 overflow-hidden bg-gradient-to-br from-cyan-95 via-teal-95 to-blue-85 shadow-inner shadow-cyan-500/10"
      style={{ y }}
    >
      <CodeRain />

      {/* Heading */}
      <motion.h1
        className="text-5xl sm:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-400 drop-shadow-2xl relative z-10"
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.3, type: 'spring' }}
      >
        Lời Cảm Ơn Từ Học Viên 💖
      </motion.h1>

      {/* Nội dung mô tả */}
         <motion.p
        className="text-lg sm:text-xl max-w-3xl text-cyan-200 opacity-90 leading-relaxed relative z-10 mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        Chúng em biết ơn các thầy cô, mentor và những người đồng hành đã dẫn dắt, truyền cảm hứng và hỗ trợ chúng em trong suốt hành trình học tập. Hãy cùng nhìn lại những kỷ niệm đáng nhớ và thành quả đã đạt được! 🚀
      </motion.p>

      {/* Button dẫn xuống Timeline */}
      <motion.button
        className="mt-4 px-8 py-3 rounded-full bg-cyan-400 text-gray-900 font-semibold hover:bg-cyan-500 transition-colors relative z-10"
        onClick={scrollThroughSections}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Nhìn Lại Hành Trình
      </motion.button>

      {/* Glow background */}
      <div className="absolute w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-cyan-500/20 blur-[150px] rounded-full -z-10"></div>
    </motion.section>
  )
}
