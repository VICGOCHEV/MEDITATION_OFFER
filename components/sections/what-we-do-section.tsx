"use client"

import React from "react"
import { useEffect, useState } from "react"
import { Palette, Code2, TestTube, Headphones, Zap, ArrowRight, CheckCircle } from "lucide-react"

const services = [
  {
    title: "Подход",
    icon: Palette,
    description: "Полный цикл разработки с утверждением каждого этапа.",
    items: [
      "Отрисовка дизайн-макетов (Figma) с утверждением",
      "Планирование, этапность, контроль качества",
    ],
    badge: "Process",
  },
  {
    title: "Стек",
    icon: Code2,
    description: "Промышленный подход к реализации.",
    items: [
      "Frontend: React Native (iOS + Android)",
      "Backend: Go + GraphQL",
      "Логин-механика: ✅ регистрация/вход по почте или телефону",
    ],
    badge: "Stack",
  },
  {
    title: "Тестирование",
    icon: TestTube,
    description: "Покрытие ключевой логики и регресса.",
    items: [
      "Jest тесты",
      "Интеграция подписок (App Store / Google Play)",
    ],
    badge: "QA",
  },
  {
    title: "Организация",
    icon: Headphones,
    description: "Как можем выстроить работу по варианту 2.",
    items: ["Возможна совместная работа — вы + наш разработчик (если вы в React Native сечете)."],
    badge: "Team",
  },
]

export default function WhatWeDoSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeService, setActiveService] = useState(0)
  const [autoHoverIndex, setAutoHoverIndex] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Определяем мобильное устройство
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("section-5")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  // Автоматический hover эффект при скролле на мобильных
  useEffect(() => {
    if (!isMobile) return

    const handleScroll = () => {
      const section = document.getElementById("section-5")
      if (!section) return

      const sectionRect = section.getBoundingClientRect()
      const centerY = window.innerHeight / 2

      // Проверяем, находится ли секция в области видимости
      if (sectionRect.top <= centerY && sectionRect.bottom >= centerY) {
        // Вычисляем прогресс скролла внутри секции (0-1)
        const progress = Math.max(0, Math.min(1, (centerY - sectionRect.top) / sectionRect.height))

        // Определяем какой элемент должен быть подсвечен
        const totalElements = services.length + services[activeService].items.length
        const currentIndex = Math.floor(progress * totalElements)

        if (currentIndex < services.length) {
          // Подсвечиваем кнопку выбора услуги
          setAutoHoverIndex(currentIndex)
        } else {
          // Подсвечиваем элемент в списке деталей
          setAutoHoverIndex(services.length + (currentIndex - services.length))
        }
      } else {
        setAutoHoverIndex(null)
      }
    }

    const throttledScroll = throttle(handleScroll, 50)
    window.addEventListener("scroll", throttledScroll)

    return () => window.removeEventListener("scroll", throttledScroll)
  }, [isMobile, activeService])

  // Функция throttle для оптимизации
  function throttle(func: Function, limit: number) {
    let inThrottle = false
    return function (this: any, ...args: any[]) {
      if (!inThrottle) {
        func.apply(this, args)
        inThrottle = true
        setTimeout(() => (inThrottle = false), limit)
      }
    }
  }

  return (
    <section id="section-5" className="section flex items-center justify-center relative overflow-hidden py-8 lg:py-12">
      {/* Electric background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-neon-green to-transparent animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-24 h-px bg-gradient-to-l from-transparent via-neon-green to-transparent animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full">
        <div
          className={`text-center mb-6 lg:mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center space-x-2 cool-card px-4 py-2 rounded-full animate-neon-flicker mb-4">
            <Zap className="w-4 h-4 text-neon-green" />
            <span className="text-sm font-medium text-neon-green">Вариант 2 — Классическая разработка</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="glitch electric-text" data-text="Классическая разработка">
              Классическая разработка
            </span>{" "}
            <br />
            (промышленный подход)
          </h2>
        </div>

        {/* Мобильная версия - вертикальная */}
        <div className="lg:hidden space-y-4">
          {/* Компактные кнопки выбора */}
          <div className="grid grid-cols-2 gap-2">
            {services.map((service, index) => {
              const isAutoHovered = isMobile && autoHoverIndex === index
              const isActive = activeService === index

              return (
                <button
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`cool-card p-3 rounded-lg transition-all duration-500 ${
                    isActive ? "border-neon-green bg-neon-green/10" : ""
                  } ${
                    isAutoHovered ? "border-neon-green/60 bg-neon-green/5 scale-105 shadow-lg shadow-neon-green/20" : ""
                  } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{
                    transitionDelay: `${(index + 1) * 100}ms`,
                    transform: isAutoHovered ? "scale(1.05) translateY(-2px)" : undefined,
                    boxShadow: isAutoHovered ? "0 8px 25px rgba(196, 251, 0, 0.3)" : undefined,
                  }}
                >
                  <div className="flex items-center space-x-2">
                    {React.createElement(service.icon, {
                      className: `w-5 h-5 transition-all duration-500 ${
                        isActive || isAutoHovered ? "text-neon-green scale-110" : "text-gray-400"
                      }`,
                    })}
                    <div className="text-left flex-1 min-w-0">
                      <h3
                        className={`text-sm font-bold transition-all duration-500 truncate ${
                          isActive || isAutoHovered ? "text-neon-green" : "text-white"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <div
                        className={`text-xs px-1.5 py-0.5 rounded font-bold inline-block mt-1 transition-all duration-500 ${
                          isActive || isAutoHovered ? "bg-neon-green text-black scale-105" : "bg-neon-green text-black"
                        }`}
                      >
                        {service.badge}
                      </div>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Компактная карточка с деталями */}
          <div
            className={`cool-card p-4 rounded-xl transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center space-x-3 mb-3">
              {React.createElement(services[activeService].icon, {
                className: "w-6 h-6 text-neon-green",
              })}
              <div>
                <h3 className="text-lg font-bold text-neon-green">{services[activeService].title}</h3>
                <p className="text-gray-400 text-sm">{services[activeService].description}</p>
              </div>
            </div>

            <div className="space-y-1.5">
              {services[activeService].items.map((item, index) => {
                const itemIndex = services.length + index
                const isAutoHovered = isMobile && autoHoverIndex === itemIndex

                return (
                  <div
                    key={index}
                    className={`flex items-center space-x-2 p-1.5 rounded transition-all duration-500 ${
                      isAutoHovered
                        ? "bg-neon-green/15 scale-105 shadow-md shadow-neon-green/20"
                        : "hover:bg-neon-green/5"
                    }`}
                    style={{
                      transform: isAutoHovered ? "scale(1.02) translateX(4px)" : undefined,
                      borderLeft: isAutoHovered ? "2px solid #C4FB00" : undefined,
                      paddingLeft: isAutoHovered ? "10px" : undefined,
                    }}
                  >
                    <CheckCircle
                      className={`flex-shrink-0 transition-all duration-500 ${
                        isAutoHovered ? "w-4 h-4 text-neon-green scale-125" : "w-3.5 h-3.5 text-neon-green"
                      }`}
                    />
                    <span
                      className={`text-sm transition-all duration-500 ${
                        isAutoHovered ? "text-white font-medium" : "text-gray-300"
                      }`}
                    >
                      {item}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Десктопная версия - горизонтальная (без изменений) */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-3">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => setActiveService(index)}
                className={`group cool-card p-5 rounded-xl cursor-pointer transition-all duration-500 ${
                  activeService === index ? "border-neon-green bg-neon-green/5" : ""
                } ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    {React.createElement(service.icon, {
                      className: `w-7 h-7 transition-colors duration-300 ${
                        activeService === index ? "text-neon-green" : "text-gray-400"
                      }`,
                    })}
                    {activeService === index && (
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3
                        className={`text-lg font-bold transition-colors duration-300 ${
                          activeService === index ? "text-neon-green" : "text-white"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <div className="bg-neon-green text-black text-xs px-2 py-1 rounded-full font-bold">
                        {service.badge}
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">{service.description}</p>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-all duration-300 ${
                      activeService === index ? "text-neon-green translate-x-1" : "text-gray-600"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div
            className={`cool-card p-6 rounded-xl transition-all duration-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
          >
            <div className="flex items-center space-x-3 mb-4">
              {React.createElement(services[activeService].icon, {
                className: "w-8 h-8 text-neon-green",
              })}
              <div>
                <h3 className="text-xl font-bold text-neon-green">{services[activeService].title}</h3>
                <p className="text-gray-400 text-sm">{services[activeService].description}</p>
              </div>
            </div>

            <div className="space-y-2">
              {services[activeService].items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-neon-green/5 transition-colors duration-300"
                >
                  <CheckCircle className="w-4 h-4 text-neon-green flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 w-full h-px bg-gradient-to-r from-transparent via-neon-green to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
