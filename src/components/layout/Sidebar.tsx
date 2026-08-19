import React from 'react'
import { socialLinks, navigationLinks, hireMeText } from '@/data/links'

interface SidebarProps {
  activeId?: string | null
}

export const Sidebar: React.FC<SidebarProps> = ({ activeId }) => {
  return (
    <aside className="hidden lg:block lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-64 lg:border-r lg:border-border">
      <div className="p-6 lg:p-8 h-full overflow-y-auto">
        {/* Profile */}
        <div className="mb-8">
          <div className="h-12 w-12 overflow-hidden rounded-lg">
            <img
              src="/profile.png"
              alt="Tamim Zia"
              className="h-full w-full object-cover"
            />
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
            const Icon = link.icon
            return (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-secondary-text hover:text-primary transition-colors"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                <span>{link.platform}</span>
              </a>
            )
          })}
        </div>

        {/* Navigation */}
        <nav className="mb-8 space-y-2" aria-label="Primary">
          {navigationLinks.map((nav) => {
            const isActive = nav.id === activeId
            return (
              <a
                key={nav.id}
                href={nav.url}
                aria-current={isActive ? 'page' : undefined}
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                  isActive
                    ? 'bg-primary text-white'
                    : 'text-secondary-text hover:bg-primary hover:text-white hover:no-underline'
                }`}
              >
                {/* Using a dot as placeholder - can be replaced with Lucide icons later */}
                <span className="h-4 w-4 flex items-center justify-center" aria-hidden="true">
                  <div
                    className={`h-2 w-2 rounded-full ${
                      isActive ? 'bg-white' : 'bg-secondary-text'
                    }`}
                  />
                </span>
                <span className="whitespace-nowrap">{nav.title}</span>
              </a>
            )
          })}
        </nav>

        {/* Hire Me CTA */}
        <a href="#contact" className="w-full btn-primary">
          {hireMeText}
        </a>
      </div>
    </aside>
  )
}