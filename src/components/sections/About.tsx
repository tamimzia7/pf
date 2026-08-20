import React from 'react'
import { CircleCheck } from 'lucide-react'
import { Section } from '@/components/layout/PortfolioLayout'
import { aboutContent } from '@/data/about'

export const About: React.FC = () => {
  return (
    <Section id="about" className="bg-soft-background py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="reveal mb-6 sm:mb-8 lg:mb-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
            {aboutContent.label}
          </p>
          <h2 className="text-xl font-bold text-main-text sm:text-2xl lg:text-3xl">
            {aboutContent.title}
          </h2>
        </div>

        {/* Content */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Introduction */}
          <div className="reveal space-y-4 text-secondary-text leading-relaxed lg:text-lg">
            {aboutContent.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Highlights */}
          <ul className="reveal reveal-group grid grid-cols-1 sm:grid-cols-2 gap-3" data-stagger="80">
            {aboutContent.highlights.map((highlight) => (
              <li
                key={highlight}
                className="card flex items-center gap-3 p-3"
              >
                <CircleCheck className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="text-main-text font-medium text-sm">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}