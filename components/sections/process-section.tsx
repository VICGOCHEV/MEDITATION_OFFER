"use client"

import { useEffect, useState } from "react"
import { Zap } from "lucide-react"

export default function ProcessSection() {
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

    const element = document.getElementById("section-6")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      number: "01",
      title: "Подход",
      description:
        "Разработка веб-приложения, которое можно использовать как самостоятельный сайт или упаковать в WebView для публикации в магазинах.",
      duration: "React",
    },
    {
      number: "02",
      title: "Стек",
      description: "React JS, адаптивная верстка.",
      duration: "UI",
    },
    {
      number: "03",
      title: "Результат",
      description: "Полноценный сайт + возможность использования как Web App (в браузере на любом устройстве).",
      duration: "Web App",
    },
    {
      number: "04",
      title: "Логин-механика",
      description: "✅ Регистрация/вход по почте или телефону.",
      duration: "Auth",
    },
    {
      number: "05",
      title: "Что входит",
      description:
        "Разработка Web App на React JS, адаптивный дизайн (мобильные/планшеты/десктоп), геймификация и трекерство, интеграция с backend (Laravel + GraphQL), базовая настройка публикации.",
      duration: "Scope",
    },
  ]

  return (
    <section id="section-6" className="section flex items-center justify-center relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center space-x-2 cool-card px-4 py-2 rounded-full animate-neon-flicker mb-6">
            <Zap className="w-4 h-4 text-neon-green" />
            <span className="text-sm font-medium text-neon-green">Вариант 3 — Web App</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="glitch electric-text" data-text="Web App на React JS">
              Web App на React JS
            </span>
            <br />
            как альтернатива нативу
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative cool-card p-6 rounded-xl hover-electric transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-neon-green text-black rounded-full flex items-center justify-center font-bold text-sm">
                {step.number}
              </div>

              <div className="mt-4">
                <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-4">{step.description}</p>
                <div className="text-neon-green text-sm font-medium">{step.duration}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
