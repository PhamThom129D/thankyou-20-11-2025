'use client'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'

const messages = [
  "Cảm ơn thầy/cô đã dẫn dắt và truyền cảm hứng trong suốt hành trình học tập! 🌟",
  "Nhờ mentor, mỗi bug đều trở thành bài học quý giá. Chúng em biết ơn! 🐛❤️",
  "Cảm ơn thầy/cô đã biến những giờ code căng thẳng thành trải nghiệm vui vẻ và bổ ích! 💻✨",
  "Ngày 20/11: Lời chúc mừng sinh nhật thầy/cô, và lời cảm ơn từ trái tim học trò! 🎉",
]

export default function ThankYou() {
  const numHearts = 10 // ít tim hơn

  return (
    <motion.div
      id="thank-you"
      className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-cyan-180 via-teal-160 to-blue-160 relative overflow-hidden"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, type: 'spring' }}
    >
      {/* ==== Background code rain ==== */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 35 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-teal-400/50 font-mono text-sm"
            initial={{ y: -50, x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000) }}
            animate={{ y: [ -50, typeof window !== 'undefined' ? window.innerHeight + 50 : 500 ] }}
            transition={{ duration: 6 + Math.random() * 4, repeat: Infinity, ease: 'linear', delay: i * 0.5 }}
          >
            {['console.log("Hello");','if(true){','const x = 42;','function foo() {}','let y=x*2;','{}','[]','()','// comment'][i % 9]}
          </motion.div>
        ))}
      </div>

      {/* ==== Main card ==== */}
      <motion.div
        className="bg-white/80 backdrop-blur-lg p-12 rounded-3xl shadow-2xl border border-cyan-200 max-w-6xl w-full text-center relative z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        whileHover={{ boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}
      >
  

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          animate={{ scale: [1, 1.05, 1], rotate: [0, 2, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-500 to-blue-600 drop-shadow-lg font-mono"
        >
          Lời Cảm Ơn Từ Trái Tim Code 💖
        </motion.h2>

        <div className="space-y-6 relative">
      


          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.5, type: 'spring' }}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(6, 182, 212, 0.1)' }}
              className="text-xl font-medium text-teal-700 bg-cyan-50 p-6 rounded-xl shadow-md transition-all relative z-10"
            >
              <Typewriter
                words={[msg]}
                loop={false}
                cursor
                cursorStyle="✨"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
