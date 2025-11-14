'use client'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'

const messages = [
  "Cảm ơn thầy/cô đã biến những dòng code thành phép màu! ✨",
  "Nhờ mentor, em không còn sợ bug nữa – giờ là bạn bè rồi! 🐛❤️",
  "Thầy/cô là ánh sáng dẫn lối trong mê cung lập trình. Cảm ơn vô hạn! 🌟",
  "Ngày 20/11: Lời chúc mừng sinh nhật thầy/cô, và lời cảm ơn từ trái tim học trò! 🎉",
]

export default function ThankYou() {
  return (
    <motion.div
      id="thank-you"
      className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-cyan-200 via-teal-200 to-blue-200 relative overflow-hidden"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, type: 'spring' }}
    >
      {/* Background pattern with code snippets */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="text-6xl text-cyan-600 font-mono absolute top-10 left-10">console.log('Thank You!');</div>
        <div className="text-4xl text-teal-600 font-mono absolute bottom-20 right-20">{`{ mentor: 'Awesome' }`}</div>
        <div className="text-5xl text-blue-600 font-mono absolute top-1/2 left-1/4">// CodeGym Rocks!</div>
      </div>
      
      {/* Floating code symbols animation */}
      <div className="absolute inset-0 pointer-events-none">
        {['<>', '{}', '//', '()', '[]'].map((symbol, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-500 text-3xl font-mono"
            initial={{ y: '100vh', x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000) }}
            animate={{ y: '-10vh', rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, delay: i * 1.5, ease: 'linear' }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>
      
      {/* Main card */}
      <motion.div
        className="bg-white/80 backdrop-blur-lg p-12 rounded-3xl shadow-2xl border border-cyan-300 max-w-4xl w-full text-center relative z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        whileHover={{ boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
      >
        {/* Icon */}
        <motion.div
          className="text-6xl mb-6"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: 'spring' }}
        >
          💻❤️
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: 'spring' }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-4xl font-bold mb-8 text-cyan-800 font-mono"
        >
          Lời Cảm Ơn Từ Trái Tim Code 💖
        </motion.h2>

        <div className="space-y-6">
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.5, type: 'spring' }}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(6, 182, 212, 0.1)' }}
              className="text-xl font-medium text-teal-700 bg-cyan-50 p-6 rounded-xl shadow-md transition-all"
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