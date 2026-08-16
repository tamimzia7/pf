import React, { useState, useEffect } from 'react'
import { Sidebar } from './Sidebar'
import { MobileHeader } from './MobileHeader'
import { Navigation } from './Navigation'
import { navigationLinks, hireMeText } from '@/data/links'

interface PortfolioLayoutProps {
  children: React.ReactNode
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
    <div className="relative min-h-screen">
      {/* Sidebar - Desktop only */}
      <Sidebar />

      {/* Main content */}
      <main className={`lg:ml-64 lg:p-12 p-6 pt-4 lg:pt-0`}>
        {/* Mobile Header - Mobile only */}
        <MobileHeader
          isMenuOpen={isMenuOpen}
          onToggleMenu={toggleMenu}
        />

        {/* Mobile Drawer - Mobile only */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-40 flex flex-col items-center justify-center bg-background/90 backdrop-blur-sm">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-main-text">Tamim Zia</h2>
              <p className="mt-2 text-secondary-text">Full Stack Developer</p>
            </div>
            <Navigation className="space-y-4" />
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
        <div className="space-y-16">
          {children}
        </div>
      </main>
    </div>
  )
}