"use client"

import { useEffect, useState } from "react"

export function ElectricCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMoving, setIsMoving] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsMoving(true)

      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => setIsMoving(false), 100)
    }

    // Только на десктопе
    if (window.innerWidth >= 768) {
      window.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearTimeout(timeoutId)
    }
  }, [])

  // Не рендерим на мобильных
  if (typeof window !== "undefined" && window.innerWidth < 768) {
    return null
  }

  return (
    <div
      className="fixed pointer-events-none z-50 mix-blend-difference"
      style={{
        left: mousePosition.x - 10,
        top: mousePosition.y - 10,
        transition: "all 0.1s ease-out",
      }}
    >
      <div
        className={`w-5 h-5 rounded-full border-2 border-neon-green transition-all duration-200 ${
          isMoving ? "scale-150" : "scale-100"
        }`}
        style={{
          boxShadow: isMoving
            ? "0 0 20px rgba(196, 251, 0, 0.8), 0 0 40px rgba(196, 251, 0, 0.4)"
            : "0 0 10px rgba(196, 251, 0, 0.5)",
        }}
      />
    </div>
  )
}

// Упрощенные particles - только на десктопе
export function ElectricParticles() {
  const [particles, setParticles] = useState<
    Array<{
      id: number
      x: number
      y: number
      size: number
      duration: number
    }>
  >([])

  useEffect(() => {
    // Только на десктопе
    if (window.innerWidth < 768) return

    const generateParticle = () => ({
      id: Math.random(),
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2 + 1, // Уменьшили размер
      duration: Math.random() * 2 + 1, // Уменьшили длительность
    })

    const interval = setInterval(() => {
      setParticles((prev) => {
        const newParticles = [...prev, generateParticle()].slice(-8) // Уменьшили количество
        return newParticles
      })
    }, 4000) // Увеличили интервал

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-10 hidden md:block">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-ping bg-neon-green"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            animationDuration: `${particle.duration}s`,
            boxShadow: `0 0 ${particle.size * 2}px #C4FB00`,
          }}
        />
      ))}
    </div>
  )
}

// Упрощенные lines - только на больших экранах
export function ElectricLines() {
  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden hidden lg:block">
      <svg className="w-full h-full opacity-10">
        <defs>
          <linearGradient id="electric-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C4FB00" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#C4FB00" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        <path
          d="M0,100 Q250,50 500,100 T1000,100"
          stroke="url(#electric-gradient)"
          strokeWidth="1"
          fill="none"
          className="animate-pulse"
        />
      </svg>
    </div>
  )
}
