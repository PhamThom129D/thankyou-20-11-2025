import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-6 mt-10">
      <p className="text-sm">
        &copy; {year} Dự án Tri Ân Thầy Cô. Lời cảm ơn chân thành từ học viên.
      </p>
      <p className="text-xs mt-1">
        Made with ❤️ bởi học trò
      </p>
    </footer>
  )
}
