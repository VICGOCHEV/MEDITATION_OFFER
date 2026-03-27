"use client"

import { useState, useEffect } from "react"
import { Menu, X, Zap } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(1)

  const menuItems = [
    { id: 1, label: "Титульный", href: "#section-1" },
    { id: 2, label: "Контекст", href: "#section-2" },
    { id: 3, label: "Backend", href: "#section-3" },
    { id: 4, label: "Vibe", href: "#section-4" },
    { id: 5, label: "Классика", href: "#section-5" },
    { id: 6, label: "Web", href: "#section-6" },
    { id: 7, label: "Пакеты", href: "#section-7" },
    { id: 8, label: "Бюджет", href: "#section-8" },
    { id: 9, label: "Шаги", href: "#section-9" },
  ]

  const scrollToSection = (sectionId: number) => {
    const element = document.getElementById(`section-${sectionId}`)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
      setIsOpen(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) => document.getElementById(`section-${item.id}`))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(i + 1)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[50px] bg-black/90 backdrop-blur-md border-b border-neon-green/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Zap className="w-6 h-6 text-neon-green" />
            <span className="text-lg font-bold text-white">iOS Studio</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-neon-green text-black"
                    : "text-gray-300 hover:text-neon-green hover:bg-neon-green/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-neon-green hover:bg-neon-green/10 rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-[50px] left-0 right-0 bg-black/95 backdrop-blur-md border-b border-neon-green/20">
            <div className="px-4 py-2 space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-neon-green text-black"
                      : "text-gray-300 hover:text-neon-green hover:bg-neon-green/10"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
