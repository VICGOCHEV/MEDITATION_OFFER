"use client"

import { useEffect, useState } from "react"
import { Zap, Bot, Smartphone, KeyRound, Check, Store } from "lucide-react"

export default function WhyUsSection() {
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

    const element = document.getElementById("section-4")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const cards = [
    {
      icon: Bot,
      title: "Подход",
      description: "Разработка с максимальным использованием AI-инструментов. Кодинг с помощью ИИшки.",
      badge: "AI",
    },
    {
      icon: Smartphone,
      title: "Результат",
      description: "Два нативных приложения на выходе — iOS и Android.",
      badge: "iOS/Android",
    },
    {
      icon: KeyRound,
      title: "Логин-механика",
      description: "✅ Регистрация/вход по почте или телефону.",
      badge: "Auth",
    },
    {
      icon: Check,
      title: "Что входит",
      description:
        "Разработка iOS/Android с использованием AI, базовая геймификация и трекерство, интеграция с backend (Laravel + GraphQL), публикация в App Store и Google Play.",
      badge: "Scope",
    },
  ]

  return (
    <section id="section-4" className="section flex items-center justify-center relative overflow-hidden">
      {/* Electric background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-1 h-20 bg-gradient-to-b from-neon-green to-transparent animate-pulse" />
        <div
          className="absolute bottom-32 right-32 w-1 h-16 bg-gradient-to-t from-neon-green to-transparent animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <Zap className="absolute top-1/3 left-10 w-5 h-5 text-neon-green opacity-30 animate-pulse" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center space-x-2 cool-card px-4 py-2 rounded-full animate-neon-flicker mb-6">
            <Store className="w-4 h-4 text-neon-green" />
            <span className="text-sm font-medium text-neon-green">Вариант 1 — Vibe Coding</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="glitch electric-text" data-text="Vibe Coding — быстрая разработка">
              Vibe Coding — быстрая разработка
            </span>
            <br />
            с использованием ИИ
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`group cool-card p-8 rounded-xl hover-electric transition-all duration-500 relative overflow-hidden ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-neon-green/20 to-transparent" />

              <div className="absolute top-4 right-4 bg-neon-green text-black text-xs px-2 py-1 rounded-full font-bold">
                {card.badge}
              </div>

              <div className="relative mb-6">
                <card.icon className="w-12 h-12 text-neon-green group-hover:scale-110 transition-transform duration-300" />
                <div className="w-4 h-4 text-neon-green absolute -top-1 -right-1 animate-pulse" />
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-neon-green transition-colors duration-300">
                  {card.title}
                </h3>

                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {card.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-green to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
