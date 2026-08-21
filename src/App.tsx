import React from 'react'
import { PortfolioLayout } from '@/components/layout/PortfolioLayout'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { WhatIDo } from '@/components/sections/WhatIDo'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Services } from '@/components/sections/Services'
import { Resume } from '@/components/sections/Resume'
import { Testimonials } from '@/components/sections/Testimonials'
import { Blog } from '@/components/sections/Blog'
import { Contact } from '@/components/sections/Contact'
import { GeminiAI } from '@/components/ui/GeminiAI'

const App: React.FC = () => {
  return (
    <PortfolioLayout>
      <Hero />
      <About />
      <WhatIDo />
      <Skills />
      <Projects />
      <Services />
      <Resume />
      <Testimonials />
      <Blog />
      <Contact />
      <GeminiAI />
    </PortfolioLayout>
  )
}

export default App