"use client"

import { useEffect } from "react"

export default function SmoothScroll() {
  useEffect(() => {
    // Проверяем, является ли устройство мобильным
    const isMobile = () => {
      return window.innerWidth < 768 // md breakpoint
    }

    let isScrolling = false
    let currentSection = 0
    const sections = Array.from(document.querySelectorAll(".section"))

    const scrollToSection = (index: number) => {
      if (index >= 0 && index < sections.length) {
        const section = sections[index] as HTMLElement
        const offsetTop = section.offsetTop

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
        currentSection = index
      }
    }

    const handleWheel = (e: WheelEvent) => {
      // Отключаем поэкранный скролл на мобильных
      if (isMobile()) return

      if (isScrolling) return

      e.preventDefault()
      isScrolling = true

      const direction = e.deltaY > 0 ? 1 : -1
      const nextSection = currentSection + direction

      scrollToSection(nextSection)

      setTimeout(() => {
        isScrolling = false
      }, 1000)
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      // Отключаем поэкранный скролл на мобильных
      if (isMobile()) return

      if (isScrolling) return

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault()
        isScrolling = true
        scrollToSection(currentSection + 1)
        setTimeout(() => {
          isScrolling = false
        }, 1000)
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault()
        isScrolling = true
        scrollToSection(currentSection - 1)
        setTimeout(() => {
          isScrolling = false
        }, 1000)
      }
    }

    const updateCurrentSection = () => {
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement
        if (section.offsetTop <= scrollPosition) {
          currentSection = i
          break
        }
      }
    }

    // Touch events - отключаем на мобильных
    let touchStartY = 0
    let touchEndY = 0

    const handleTouchStart = (e: TouchEvent) => {
      if (isMobile()) return
      touchStartY = e.changedTouches[0].screenY
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (isMobile()) return
      if (isScrolling) return

      touchEndY = e.changedTouches[0].screenY
      const deltaY = touchStartY - touchEndY

      if (Math.abs(deltaY) > 50) {
        isScrolling = true
        const direction = deltaY > 0 ? 1 : -1
        scrollToSection(currentSection + direction)
        setTimeout(() => {
          isScrolling = false
        }, 1000)
      }
    }

    // Initialize current section
    updateCurrentSection()

    // Add event listeners только для десктопа
    if (!isMobile()) {
      window.addEventListener("wheel", handleWheel, { passive: false })
      window.addEventListener("keydown", handleKeyDown)
      window.addEventListener("touchstart", handleTouchStart, { passive: true })
      window.addEventListener("touchend", handleTouchEnd, { passive: true })
    }

    // Cleanup
    return () => {
      window.removeEventListener("wheel", handleWheel)
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchend", handleTouchEnd)
    }
  }, [])

  return null
}
