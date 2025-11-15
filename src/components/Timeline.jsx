'use client'
import { motion } from 'framer-motion'
import { useRef } from 'react'

const timelineData = [
  { year: '09-2023', text: 'Bắt đầu khóa học Web Developer: Làm quen HTML, CSS, JavaScript cơ bản 🌱', icon: '🚀' },
  { year: '11-2023', text: 'Học OOP và MySQL cơ bản: Lập trình hướng đối tượng và quản lý dữ liệu 🛠️', icon: '💡' },
  { year: '02-2024', text: 'JavaFX + Servlet + JSP: Xây dựng ứng dụng desktop & web cơ bản 🖥️', icon: '🖌️' },
  { year: '05-2024', text: 'Java Spring: Xây dựng backend dự án E-commerce "Sàn thương mại Trưa nay ăn gì" ⚡', icon: '🏗️' },
  { year: '10-2024', text: 'Spring Boot + Security + JWT + React: Tích hợp Frontend & Backend cho dự án thương mại điện tử 🎯', icon: '🚀' },
  { year: '07-2025', text: 'Nâng cao React: React Router, Form, Context, Redux 🌀', icon: '⚡' },
  { year: '08-2025', text: 'Triển khai dự án: Backend Spring Boot + Frontend React + API + JWT bảo mật 🔐', icon: '🎉' },
  { year: '11-2024', text: 'Project thực tế: Hệ thống hỗ trợ phòng khám da liễu 💻 (đang phát triển)', icon: '🏥' },
]

export default function Timeline() {
  const audioRef = useRef(null)

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play()
    }
  }

  const stopSound = () => {
    if (audioRef.current) audioRef.current.pause()
  }

  const rainLines = [
    'console.log("Hello");',
    'if (true) {',
    'const x = 42;',
    'function foo() {}',
    'let y = x * 2;',
    '{}', '[]', '()', '// comment'
  ]

  return (
    <div id="timeline" className="w-full mx-auto py-16 px-32 bg-gradient-to-br from-cyan-180 via-teal-180 to-blue-160 relative overflow-hidden">
      <audio ref={audioRef} src="/sounds/hover.mp3" preload="auto" />

      {/* ==== CODE RAIN LAYER ==== */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 35 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-teal-400/50 font-mono text-sm"
            initial={{ y: -50, x: Math.random() * window.innerWidth }}
            animate={{ y: [ -50, window.innerHeight + 50 ] }}
            transition={{ duration: 6 + Math.random() * 4, repeat: Infinity, ease: 'linear', delay: i * 0.5 }}
          >
            {rainLines[i % rainLines.length]}
          </motion.div>
        ))}
      </div>

      {/* Background code snippets với parallax nhẹ */}
      <motion.div
        className="absolute inset-0 opacity-10 pointer-events-none"
        initial={{ y: 0 }}
        whileInView={{ y: -20 }}
        transition={{ duration: 2 }}
      >
        <div className="text-4xl text-cyan-600 font-mono absolute top-10 left-10">const journey = </div>

      </motion.div>

      {/* Parallax effect với glow */}
      <motion.div
        className="absolute inset-0 bg-fixed opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle, #213d42ff 1px, transparent 1px)', backgroundSize: '20px 20px' }}
        initial={{ y: 0 }}
        whileInView={{ y: -30 }}
        transition={{ duration: 3 }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-400 text-sm opacity-20"
            initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
            animate={{ y: [0, -100, 0], x: [0, 20, 0] }}
            transition={{ duration: 8 + i, repeat: Infinity, ease: 'easeInOut' }}
          >
            {['{}', '()', '[]'][i % 3]}
          </motion.div>
        ))}
      </div>

      <motion.h2
        initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, type: 'spring' }}
        className="text-3xl font-bold text-center mb-12 text-cyan-700 font-mono relative z-10"
      >
        Nhìn Lại Hành Trình Code 🖥️
      </motion.h2>

      <div className="space-y-12 relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-2 bg-gradient-to-b from-cyan-400 to-teal-400 h-full rounded-full shadow-lg shadow-cyan-400/50"></div>

        {timelineData.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -300 : 300, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: i * 0.4, type: 'spring', stiffness: 100 }}
            whileHover={{ 
              scale: 1.05, 
              rotate: i % 2 === 0 ? 2 : -2, 
              boxShadow: '0 20px 40px rgba(6, 182, 212, 0.4)' 
            }}
            onHoverStart={playSound}
            onHoverEnd={stopSound}
            className={`p-6 bg-white/80 backdrop-blur-lg rounded-3xl shadow-lg flex items-center space-x-6 relative z-10 border border-teal-200 ${i % 2 === 0 ? 'ml-auto mr-8' : 'mr-auto ml-8'} max-w-lg`}
          >
            <motion.div
              className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 text-white flex items-center justify-center text-2xl font-bold"
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.5, type: 'spring' }}
            >
              {item.icon}
            </motion.div>
            <div>
              <div className="text-cyan-600 font-bold text-lg">{item.year}</div>
              <div className="text-gray-700 font-medium">{item.text}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
