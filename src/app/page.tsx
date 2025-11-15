'use client'
import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import Timeline from '../components/Timeline'
import ThankYou from '../components/ThankYou'
import Gallery from '../components/Gallery'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import BackToTop from '@/components/BackToTop'
import Footer from '@/components/Footer'

export default function HomePage() {
  const timelineRef = useRef<HTMLDivElement | null>(null)
  const thankYouRef = useRef<HTMLDivElement | null>(null)
  const galleryRef = useRef<HTMLDivElement | null>(null)
  const footerRef = useRef<HTMLDivElement | null>(null) // <--- Thêm Footer ref

  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isShrunk, setIsShrunk] = useState(false)

  // spotlight / ánh sáng theo chuột
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect()
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  // scroll effects parallax
  const { scrollY, scrollYProgress } = useScroll()
  const heroY = useTransform(scrollY, [0, 500], [0, -100])
  const timelineY = useTransform(scrollY, [0, 1000], [0, -50])
  const thankYouY = useTransform(scrollY, [0, 1200], [0, -30])
  const galleryY = useTransform(scrollY, [0, 1400], [0, -20])
  const footerY = useTransform(scrollY, [0, 1600], [0, -10])

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    ['#0f172a', '#0f172a', '#1e1b4b', '#2e1065']
  )

  // check scroll top & header shrink
  useEffect(() => {
    const onScroll = () => {
      setIsShrunk(window.scrollY > 40)
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const handleScrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.div
      className="text-gray-200 min-h-screen font-mono relative overflow-x-hidden"
      style={{ backgroundColor }}
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight / ánh sáng theo chuột full-page */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background: `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.12), transparent 80%)`,
          transition: 'background 0.05s',
        }}
      />

      <Header
        isShrunk={isShrunk}
        onScrollTo={handleScrollTo}
        scrollToTop={scrollToTop}
        timelineRef={timelineRef}
        thankYouRef={thankYouRef}
        galleryRef={galleryRef}
      />

      {/* Hero Section */}
      <HeroSection
        y={heroY.get()}
        sectionRefs={[timelineRef,  galleryRef,thankYouRef, footerRef]}
      />

      {/* Timeline Section */}
      <motion.div
        ref={timelineRef}
        style={{ y: timelineY }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Timeline />
      </motion.div>

         {/* Gallery Section */}
      <motion.div
        ref={galleryRef}
        style={{ y: galleryY }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Gallery />
      </motion.div>

      {/* ThankYou Section */}
      <motion.div
        ref={thankYouRef}
        style={{ y: thankYouY }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <ThankYou />
      </motion.div>

   

      {/* Footer Section */}
      <motion.div ref={footerRef} style={{ y: footerY }}>
        <Footer />
      </motion.div>

      {/* Back to top button */}
      <BackToTop show={showScrollTop} onClick={scrollToTop} />
    </motion.div>
  )
}
