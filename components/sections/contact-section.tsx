"use client"

import { useEffect, useState } from "react"
import { Zap, HelpCircle, CheckCircle2 } from "lucide-react"

export default function ContactSection() {
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

    const element = document.getElementById("section-9")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="section-9" className="section flex items-center justify-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
        <div
          className={`space-y-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center space-x-2 cool-card px-4 py-2 rounded-full animate-neon-flicker mb-6">
            <Zap className="w-4 h-4 text-neon-green" />
            <span className="text-sm font-medium text-neon-green">Следующие шаги</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="glitch electric-text" data-text="Для уточнения стоимости (Вариант 2)">
              Для уточнения стоимости (Вариант 2)
            </span>
            <br />
            необходимо ответить на вопросы:
          </h2>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Чтобы сузить вилку по Варианту 2, нужны детали:
          </p>

          <div
            className={`cool-card p-6 rounded-xl hover-electric transition-all duration-700 text-left max-w-3xl mx-auto ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center space-x-3 mb-5">
              <HelpCircle className="w-6 h-6 text-neon-green" />
              <h3 className="text-xl font-bold text-white">Вопросы</h3>
            </div>

            <ul className="space-y-3">
              {[
                "Есть ли готовый дизайн (Figma/макеты) или его нужно создавать с нуля?",
                'Какая логика геймификации? (Только "7 практик = новая" или есть таблицы лидеров, ачивки, счетчики стриков?)',
                "Нужна ли админ-панель для загрузки новых медитаций без программиста?",
                "Важен ли офлайн-доступ к скачанным медитациям?",
              ].map((q, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-neon-green rounded-full flex-shrink-0 mt-2 animate-pulse" />
                  <span className="text-gray-300 leading-relaxed">{q}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 w-full h-px bg-gradient-to-r from-transparent via-neon-green to-transparent" />

            <div className="flex items-center space-x-3 mt-6 mb-4">
              <CheckCircle2 className="w-6 h-6 text-neon-green" />
              <h3 className="text-xl font-bold text-white">Вывод</h3>
            </div>

            <ul className="space-y-3">
              {[
                "Вариант 1 (350к) — если нужны два нативных приложения быстро и с минимальными вложениями.",
                "Вариант 2 (800к–1м) — если нужен промышленный подход с кастомным дизайном, тестами и совместной разработкой.",
                "Вариант 3 (180к) — если нужен самый бюджетный вход через Web App.",
              ].map((q, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-neon-green rounded-full flex-shrink-0 mt-2 animate-pulse" />
                  <span className="text-white font-medium leading-relaxed">{q}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
