import React, { useState, useEffect } from 'react'
import { Sidebar } from './Sidebar'
import { MobileHeader } from './MobileHeader'
import { Navigation } from './Navigation'
import { navigationLinks, hireMeText, socialLinks } from '@/data/links'

interface PortfolioLayoutProps {
  children: React.ReactNode
}

interface SectionProps {
  id: string
  children: React.ReactNode
  className?: string
}

export const Section: React.FC<SectionProps> = ({ id, children, className = '' }) => {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  )
}

export const PortfolioLayout: React.FC<PortfolioLayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeNavId, setActiveNavId] = useState<string | null>(null)

  // Set active nav based on URL hash
  useEffect(() => {
    const updateActiveNav = () => {
      const hash = window.location.hash.substring(1) // Remove the '#'
      const matchingLink = navigationLinks.find((link) => link.url === `#${hash}` || link.url === `#${hash}/`)
      if (matchingLink) {
        setActiveNavId(matchingLink.id)
      } else {
        // Default to home if no match
        setActiveNavId('home')
      }
    }

    // Check on load
    updateActiveNav()

    // Listen for hash changes
    window.addEventListener('hashchange', updateActiveNav)
    return () => {
      window.removeEventListener('hashchange', updateActiveNav)
    }
  }, [navigationLinks])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      {/* Sidebar - Desktop only */}
      <Sidebar activeId={activeNavId} />

      {/* Main content */}
      <main className="flex-1 overflow-x-hidden lg:ml-64 lg:p-12 p-4 sm:p-6 pt-4 lg:pt-0">
        {/* Mobile Header - Mobile only */}
        <MobileHeader
          isMenuOpen={isMenuOpen}
          onToggleMenu={toggleMenu}
        />

        {/* Mobile Drawer - Mobile only */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-40 flex flex-col items-center justify-center bg-background/95 backdrop-blur-sm overflow-y-auto p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-main-text">Tamim Zia</h2>
              <p className="mt-2 text-secondary-text">Full Stack Developer</p>
            </div>
            <Navigation className="space-y-4" activeId={activeNavId} />
            <button
              onClick={closeMenu}
              className="mt-8 w-full btn-secondary"
            >
              Close Menu
            </button>
            <div className="mt-6">
              <a href="#contact" className="w-full btn-primary">
                {hireMeText}
              </a>
            </div>
          </div>
        )}

        {/* Main content wrapper */}
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-12">
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-main-text">Tamim Zia</h3>
              <p className="text-secondary-text">Full Stack Developer</p>
            </div>
            <p className="text-secondary-text max-w-2xl mx-auto">
              Building software that solves real problems.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-secondary-text hover:text-primary transition-colors"
                >
                  {link.icon && <link.icon className="h-4 w-4" aria-hidden="true" />}
                  <span>{link.platform}</span>
                </a>
              ))}
            </div>
            <p className="text-xs text-muted-text">
              © {new Date().getFullYear()} Tamim Zia. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}