'use client'
import { motion, AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'

interface HeaderProps {
  isShrunk: boolean
  onScrollTo: (ref: React.RefObject<HTMLDivElement | null>) => void
  scrollToTop: () => void
  timelineRef: React.RefObject<HTMLDivElement | null>
  thankYouRef: React.RefObject<HTMLDivElement | null>
  galleryRef: React.RefObject<HTMLDivElement | null>
}

export default function Header({
  isShrunk,
  onScrollTo,
  scrollToTop,
  timelineRef,
  thankYouRef,
  galleryRef,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleScroll = (ref: React.RefObject<HTMLDivElement | null>) => {
    onScrollTo(ref)
    setMenuOpen(false) // đóng menu mobile sau khi click
  }

  return (
    <motion.header
      animate={{
        height: isShrunk ? 60 : 120,
        backgroundColor: isShrunk
          ? 'rgba(17, 24, 39, 0.55)'
          : 'rgba(17, 24, 39, 0.35)',
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-10 border-b border-cyan-300/40 shadow-lg backdrop-blur-xl"
    >
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        className="flex items-center gap-4 cursor-pointer"
        onClick={scrollToTop}
      >
        <img
          src="/codegym-logo.jpeg"
          className={`${isShrunk ? 'h-10 w-10' : 'h-14 w-14'} rounded-xl border-2 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all duration-300 px-1`}
        />
        <h1
          className="font-bold text-transparent bg-clip-text hidden sm:block"
          style={{
            backgroundImage: 'linear-gradient(90deg,#06b6d4,#8b5cf6,#f97316)',
          }}
        >
          CodeJourney
        </h1>
      </motion.div>

      {/* Navigation Desktop */}
      <nav className="hidden md:flex gap-8 text-lg font-semibold">
        <motion.button
          whileHover={{ scale: 1.1 }}
          style={{ color: '#06b6d4' }}
          onClick={() => handleScroll(timelineRef)}
        >
          Lộ Trình
        </motion.button>
      
        <motion.button
          whileHover={{ scale: 1.1 }}
          style={{ color: '#a855f7' }}
          onClick={() => handleScroll(galleryRef)}
        >
          Album
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          style={{ color: '#f97316' }}
          onClick={() => handleScroll(thankYouRef)}
        >
          Cảm Ơn
        </motion.button>
      </nav>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="relative w-8 h-6 flex flex-col justify-between items-center cursor-pointer z-50"
        >
          <span
            className={`block h-0.5 w-full bg-white rounded transition-transform duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-white rounded transition-opacity duration-300 ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-white rounded transition-transform duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 mt-2 w-40 bg-gray-900/95 backdrop-blur-lg rounded-lg shadow-lg flex flex-col p-4 gap-3 z-40"
            >
              <button
                onClick={() => handleScroll(timelineRef)}
                className="text-cyan-400 font-semibold text-left"
              >
                Lộ Trình
              </button>
              <button
                onClick={() => handleScroll(thankYouRef)}
                className="text-orange-500 font-semibold text-left"
              >
                Cảm Ơn
              </button>
              <button
                onClick={() => handleScroll(galleryRef)}
                className="text-purple-500 font-semibold text-left"
              >
                Album
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
