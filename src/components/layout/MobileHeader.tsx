import React from 'react'
import * as lucide from 'lucide-react'

interface MobileHeaderProps {
  isMenuOpen: boolean
  onToggleMenu: () => void
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({ isMenuOpen, onToggleMenu }) => {
  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 z-50 flex h-14 items-center justify-between px-4 bg-background border-b border-border">
      <div className="text-xl font-bold text-main-text">
        Tamim Zia
      </div>
      <button
        onClick={onToggleMenu}
        className="p-2 rounded-md hover:bg-primary-hover text-main-text"
        aria-label="Open menu"
      >
        {isMenuOpen ? <lucide.X className="h-5 w-5" /> : <lucide.Menu className="h-5 w-5" />}
      </button>
    </header>
  )
}