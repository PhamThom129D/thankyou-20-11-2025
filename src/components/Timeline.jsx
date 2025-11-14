'use client'
import { motion } from 'framer-motion'

const timelineData = [
  { year: '2020', text: 'Bắt đầu học lập trình: Từ "Hello World" đến những giấc mơ lớn! 🌱', icon: '🚀' },
  { year: '2021', text: 'Trải qua bug đầu tiên: Học cách debug như một ninja! 🥷', icon: '🐛' },
  { year: '2022', text: 'Mentor xuất hiện: Fix bug, dạy code, và truyền cảm hứng! 👨‍🏫', icon: '💡' },
  { year: '2023', text: 'Project đầu tiên: Từ ý tưởng đến sản phẩm hoàn chỉnh! 🎯', icon: '🏗️' },
  { year: '2024', text: 'Thành tựu lớn: Cảm ơn mentor – hành trình này mãi không quên! 🏆', icon: '🎉' },
]

export default function Timeline() {
  return (
    <div id="timeline" className="max-w-4xl mx-auto py-16 px-4 bg-gradient-to-br from-cyan-100 via-teal-100 to-blue-100 relative overflow-hidden">
      {/* Background code snippets */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="text-4xl text-cyan-600 font-mono absolute top-10 left-10">const journey = [</div>
        <div className="text-3xl text-teal-600 font-mono absolute bottom-20 right-20">'2024', 'Success' ];</div>
        <div className="text-5xl text-blue-600 font-mono absolute top-1/2 left-1/4">// Timeline</div>
      </div>
      
      {/* Parallax effect */}
      <motion.div
        className="absolute inset-0 bg-fixed opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle, #06b6d4 1px, transparent 1px)', backgroundSize: '20px 20px' }}
        initial={{ y: 0 }}
        whileInView={{ y: -30 }}
        transition={{ duration: 3 }}
      />
      
      <motion.h2
        initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, type: 'spring' }}
        className="text-3xl font-bold text-center mb-12 text-cyan-700 font-mono relative z-10"
      >
        Hành Trình Code Journey 🗺️
      </motion.h2>
      
      <div className="space-y-12 relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-400 to-teal-400 h-full rounded-full"></div>
        
        {timelineData.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -300 : 300, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: i * 0.4, type: 'spring', stiffness: 100 }}
            whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(6, 182, 212, 0.3)' }}
            className={`p-6 bg-white/80 backdrop-blur-lg rounded-3xl shadow-lg flex items-center space-x-6 relative z-10 border border-teal-200 ${i % 2 === 0 ? 'ml-auto mr-8' : 'mr-auto ml-8'} max-w-lg`}
          >
            {/* Connector dot */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-white shadow-lg"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            <motion.div
              className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 text-white flex items-center justify-center text-2xl font-bold"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
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