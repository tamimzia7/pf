import React from 'react'
import * as lucide from 'lucide-react'
import { navigationLinks } from '@/data/links'

interface NavigationProps {
  className?: string
}

export const Navigation: React.FC<NavigationProps> = ({ className }) => {
  return (
    <nav className={`${className} space-y-2`}>
      {navigationLinks.map((nav) => (
        <a
          key={nav.id}
          href={nav.url}
          className="block px-4 py-3 text-main-text hover:bg-primary hover:text-white rounded-md transition-colors"
        >
          <span className="flex items-center gap-3">
            {/* Using a simple dot as placeholder for icon */}
            <span className="h-3 w-3 flex items-center justify-center">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            <span>{nav.title}</span>
          </span>
        </a>
      ))}
    </nav>
  )
}