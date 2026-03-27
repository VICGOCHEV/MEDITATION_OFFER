"use client"

import { useEffect, useState } from "react"
import { Zap, Server, Database, Cloud, KeyRound } from "lucide-react"

export default function TargetAudienceSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("section-3")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const items = [
    {
      title: "Язык/Фреймворк",
      value: "PHP (Laravel) + PostgreSQL",
      icon: Server,
    },
    {
      title: "Хранение файлов (аудио)",
      value: "На сервере или S3/MinIo (на выбор)",
      icon: Cloud,
    },
    {
      title: "API",
      value: "GraphQL",
      icon: Database,
    },
    {
      title: "Авторизация",
      value: "Единая система (почта/телефон) для всех платформ",
      icon: KeyRound,
    },
  ]

  return (
    <section id="section-3" className="section flex items-center justify-center relative overflow-hidden py-12">
      {/* Electric grid background */}
      <div className="absolute inset-0 electric-grid opacity-30" />

      {/* Electric particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-green rounded-full animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center space-x-2 cool-card px-4 py-2 rounded-full animate-neon-flicker mb-4">
            <Zap className="w-4 h-4 text-neon-green" />
            <span className="text-sm font-medium text-neon-green">Техническая основа</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="glitch electric-text" data-text="Единая серверная архитектура">
              Единая серверная архитектура
            </span>
            <br />
            (не зависит от выбора фронтенда)
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className={`cool-card p-5 rounded-xl hover-electric transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 1) * 120}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <item.icon className="w-7 h-7 text-neon-green" />
                <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
              </div>
              <div className="text-sm text-gray-400 mb-2">{item.title}</div>
              <div className="text-white font-medium leading-relaxed">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
