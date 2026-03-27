"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Zap, Smartphone } from "lucide-react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="section-1"
      className="section flex items-center justify-center electric-grid relative overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Телефон как декоративный элемент на мобильных - оптимизированный */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-0 lg:hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tel-dMr8MTri3b1XEfK5Djo2mB3cQLTyNC.png"
          alt="iPhone App Mockup Background"
          width={1875}
          height={3750}
          className={`opacity-15 max-w-none w-[300px] sm:w-[350px] h-auto transition-opacity duration-500 ${
            imageLoaded ? "animate-float-gentle" : ""
          }`}
          style={{ transform: "translateX(50px)" }}
          loading="eager"
          priority
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      {/* Упрощенные electric particles - только на десктопе */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10 hidden md:block">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-green rounded-full animate-ping" />
        <div
          className="absolute top-3/4 right-1/4 w-1 h-1 bg-neon-green rounded-full animate-ping"
          style={{ animationDelay: "1s" }}
        />

        {/* Floating icons - только на больших экранах */}
        <Zap className="absolute top-20 left-10 w-6 h-6 text-neon-green opacity-30 animate-pulse hidden lg:block" />
        <Smartphone className="absolute bottom-32 right-20 w-5 h-5 text-neon-green opacity-20 animate-bounce hidden lg:block" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Телефон на десктопе - оптимизированный */}
          <div
            className={`hidden lg:flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="relative animate-float" style={{ transform: "translateX(213px)" }}>
              <div className="absolute -inset-12 bg-neon-green/10 rounded-full blur-3xl animate-pulse" />

              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tel-dMr8MTri3b1XEfK5Djo2mB3cQLTyNC.png"
                alt="iPhone App Mockup"
                width={1875}
                height={3750}
                className="relative z-10 max-w-[600px] xl:max-w-[900px] 2xl:max-w-[1125px] h-auto"
                priority
                quality={85}
              />
            </div>
          </div>

          {/* Текстовый контент */}
          <div
            className={`lg:col-span-1 text-center lg:text-left space-y-6 lg:space-y-6 transition-all duration-1000 max-w-2xl mx-auto lg:mx-0 lg:max-w-none ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Cool badge */}
            <div className="inline-flex items-center space-x-2 cool-card px-4 py-2 rounded-full animate-neon-flicker">
              <Zap className="w-4 h-4 text-neon-green" />
              <span className="text-sm font-medium text-neon-green">Медитации и осознанность</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block mb-2">Медитации и Осознанность</span>
              <span className="glitch text-neon-green block mb-2" data-text="Стратегия">
                Стратегия
              </span>
              <span className="electric-text block">разработки</span>
            </h1>

            <p
              className="text-xl md:text-2xl text-gray-300 max-w-xl mx-auto lg:mx-0 animate-electric-slide leading-relaxed"
              style={{ animationDelay: "0.5s" }}
            >
              Перенос функционала из Telegram-бота в самостоятельный продукт с фокусом на геймификацию, трекерство и
              подписочную модель.
            </p>

            {/* Дополнительная информация только на мобильных */}
            <div className="lg:hidden mt-8 space-y-4">
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-neon-green rounded-full"></div>
                  <span>2-4 месяца</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-neon-green rounded-full"></div>
                  <span>Полный цикл</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
