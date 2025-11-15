// src/components/Gallery.jsx
'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

const images = [
  { src: '/image1.jpg', caption: 'Phiên chợ ngày tết' },
  { src: '/image2.jpg', caption: 'Year and Party' },
  { src: '/image3.jpg', caption: 'Teambuilding bùng nổ' },
  { src: '/image4.jpg', caption: 'Tổng kết học kỳ II' },
  { src: '/image5.jpg', caption: 'Thăm quan doanh nghiệp ' },
  { src: '/image6.jpg', caption: 'Chào đón tân sinh viên K15' },
  { src: '/image7.jpg', caption: 'Chào mừng ngày nhà giáo VN' },
  { src: '/image8.jpg', caption: 'Teambuiding cùng nhau' },
  { src: '/image9.jpg', caption: 'Cuộc thi thời trang tái chế ' },
  { src: '/image10.jpg', caption: 'Chúc mừng sinh nhật người thầy đáng kính' },
  { src: '/image11.jpg', caption: 'Trao giải esport LQ' },
  { src: '/image12.jpg', caption: 'Chia sẻ định hướng tương lai' },
]

export default function Gallery() {
  const [selected, setSelected] = useState(null)

  return (
<div
  id="gallery"
  className="w-full py-16 px-16 bg-gradient-to-br from-cyan-195 via-teal-180 to-blue-180 relative overflow-hidden"
>

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
  Album Kỷ Niệm Code Journey 📸
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative z-10">
        {images.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50, rotate: -15, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.3, type: 'spring' }}
            whileHover={{ scale: 1.1, rotate: 5, boxShadow: '0 20px 40px rgba(6, 182, 212, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            className="overflow-hidden rounded-3xl shadow-lg cursor-pointer relative group border-2 border-cyan-200"
            onClick={() => setSelected(item)}
          >
            <img
              src={item.src}
              alt={item.caption}
              className="w-full h-52 object-cover rounded-3xl transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
              <p className="text-white text-center px-4 font-semibold">{item.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-4xl max-h-4xl"
          >
            <img src={selected.src} alt={selected.caption} className="w-full h-auto rounded-3xl shadow-2xl" />
            <p className="absolute bottom-4 left-4 text-white text-xl font-bold bg-cyan-500/70 px-4 py-2 rounded-lg">
              {selected.caption}
            </p>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
