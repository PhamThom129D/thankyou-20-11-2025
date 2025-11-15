'use client'
import React from 'react'

interface SpotlightProps {
  mousePos: { x: number; y: number }
}

export default function Spotlight({ mousePos }: SpotlightProps) {
  return (
    <div
      className="absolute inset-0 pointer-events-none -z-10"
      style={{
        background: `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.12), transparent 80%)`,
        transition: 'background 0.05s',
      }}
    />
  )
}
