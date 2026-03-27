"use client"

import { useEffect, useState } from "react"
import { Wallet } from "lucide-react"

export default function PricingSection() {
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

    const element = document.getElementById("section-8")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const rows = [
    {
      pkg: "Вариант 1: Vibe Coding (AI)",
      price: "300 000 – 350 000 руб.",
      desc: "Разработка iOS и Android приложений с использованием ИИ. Быстрый выход на рынок. Два нативных приложения на выходе.",
    },
    {
      pkg: "Вариант 2: Классическая разработка (RN + Go)",
      price: "800 000 – 1 000 000 руб.",
      desc: "Полный цикл: дизайн → React Native → Jest тесты → backend на Go. Промышленный подход. Возможна совместная работа. Вилка, более точно — после списка вопросов.",
    },
    {
      pkg: "Вариант 3: Web App (React JS)",
      price: "180 000 руб.",
      desc: "Разработка веб-приложения на React JS. Адаптивный дизайн под все устройства. Самый бюджетный вход в продукт.",
    },
  ]

  return (
    <section id="section-8" className="section flex items-center justify-center relative overflow-hidden">
      {/* Electric background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-px h-20 bg-gradient-to-b from-transparent via-neon-green to-transparent animate-pulse" />
        <div
          className="absolute bottom-1/3 right-1/3 w-px h-16 bg-gradient-to-t from-transparent via-neon-green to-transparent animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center space-x-2 cool-card px-4 py-2 rounded-full animate-neon-flicker mb-6">
            <Wallet className="w-4 h-4 text-neon-green" />
            <span className="text-sm font-medium text-neon-green">Стоимость вариантов</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="glitch electric-text" data-text="Бюджетирование проекта">
              Бюджетирование проекта
            </span>
          </h2>
        </div>

        <div
          className={`cool-card p-6 rounded-xl transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Cards layout (mobile/tablet safe) */}
          <div className="space-y-4">
            {rows.map((row, idx) => (
              <div key={idx} className="cool-card p-4 rounded-lg">
                <div className="text-white font-bold leading-snug mb-2">{row.pkg}</div>
                <div className="text-neon-green font-bold mb-3">{row.price}</div>
                <div className="text-gray-300 leading-relaxed text-sm">{row.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
