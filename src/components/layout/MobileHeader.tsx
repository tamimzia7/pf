import React from 'react'
import * as lucide from 'lucide-react'

interface MobileHeaderProps {
  isMenuOpen: boolean
  onToggleMenu: () => void
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({ isMenuOpen, onToggleMenu }) => {
  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 z-[1000] flex h-14 items-center justify-between px-4 bg-white border-b border-border">
      <div className="flex items-center gap-2 min-w-0">
        <div className="h-8 w-8 overflow-hidden rounded-md flex-shrink-0">
          <img
            src="/profile.png"
            alt="Tamim Zia"
            className="h-full w-full object-cover"
          />
        </div>
        <span className="text-lg font-bold text-main-text truncate">
          Tamim Zia
        </span>
      </div>
      <button
        onClick={onToggleMenu}
        className="p-2 rounded-md hover:bg-primary/10 text-main-text"
        aria-label="Open menu"
      >
        {isMenuOpen ? <lucide.X className="h-5 w-5" /> : <lucide.Menu className="h-5 w-5" />}
      </button>
    </header>
  )
}