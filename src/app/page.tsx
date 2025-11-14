'use client'
import { useRef, useEffect, useState, useMemo } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Timeline from '../components/Timeline'
import ThankYou from '../components/ThankYou'
import Gallery from '../components/Gallery'

export default function HomePage() {
  const timelineRef = useRef(null)
  const thankYouRef = useRef(null)
  const galleryRef = useRef(null)
  const skillsRef = useRef(null)
  const [showScrollTop, setShowScrollTop] = useState(false)

  const floatingSymbolsList = ['<>', '{}', '//', '()', '[]', 'function', 'const']

  // Khởi tạo positions với giá trị mặc định an toàn để tránh hydration mismatch
  const [floatingPositions, setFloatingPositions] = useState(
    floatingSymbolsList.map(() => ({ x: 0, y: 0 })) // Default: top-left
  )
  const [particlePositions, setParticlePositions] = useState(
    Array.from({ length: 10 }).map(() => ({ x: 0, y: 0 })) // Giảm từ 20 xuống 10 cho performance
  )

  // Sử dụng useMemo để tránh re-compute
  const memoizedFloatingPositions = useMemo(() => floatingPositions, [floatingPositions])
  const memoizedParticlePositions = useMemo(() => particlePositions, [particlePositions])

  // Khởi tạo random positions sau khi component mount
  useEffect(() => {
    setFloatingPositions(
      floatingSymbolsList.map(() => ({
        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
        y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
      }))
    )
    setParticlePositions(
      Array.from({ length: 10 }).map(() => ({
        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
        y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
      }))
    )
  }, [])

  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, -100]) // Parallax cho hero

  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const handleScrollTop = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScrollTop)
    return () => window.removeEventListener('scroll', handleScrollTop)
  }, [])

  return (
    <div className="text-gray-800 min-h-screen bg-gradient-to-br from-blue-100 via-cyan-100 to-teal-100 font-mono relative overflow-x-hidden">
      {/* Floating code symbols */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {memoizedFloatingPositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-400 text-lg opacity-20"
            initial={{ y: pos.y, x: pos.x }}
            animate={{ y: [pos.y, pos.y - 50, pos.y], x: [pos.x, pos.x + 20, pos.x] }}
            transition={{ duration: 10 + i, repeat: Infinity, ease: 'easeInOut' }}
          >
            {floatingSymbolsList[i]}
          </motion.div>
        ))}
      </div>

      {/* Header / Navigation */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-center space-x-8 py-6 bg-white/40 backdrop-blur-lg sticky top-0 z-50 shadow-xl border-b border-cyan-200"
      >
        <motion.img
          src="/logo.png"
          alt="CodeGym Logo"
          className="h-20 w-32 border-2" // Sửa w-30 thành w-32
          whileHover={{ scale: 1.1, rotate: 5 }}
        />
        <motion.button
          whileHover={{ scale: 1.1, color: '#06b6d4', textShadow: '0 0 10px #06b6d4' }}
          onClick={() => handleScroll(timelineRef)}
          className="hover:text-cyan-500 font-semibold transition text-lg"
          aria-label="Scroll to Timeline section"
        >
          Timeline
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1, color: '#f97316', textShadow: '0 0 10px #f97316' }}
          onClick={() => handleScroll(thankYouRef)}
          className="hover:text-orange-500 font-semibold transition text-lg"
          aria-label="Scroll to Thank You section"
        >
          Thank You
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1, color: '#a855f7', textShadow: '0 0 10px #a855f7' }}
          onClick={() => handleScroll(galleryRef)}
          className="hover:text-purple-500 font-semibold transition text-lg"
          aria-label="Scroll to Gallery section"
        >
          Gallery
        </motion.button>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        className="flex flex-col items-center justify-center text-center min-h-[70vh] px-4 bg-gradient-to-br from-blue-500 via-cyan-400 to-teal-300 relative z-10"
        style={{ y }}
      >
        {/* Animated particles */}
        <div className="absolute inset-0">
          {memoizedParticlePositions.map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-white rounded-full opacity-30"
              initial={{ x: pos.x, y: pos.y }}
              animate={{ y: [pos.y, pos.y - 20, pos.y], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>

        <motion.img
          src="/codegym-logo.jpeg" // Thống nhất logo nếu cần
          alt="CodeGym Logo"
          className="h-20 mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, type: 'spring' }}
        />
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-6xl font-bold mb-4 text-white drop-shadow-lg"
        >
          Code Journey: Cảm Ơn Mentor! 🚀
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-xl max-w-2xl text-white mb-8"
        >
          Khám phá hành trình lập trình tại CodeGym, với kỹ năng, kỷ niệm, và lời cảm ơn sâu sắc. Ngày 20/11 – tri ân những người thầy!
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1, boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleScroll(timelineRef)}
          className="bg-white text-cyan-700 px-8 py-3 rounded-full font-semibold shadow-lg"
          aria-label="Start the journey by scrolling to Timeline"
        >
          Bắt Đầu Hành Trình
        </motion.button>
      </motion.section>

      {/* Sections */}
      <motion.div
        ref={timelineRef}
        initial={{ rotateY: 90, opacity: 0 }}
        whileInView={{ rotateY: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Timeline />
      </motion.div>

      <motion.div
        ref={thankYouRef}
        initial={{ rotateY: 90, opacity: 0 }}
        whileInView={{ rotateY: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <ThankYou />
      </motion.div>

      <motion.div
        ref={galleryRef}
        initial={{ rotateY: 90, opacity: 0 }}
        whileInView={{ rotateY: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Gallery />
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-8 text-center text-sm text-gray-700/80 bg-white/40 backdrop-blur-lg relative z-10"
      >
        <p>© 2025 – Code Journey: Website Cảm Ơn Mentor | Powered by CodeGym</p>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            onClick={scrollToTop}
            className="absolute right-8 bottom-8 bg-cyan-500 text-white p-3 rounded-full shadow-lg"
            aria-label="Scroll to top"
          >
            ↑
          </motion.button>
        )}
      </motion.footer>
    </div>
  )
}