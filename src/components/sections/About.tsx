import React from 'react'
import { CircleCheck } from 'lucide-react'
import { Section } from '@/components/layout/PortfolioLayout'
import { aboutContent } from '@/data/about'

export const About: React.FC = () => {
  return (
    <Section id="about" className="bg-soft-background py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="fade-in-up mb-10 lg:mb-14">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
            {aboutContent.label}
          </p>
          <h2 className="text-3xl font-bold text-main-text sm:text-4xl lg:text-5xl">
            {aboutContent.title}
          </h2>
        </div>

        {/* Content */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Introduction */}
          <div className="fade-in-up space-y-4 text-secondary-text leading-relaxed lg:text-lg">
            {aboutContent.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Highlights */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {aboutContent.highlights.map((highlight, index) => (
              <li
                key={highlight}
                className="card fade-in-up flex items-center gap-3 p-3"
                style={{ animationDelay: `${index * 80}ms` }}
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