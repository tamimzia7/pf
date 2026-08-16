import React from 'react'
import { PortfolioLayout, Section } from '@/components/layout/PortfolioLayout'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { WhatIDo } from '@/components/sections/WhatIDo'

// Placeholder sections for navigation
const Skills: React.FC = () => (
  <Section id="skills" className="pb-20">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="mb-6 text-4xl font-bold text-main-text">Skills</h2>
      <p className="text-secondary-text lg:text-lg">
        Placeholder for Skills section. This section will be built in a later phase.
      </p>
    </div>
  </Section>
)

const Projects: React.FC = () => (
  <Section id="projects" className="pb-20">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="mb-6 text-4xl font-bold text-main-text">Projects</h2>
      <p className="text-secondary-text lg:text-lg">
        Placeholder for Projects section. This section will be built in a later phase.
      </p>
    </div>
  </Section>
)

const Services: React.FC = () => (
  <Section id="services" className="pb-20">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="mb-6 text-4xl font-bold text-main-text">Services</h2>
      <p className="text-secondary-text lg:text-lg">
        Placeholder for Services section. This section will be built in a later phase.
      </p>
    </div>
  </Section>
)

const Resume: React.FC = () => (
  <Section id="resume" className="pb-20">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="mb-6 text-4xl font-bold text-main-text">Resume</h2>
      <p className="text-secondary-text lg:text-lg">
        Placeholder for Resume section. This section will be built in a later phase.
      </p>
    </div>
  </Section>
)

const Blog: React.FC = () => (
  <Section id="blog" className="pb-20">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="mb-6 text-4xl font-bold text-main-text">Blog</h2>
      <p className="text-secondary-text lg:text-lg">
        Placeholder for Blog section. This section will be built in a later phase.
      </p>
    </div>
  </Section>
)

const Contact: React.FC = () => (
  <Section id="contact" className="pb-20">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="mb-6 text-4xl font-bold text-main-text">Contact</h2>
      <p className="text-secondary-text lg:text-lg">
        Placeholder for Contact section. This section will be built in a later phase.
      </p>
    </div>
  </Section>
)

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
      <Blog />
      <Contact />
    </PortfolioLayout>
  )
}

export default App