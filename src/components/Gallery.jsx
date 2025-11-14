'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

const images = [
  { src: '/images/project1.jpg', caption: 'Dự án đầu tiên: Hello World App! 🚀' },
  { src: '/images/project2.jpg', caption: 'Hackathon thắng cuộc với mentor bên cạnh 🏆' },
  { src: '/images/project3.jpg', caption: 'Kỷ niệm ngày debug suốt đêm ☕' },
]

export default function Gallery() {
  const [selected, setSelected] = useState(null)

  return (
    <div id="gallery" className="max-w-6xl mx-auto py-16 px-4 bg-gradient-to-br from-cyan-100 via-teal-100 to-blue-100 relative overflow-hidden">
      {/* Background code snippets */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="text-4xl text-cyan-600 font-mono absolute top-10 left-10">{`const gallery = [`}</div>
        <div className="text-3xl text-teal-600 font-mono absolute bottom-20 right-20">{`'memories', 'code' ];`}</div>
        <div className="text-5xl text-blue-600 font-mono absolute top-1/2 left-1/4">{`// Gallery`}</div>
      </div>
      
      {/* Floating code symbols */}
      <div className="absolute inset-0 pointer-events-none">
        {['<>', '{}', '//', '()', '[]'].map((symbol, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-500 text-2xl font-mono"
            initial={{ y: '100vh', x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000) }}
            animate={{ y: '-10vh', rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, delay: i * 1.2, ease: 'linear' }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>
      
      <motion.h2
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, type: 'spring' }}
        className="text-3xl font-bold text-center mb-12 text-cyan-700 font-mono relative z-10"
      >
        Kỷ Niệm Code Journey 📸
      </motion.h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative z-10">
        {images.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50, rotate: -15, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.3, type: 'spring', stiffness: 150 }}
            whileHover={{ scale: 1.1, rotate: 5, boxShadow: '0 20px 40px rgba(6, 182, 212, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            className="overflow-hidden rounded-3xl shadow-lg cursor-pointer relative group border-2 border-cyan-200"
            onClick={() => setSelected(item)}
          >
            <img src={item.src} alt={item.caption} className="w-full h-52 object-cover rounded-3xl transition-transform group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
              <p className="text-white text-center px-4 font-semibold text-shadow-lg">{item.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Modal for selected image */}
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl max-h-4xl"
          >
            <img src={selected.src} alt={selected.caption} className="w-full h-auto rounded-3xl shadow-2xl" />
            <p className="absolute bottom-4 left-4 text-white text-xl font-bold bg-cyan-500/70 px-4 py-2 rounded-lg">{selected.caption}</p>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}