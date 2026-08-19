import React from 'react'
import { navigationLinks } from '@/data/links'

interface NavigationProps {
  className?: string
  activeId?: string | null
  onNavigate?: () => void
}

export const Navigation: React.FC<NavigationProps> = ({ className, activeId, onNavigate }) => {
  return (
    <nav className={`${className} space-y-2`} aria-label="Primary">
      {navigationLinks.map((nav) => {
        const isActive = nav.id === activeId
        return (
          <a
            key={nav.id}
            href={nav.url}
            aria-current={isActive ? 'page' : undefined}
            onClick={onNavigate}
            className={`block px-4 py-3 rounded-md transition-colors ${
              isActive
                ? 'bg-primary text-white'
                : 'text-main-text hover:bg-primary hover:text-white'
            }`}
          >
            <span className="flex items-center gap-3">
              {/* Using a simple dot as placeholder for icon */}
              <span className="h-3 w-3 flex items-center justify-center" aria-hidden="true">
                <div
                  className={`h-1.5 w-1.5 rounded-full ${
                    isActive ? 'bg-white' : 'bg-primary'
                  }`}
                />
              </span>
              <span>{nav.title}</span>
            </span>
          </a>
        )
      })}
    </nav>
  )
}