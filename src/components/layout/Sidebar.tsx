import React from 'react'
import * as lucide from 'lucide-react'
import { socialLinks, navigationLinks, hireMeText } from '@/data/links'

export const Sidebar: React.FC = () => {
  return (
    <aside className="lg:block lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-64 lg:border-r">
      <div className="p-6 lg:p-8">
        {/* Profile */}
        <div className="mb-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light">
            {/* Placeholder for profile image - using initials */}
            <span className="text-primary text-xl font-bold">TZ</span>
          </div>
          <h2 className="mt-4 text-2xl font-bold text-main-text">Tamim Zia</h2>
          <p className="mt-2 text-secondary-text">Full Stack Developer</p>
        </div>

        {/* Short Intro */}
        <p className="mb-6 text-muted-text">
          I build scalable, secure and business-focused digital solutions using modern web technologies.
        </p>

        {/* Social Links */}
        <div className="mb-8 flex flex-col gap-2">
          {socialLinks.map((link) => {
            const Icon = (lucide as any)[link.platform.toLowerCase()] || lucide.Github
            return (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-secondary-text hover:text-primary transition-colors"
              >
                <Icon className="h-4 w-4" />
                <span>{link.platform}</span>
              </a>
            )
          })}
        </div>

        {/* Navigation */}
        <nav className="mb-8 space-y-2">
          {navigationLinks.map((nav) => (
            <a
              key={nav.id}
              href={nav.url}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-secondary-text hover:bg-primary hover:text-white hover:no-underline transition-colors ${
                // Active state will be handled by the layout or via URL hash
                // We'll leave it as is for now, and the layout can set active class
                ''
              }`}
            >
              {/* We'll use a simple icon for navigation - can be improved */}
              <span className="h-4 w-4 flex items-center justify-center">
                {/* Using a dot as placeholder - can be replaced with Lucide icons later */}
                <div className="h-2 w-2 rounded-full bg-secondary-text" />
              </span>
              <span className="whitespace-nowrap">{nav.title}</span>
            </a>
          ))}
        </nav>

        {/* Hire Me CTA */}
        <a href="#contact" className="w-full btn-primary">
          {hireMeText}
        </a>
      </div>
    </aside>
  )
}