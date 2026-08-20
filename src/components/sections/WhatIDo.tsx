import React from 'react'
import { Section } from '@/components/layout/PortfolioLayout'
import { capabilities } from '@/data/capabilities'

const sectionLabel = 'WHAT I BUILD'
const sectionTitle = 'What I Do'

export const WhatIDo: React.FC = () => {
  return (
    <Section id="what-i-do" className="py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="reveal mb-6 sm:mb-8 lg:mb-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
            {sectionLabel}
          </p>
          <h2 className="text-xl font-bold text-main-text sm:text-2xl lg:text-3xl">
            {sectionTitle}
          </h2>
        </div>

        {/* Cards */}
        <div className="reveal reveal-group grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-stagger="70">
          {capabilities.map((capability) => {
            const Icon = capability.icon
            return (
              <article
                key={capability.id}
                className="card card-hover p-4 sm:p-5 lg:p-6"
              >
                <Icon className="mb-4 h-8 w-8 text-primary" aria-hidden="true" />
                <h3 className="mb-2 text-lg font-semibold text-main-text">
                  {capability.title}
                </h3>
                <p className="text-secondary-text leading-relaxed">
                  {capability.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </Section>
  )
}