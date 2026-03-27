"use client"

import { useState, useCallback } from "react"
import Navigation from "@/components/navigation"
import SmoothScroll from "@/components/smooth-scroll"
import HeroSection from "@/components/sections/hero-section"
import WhoWeAreSection from "@/components/sections/who-we-are-section"
import TargetAudienceSection from "@/components/sections/target-audience-section"
import WhyUsSection from "@/components/sections/why-us-section"
import WhatWeDoSection from "@/components/sections/what-we-do-section"
import ProcessSection from "@/components/sections/process-section"
import CaseStudiesSection from "@/components/sections/case-studies-section"
import PricingSection from "@/components/sections/pricing-section"
import ContactSection from "@/components/sections/contact-section"
import ProjectDetailPage from "@/components/project-detail-page"
import { ElectricCursor, ElectricParticles, ElectricLines } from "@/components/electric-effects"

export default function HomePage() {
  const [showProjectDetail, setShowProjectDetail] = useState<string | null>(null)

  const openProjectDetail = useCallback((projectId: string) => {
    setShowProjectDetail(projectId)
    document.body.style.overflow = "hidden"
  }, [])

  const closeProjectDetail = useCallback(() => {
    setShowProjectDetail(null)
    document.body.style.overflow = "auto"
  }, [])

  if (showProjectDetail) {
    return <ProjectDetailPage projectId={showProjectDetail} onClose={closeProjectDetail} />
  }

  return (
    <div className="bg-black text-white font-helvetica relative">
      {/* Navigation */}
      <Navigation />

      {/* Smooth Scroll */}
      <SmoothScroll />

      {/* Electric Effects */}
      <ElectricCursor />
      <ElectricParticles />
      <ElectricLines />

      <main className="relative z-10">
        <HeroSection />
        <WhoWeAreSection />
        <TargetAudienceSection />
        <WhyUsSection />
        <WhatWeDoSection />
        <ProcessSection />
        <CaseStudiesSection onProjectClick={openProjectDetail} />
        <PricingSection />
        <ContactSection />
      </main>
    </div>
  )
}
