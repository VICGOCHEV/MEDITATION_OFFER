"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Zap, TrendingUp, Users, Cog } from "lucide-react"

export default function WhoWeAreSection() {
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

    const element = document.getElementById("section-2")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const benefits = [
    { text: "увеличивают продажи", icon: TrendingUp },
    { text: "улучшают клиентский опыт", icon: Users },
    { text: "упрощают бизнес-процессы", icon: Cog },
  ]

  return (
    <section id="section-2" className="section flex items-center justify-center relative overflow-hidden">
      {/* Оптимизированное фото на заднем фоне */}
      <div className="absolute bottom-0 right-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Viktor-iD3NMnXOExRB7Mk77eUy2m0bPZoBlT.png"
          alt="Viktor - iOS Developer Background"
          width={600}
          height={600}
          className="opacity-20 max-w-none w-[400px] md:w-[500px] lg:w-[600px] h-auto object-bottom"
          loading="lazy"
          quality={75}
        />
      </div>

      {/* Упрощенные electric background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10 hidden md:block">
        <div className="absolute top-1/3 left-0 w-px h-32 bg-gradient-to-b from-transparent via-neon-green to-transparent animate-pulse" />
        <div
          className="absolute bottom-1/3 right-0 w-px h-24 bg-gradient-to-t from-transparent via-neon-green to-transparent animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-20">
        <div className="max-w-4xl">
          <div
            className={`space-y-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Cool badge */}
            <div className="inline-flex items-center space-x-2 cool-card px-4 py-2 rounded-full animate-neon-flicker">
              <Zap className="w-4 h-4 text-neon-green" />
              <span className="text-sm font-medium text-neon-green">Экспертиза</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="glitch electric-text" data-text="Мы создаём iOS-приложения,">
                Мы создаём iOS-приложения,
              </span>
              <br />
              которые работают на бизнес
            </h2>

            <p className="text-lg text-gray-300 max-w-3xl animate-electric-slide" style={{ animationDelay: "0.3s" }}>
              Я — дизайнер и разработчик с фокусом на мобильные решения. Помогаю компаниям в HoReCa и e-commerce выйти в
              цифровое поле: от первых скетчей — до готового продукта в App Store.
            </p>

            <div className="grid md:grid-cols-3 gap-4 max-w-4xl">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`cool-card flex items-center space-x-3 p-4 rounded-lg hover-electric transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                >
                  <benefit.icon className="w-6 h-6 text-neon-green flex-shrink-0" />
                  <span className="text-sm font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
