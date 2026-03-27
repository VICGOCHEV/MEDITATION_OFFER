"use client"

import { useEffect, useState } from "react"
import { ArrowLeft, Check, Zap, Calendar, Users, Target, Award } from "lucide-react"
import { ElectricCursor } from "@/components/electric-effects"

interface ProjectDetailPageProps {
  projectId: string
  onClose: () => void
}

const projectData = {
  "restaurant-app": {
    title: "Приложение для ресторана",
    client: 'Сеть ресторанов "Вкусно"',
    description:
      "Разработка мобильного приложения для заказа еды с доставкой, включающего каталог блюд, корзину, оплату и отслеживание заказа.",
    image: "/placeholder.svg?height=600&width=300",
    category: "HoReCa",
    duration: "3 месяца",
    team: "4 специалиста",
    whatWeDid: [
      "UX/UI дизайн мобильного приложения",
      "Разработка iOS приложения на Swift",
      "Интеграция с системой управления заказами",
      "Настройка push-уведомлений",
      "Интеграция платёжных систем",
      "Система лояльности и бонусов",
      "Тестирование и оптимизация",
    ],
    result: {
      title: "Результат",
      metrics: [
        "Увеличение онлайн заказов на 40%",
        "Средний чек вырос на 25%",
        "Время обработки заказа сократилось в 2 раза",
        "Рейтинг в App Store: 4.8/5",
      ],
    },
  },
  "ecommerce-app": {
    title: "E-commerce приложение",
    client: 'Интернет-магазин одежды "Стиль"',
    description:
      "Создание iOS приложения для продажи модной одежды с персонализированными рекомендациями и удобной системой фильтров.",
    image: "/placeholder.svg?height=600&width=300",
    category: "Retail",
    duration: "4 месяца",
    team: "5 специалистов",
    whatWeDid: [
      "Исследование пользователей и конкурентов",
      "Создание дизайн-системы",
      "Разработка каталога с фильтрами",
      "Система рекомендаций на основе ML",
      "Интеграция с CRM системой",
      "Настройка аналитики и метрик",
      "A/B тестирование интерфейсов",
    ],
    result: {
      title: "Результат",
      metrics: [
        "Рост мобильных продаж на 60%",
        "Конверсия в покупку увеличилась на 35%",
        "Время в приложении выросло на 45%",
        "Количество повторных покупок +50%",
      ],
    },
  },
  "service-app": {
    title: "Сервисное приложение",
    client: 'Клининговая компания "ЧистоДом"',
    description:
      "Разработка приложения для заказа клининговых услуг с возможностью выбора времени, типа уборки и онлайн-оплаты.",
    image: "/placeholder.svg?height=600&width=300",
    category: "Services",
    duration: "2.5 месяца",
    team: "3 специалиста",
    whatWeDid: [
      "Анализ бизнес-процессов клиента",
      "Проектирование пользовательских сценариев",
      "Дизайн интуитивного интерфейса",
      "Разработка системы бронирования",
      "Интеграция с календарём сотрудников",
      "Система рейтингов и отзывов",
      "Автоматизация уведомлений",
    ],
    result: {
      title: "Результат",
      metrics: [
        "Приток новых клиентов увеличился на 80%",
        "Автоматизация заказов на 90%",
        "Сокращение времени обработки заявок в 3 раза",
        "Повышение лояльности клиентов на 40%",
      ],
    },
  },
}

export default function ProjectDetailPage({ projectId, onClose }: ProjectDetailPageProps) {
  const project = projectData[projectId as keyof typeof projectData]
  const [isVisible, setIsVisible] = useState(false)

  // Скроллим в начало страницы при открытии
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    })

    // Запускаем анимацию появления
    setTimeout(() => setIsVisible(true), 100)
  }, [])

  const handleClose = () => {
    onClose()
    // Скроллим к 7 секции (кейсы) после закрытия
    setTimeout(() => {
      const section7 = document.getElementById("section-7")
      if (section7) {
        section7.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center relative">
        <ElectricCursor />

        {/* Electric background */}
        <div className="absolute inset-0 electric-grid opacity-20" />

        <div className="text-center relative z-10">
          <div className="cool-card p-8 rounded-xl">
            <Zap className="w-12 h-12 text-neon-green mx-auto mb-4 animate-pulse" />
            <h1 className="text-2xl font-bold mb-4 electric-text">Проект не найден</h1>
            <button
              onClick={handleClose}
              className="bg-neon-green text-black px-6 py-2 rounded-lg font-medium hover:bg-neon-green/90 transition-all duration-300 electric-spark"
            >
              Вернуться назад
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white font-helvetica overflow-y-auto relative">
      {/* Electric Cursor */}
      <ElectricCursor />

      {/* Electric background effects */}
      <div className="absolute inset-0 electric-grid opacity-10" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-1 h-20 bg-gradient-to-b from-neon-green to-transparent animate-pulse" />
        <div
          className="absolute bottom-32 right-32 w-1 h-16 bg-gradient-to-t from-neon-green to-transparent animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <Zap className="absolute top-1/3 left-10 w-5 h-5 text-neon-green opacity-30 animate-pulse hidden lg:block" />
      </div>

      {/* Fixed Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={handleClose}
          className="flex items-center space-x-2 cool-card px-4 py-2 rounded-lg transition-all duration-300 hover-electric"
        >
          <ArrowLeft className="w-5 h-5 text-neon-green" />
          <span className="text-white font-medium">Назад</span>
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Project Header */}
        <div
          className={`mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center space-x-2 cool-card px-4 py-2 rounded-full animate-neon-flicker mb-6">
            <Target className="w-4 h-4 text-neon-green" />
            <span className="text-sm font-medium text-neon-green">{project.category}</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="glitch electric-text" data-text={project.title}>
              {project.title}
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-6">{project.client}</p>

          {/* Project Stats */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="cool-card p-4 rounded-lg hover-electric">
              <Calendar className="w-6 h-6 text-neon-green mb-2" />
              <div className="text-sm text-gray-400">Длительность</div>
              <div className="text-white font-medium">{project.duration}</div>
            </div>
            <div className="cool-card p-4 rounded-lg hover-electric">
              <Users className="w-6 h-6 text-neon-green mb-2" />
              <div className="text-sm text-gray-400">Команда</div>
              <div className="text-white font-medium">{project.team}</div>
            </div>
            <div className="cool-card p-4 rounded-lg hover-electric">
              <Award className="w-6 h-6 text-neon-green mb-2" />
              <div className="text-sm text-gray-400">Статус</div>
              <div className="text-neon-green font-medium">Запущен</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Project Image */}
          <div
            className={`order-2 lg:order-1 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="sticky top-20">
              <div className="cool-card p-4 rounded-xl">
                <div className="aspect-[3/5] bg-gray-900 rounded-lg overflow-hidden relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div
            className={`order-1 lg:order-2 space-y-8 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Description */}
            <div className="cool-card p-6 rounded-xl hover-electric">
              <h2 className="text-xl font-bold mb-4 text-neon-green flex items-center">
                <Target className="w-5 h-5 mr-2" />
                Описание проекта
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">{project.description}</p>
            </div>

            {/* What We Did */}
            <div className="cool-card p-6 rounded-xl hover-electric">
              <h2 className="text-xl font-bold mb-6 text-white flex items-center">
                <Zap className="w-5 h-5 mr-2 text-neon-green" />
                Что мы делали
              </h2>
              <ul className="space-y-3">
                {project.whatWeDid.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-3 p-2 rounded-lg hover:bg-neon-green/5 transition-colors duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Check className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Results */}
            <div className="cool-card p-6 rounded-xl hover-electric border border-neon-green/20">
              <h2 className="text-xl font-bold mb-6 text-neon-green flex items-center">
                <Award className="w-5 h-5 mr-2" />
                {project.result.title}
              </h2>
              <ul className="space-y-4">
                {project.result.metrics.map((metric, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-3 p-3 rounded-lg bg-neon-green/5 border border-neon-green/10"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="w-2 h-2 bg-neon-green rounded-full flex-shrink-0 mt-2 animate-pulse" />
                    <span className="text-white font-medium">{metric}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Back Button */}
            <div className="pt-8">
              <button
                onClick={handleClose}
                className="bg-neon-green text-black px-8 py-3 rounded-lg font-medium hover:bg-neon-green/90 transition-all duration-300 electric-spark flex items-center space-x-2"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Вернуться к кейсам</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
