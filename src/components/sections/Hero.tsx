import React from 'react'
import { profile } from '@/data/profile'
import { socialLinks } from '@/data/links'

export const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-20 lg:pt-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2">
            {/* Intro Label */}
            <div className="mb-4 flex items-center gap-2 text-primary text-sm font-medium uppercase">
              WELCOME TO MY PORTFOLIO
            </div>

            {/* Name and Role */}
            <h1 className="mb-2 text-5xl font-bold text-main-text lg:text-6xl">
              Hello, I'm{' '}
              <span className="block">
                Tamim Zia
              </span>
            </h1>
            <p className="mb-6 text-xl font-medium text-main-text lg:text-2xl">
              <span className="text-primary">Full Stack Developer</span>
            </p>

            {/* Description */}
            <p className="mb-8 text-secondary-text lg:text-lg leading-relaxed">
              {profile.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-6">
              <a href="#projects" className="btn-primary flex-1 lg:flex-none">
                View My Work
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary flex-1 lg:flex-none">
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-secondary-text hover:text-primary transition-colors"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    <span>{link.platform}</span>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Profile Image Placeholder */}
          <div className="lg:w-1/2 lg:flex lg:justify-center lg:items-center mt-8 lg:mt-0">
            <div className="h-72 w-72 rounded-xl border border-background overflow-hidden">
              {/* Placeholder for image - using a gradient background */}
              <div className="h-full w-full bg-gradient-to-br from-primary via-primary-light to-primary/20 flex items-center justify-center">
                <span className="text-primary text-4xl font-bold">TZ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}