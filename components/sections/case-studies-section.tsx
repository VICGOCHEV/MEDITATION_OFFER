"use client"

import { useEffect, useState } from "react"
import { Zap } from "lucide-react"

interface CaseStudiesSectionProps {
  onProjectClick: (projectId: string) => void
}

export default function CaseStudiesSection({ onProjectClick: _onProjectClick }: CaseStudiesSectionProps) {
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

    const element = document.getElementById("section-7")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const rows = [
    {
      feature: "Логин/Регистрация (почта/телефон)",
      v1: "✅",
      v2: "✅",
      v3: "✅",
    },
    {
      feature: "Геймификация (прогресс, открытие практик)",
      v1: "✅",
      v2: "✅",
      v3: "✅",
    },
    {
      feature: "Трекерство (личный кабинет, статистика)",
      v1: "✅",
      v2: "✅",
      v3: "✅",
    },
    {
      feature: "Подписки / Платежи",
      v1: "✅",
      v2: "✅ (StoreKit + Google Pay)",
      v3: "✅ (Stripe)",
    },
    {
      feature: "Дизайн (UI/UX)",
      v1: "Базовый",
      v2: "Кастомный (Figma с утверждением)",
      v3: "Адаптивный",
    },
    {
      feature: "Платформы",
      v1: "iOS + Android (нативные приложения)",
      v2: "iOS + Android (кросс-платформа)",
      v3: "Сайт / Web App",
    },
    {
      feature: "Тестирование",
      v1: "Базовое",
      v2: "Jest тесты",
      v3: "Базовое",
    },
    {
      feature: "Публикация в магазины",
      v1: "✅",
      v2: "✅",
      v3: "❌ (или через WebView за доп. оплату)",
    },
    {
      feature: "Организация работ",
      v1: "Полностью подрядчиком",
      v2: "Совместная работа (вы + наш разраб, если вы в RN)",
      v3: "Полностью подрядчиком",
    },
  ]

  return (
    <section id="section-7" className="section flex items-center justify-center relative">
      <div className="absolute inset-0 electric-grid opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center space-x-2 cool-card px-4 py-2 rounded-full animate-neon-flicker mb-6">
            <Zap className="w-4 h-4 text-neon-green" />
            <span className="text-sm font-medium text-neon-green">Пакетные предложения</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="glitch electric-text" data-text="Сравнение вариантов">
              Сравнение вариантов
            </span>
            <br />
            и что входит в стоимость
          </h2>
        </div>

        <div
          className={`cool-card p-6 rounded-xl transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-between mb-4 md:hidden">
            <div className="text-sm text-gray-400">Прокрутите вправо для просмотра</div>
            <div className="text-xs text-neon-green font-bold">SWIPE →</div>
          </div>

          {/* Horizontal scroll on mobile/tablet */}
          <div
            className="w-full overflow-x-auto overscroll-x-contain touch-pan-x pb-2"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <table className="w-full min-w-[1100px] border-separate border-spacing-0">
              <thead>
                <tr>
                  <th className="text-left text-sm text-gray-400 font-medium p-3 border-b border-neon-green/20">
                    Компонент / Фича
                  </th>
                  <th className="text-left text-sm text-gray-400 font-medium p-3 border-b border-neon-green/20">
                    Вариант 1: Vibe Coding (AI)
                  </th>
                  <th className="text-left text-sm text-gray-400 font-medium p-3 border-b border-neon-green/20">
                    Вариант 2: Классическая (RN + Go)
                  </th>
                  <th className="text-left text-sm text-gray-400 font-medium p-3 border-b border-neon-green/20">
                    Вариант 3: Web App (React JS)
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-neon-green/5 transition-colors">
                    <td className="p-3 text-white border-b border-neon-green/10 align-top">{row.feature}</td>
                    <td className="p-3 text-gray-300 border-b border-neon-green/10 align-top">{row.v1}</td>
                    <td className="p-3 text-gray-300 border-b border-neon-green/10 align-top">{row.v2}</td>
                    <td className="p-3 text-gray-300 border-b border-neon-green/10 align-top">{row.v3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
