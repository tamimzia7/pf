import React, { useState, useRef, useCallback, useEffect } from 'react'
import { Sparkles, X, Send, Loader2 } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  text: string
}

interface Position {
  x: number
  y: number
}

const SECTION_IDS = [
  'home',
  'about',
  'what-i-do',
  'skills',
  'projects',
  'services',
  'resume',
  'testimonials',
  'blog',
  'contact',
]

function detectSectionAtPoint(x: number, y: number): string | null {
  const aiEl = document.querySelector('[data-gemini-ai]')
  if (aiEl) (aiEl as HTMLElement).style.pointerEvents = 'none'

  const el = document.elementFromPoint(x, y)

  if (aiEl) (aiEl as HTMLElement).style.pointerEvents = ''

  if (!el) return null

  let current: HTMLElement | null = el as HTMLElement
  while (current && current !== document.body) {
    if (current.tagName === 'SECTION' && current.id && SECTION_IDS.includes(current.id)) {
      return current.id
    }
    current = current.parentElement
  }

  return null
}

function formatSectionName(id: string): string {
  const names: Record<string, string> = {
    home: 'Home',
    about: 'About',
    'what-i-do': 'What I Do',
    skills: 'Skills',
    projects: 'Projects',
    services: 'Services',
    resume: 'Resume',
    testimonials: 'Testimonials',
    blog: 'Blog',
    contact: 'Contact',
  }
  return names[id] || id
}

export const GeminiAI: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = useState<Position>({ x: 20, y: 20 })
  const [isDragging, setIsDragging] = useState(false)
  const [currentSection, setCurrentSection] = useState<string | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isExplaining, setIsExplaining] = useState(false)

  const startPos = useRef<Position>({ x: 0, y: 0 })
  const startMouse = useRef<Position>({ x: 0, y: 0 })
  const hasMoved = useRef(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const dwellTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const hoveredSection = useRef<string | null>(null)
  const lastExplainedSection = useRef<string | null>(null)

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom])

  useEffect(() => {
    const setInitialPosition = () => {
      const vw = window.innerWidth
      const vh = window.innerHeight
      setPosition({ x: vw - 80, y: vh - 160 })
    }
    setInitialPosition()
    window.addEventListener('resize', setInitialPosition)
    return () => window.removeEventListener('resize', setInitialPosition)
  }, [])

  const fetchSectionDescription = async (sectionId: string) => {
    setIsExplaining(true)

    try {
      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sectionId }),
      })

      if (!res.ok) throw new Error('Failed to fetch')

      const data = await res.json()

      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: data.text },
      ])
      lastExplainedSection.current = sectionId
    } catch {
      const sectionName = formatSectionName(sectionId)
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: `This is the ${sectionName} section of Tamim's portfolio. Feel free to explore!`,
        },
      ])
      lastExplainedSection.current = sectionId
    } finally {
      setIsExplaining(false)
    }
  }

  const startDwellTimer = useCallback(
    (sectionId: string) => {
      // Clear any existing timer
      if (dwellTimer.current) {
        clearTimeout(dwellTimer.current)
        dwellTimer.current = null
      }

      hoveredSection.current = sectionId
      setIsExplaining(false)

      // Start new dwell timer — only trigger if section wasn't already explained
      dwellTimer.current = setTimeout(() => {
        // Verify the orb is still over the same section
        const orbCenterX = position.x + 28
        const orbCenterY = position.y + 28
        const stillHere = detectSectionAtPoint(orbCenterX, orbCenterY)

        if (stillHere === sectionId && lastExplainedSection.current !== sectionId) {
          fetchSectionDescription(sectionId)
        }
        dwellTimer.current = null
      }, 700)
    },
    [position.x, position.y]
  )

  const cancelDwellTimer = useCallback(() => {
    if (dwellTimer.current) {
      clearTimeout(dwellTimer.current)
      dwellTimer.current = null
    }
    hoveredSection.current = null
    setIsExplaining(false)
  }, [])

  const handleDragStart = useCallback(
    (clientX: number, clientY: number) => {
      setIsDragging(true)
      hasMoved.current = false
      startMouse.current = { x: clientX, y: clientY }
      startPos.current = { ...position }
    },
    [position]
  )

  const handleDragMove = useCallback(
    (clientX: number, clientY: number) => {
      if (!isDragging) return

      const dx = clientX - startMouse.current.x
      const dy = clientY - startMouse.current.y

      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
        hasMoved.current = true
      }

      const vw = window.innerWidth
      const vh = window.innerHeight
      const btnSize = 56

      const newX = Math.max(0, Math.min(vw - btnSize, startPos.current.x + dx))
      const newY = Math.max(0, Math.min(vh - btnSize, startPos.current.y + dy))

      setPosition({ x: newX, y: newY })

      // Detect section during drag — dwell timer runs continuously
      const orbCenterX = newX + btnSize / 2
      const orbCenterY = newY + btnSize / 2
      const section = detectSectionAtPoint(orbCenterX, orbCenterY)

      if (section && section !== hoveredSection.current) {
        // Orb entered a new section
        setCurrentSection(section)
        startDwellTimer(section)
      } else if (!section && hoveredSection.current) {
        // Orb left all sections
        cancelDwellTimer()
        setCurrentSection(null)
      }
    },
    [isDragging, startDwellTimer, cancelDwellTimer]
  )

  const handleDragEnd = useCallback(
    (clientX: number, clientY: number) => {
      if (!isDragging) return
      setIsDragging(false)

      if (!hasMoved.current) {
        // It was a click, not a drag
        setIsOpen((prev) => !prev)
        cancelDwellTimer()
        return
      }

      // Final detection on release — keep dwell timer running if still in same section
      const section = detectSectionAtPoint(clientX, clientY)
      if (section && section !== hoveredSection.current) {
        setCurrentSection(section)
        startDwellTimer(section)
      } else if (!section) {
        cancelDwellTimer()
        setCurrentSection(null)
      }
      // If still in same section, let the dwell timer finish naturally
    },
    [isDragging, startDwellTimer, cancelDwellTimer]
  )

  // Mouse events
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => handleDragMove(e.clientX, e.clientY)
    const onMouseUp = (e: MouseEvent) => handleDragEnd(e.clientX, e.clientY)

    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseup', onMouseUp)
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [isDragging, handleDragMove, handleDragEnd])

  // Touch events
  useEffect(() => {
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        e.preventDefault()
        handleDragMove(e.touches[0].clientX, e.touches[0].clientY)
      }
    }
    const onTouchEnd = (e: TouchEvent) => {
      const touch = e.changedTouches[0]
      handleDragEnd(touch.clientX, touch.clientY)
    }

    if (isDragging) {
      window.addEventListener('touchmove', onTouchMove, { passive: false })
      window.addEventListener('touchend', onTouchEnd)
    }

    return () => {
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [isDragging, handleDragMove, handleDragEnd])

  // Cleanup dwell timer on unmount
  useEffect(() => {
    return () => {
      if (dwellTimer.current) clearTimeout(dwellTimer.current)
    }
  }, [])

  const handleSendMessage = async () => {
    const text = inputValue.trim()
    if (!text || isLoading) return

    setInputValue('')
    setMessages((prev) => [...prev, { role: 'user', text }])
    setIsLoading(true)

    try {
      const sectionContext = currentSection
        ? `The visitor is currently viewing the "${currentSection}" section. `
        : ''

      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sectionId: currentSection || 'home',
          message: sectionContext + `Visitor asks: ${text}`,
        }),
      })

      if (!res.ok) throw new Error('Failed to fetch')

      const data = await res.json()
      setMessages((prev) => [...prev, { role: 'assistant', text: data.text }])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: "I'm having trouble connecting right now. Please try again in a moment.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div
      data-gemini-ai
      style={{
        position: 'fixed',
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: 9999,
        touchAction: 'none',
      }}
    >
      {/* Chat Panel */}
      {isOpen && (
        <div
          className="gemini-chat-panel"
          style={{
            position: 'absolute',
            bottom: '70px',
            right: 0,
            width: '340px',
            maxWidth: 'calc(100vw - 32px)',
            background: '#ffffff',
            borderRadius: '16px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)',
            border: '1px solid #E5E7EB',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            maxHeight: '420px',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '14px 16px',
              background: 'linear-gradient(135deg, #16A34A 0%, #15803D 100%)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={18} />
              <span style={{ fontWeight: 600, fontSize: '14px' }}>Portfolio Guide</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'rgba(255,255,255,0.2)',
                border: 'none',
                borderRadius: '8px',
                padding: '4px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                color: '#fff',
              }}
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              minHeight: '200px',
              maxHeight: '280px',
            }}
          >
            {messages.length === 0 && !isLoading && !isExplaining && (
              <div
                style={{
                  textAlign: 'center',
                  color: '#9CA3AF',
                  fontSize: '13px',
                  padding: '32px 16px',
                  lineHeight: '1.6',
                }}
              >
                <Sparkles size={24} style={{ margin: '0 auto 8px', color: '#16A34A' }} />
                <p style={{ margin: 0, fontWeight: 500, color: '#6B7280' }}>
                  AI Portfolio Guide
                </p>
                <p style={{ margin: '4px 0 0' }}>
                  Drag me over any section to learn more, or ask me anything!
                </p>
              </div>
            )}

            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%',
                }}
              >
                <div
                  style={{
                    padding: '10px 14px',
                    borderRadius: '12px',
                    fontSize: '13px',
                    lineHeight: '1.5',
                    background: msg.role === 'user' ? '#16A34A' : '#F3F4F6',
                    color: msg.role === 'user' ? '#fff' : '#111827',
                    borderBottomLeftRadius: msg.role === 'assistant' ? '4px' : '12px',
                    borderBottomRightRadius: msg.role === 'user' ? '4px' : '12px',
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {(isLoading || isExplaining) && (
              <div style={{ alignSelf: 'flex-start', maxWidth: '85%' }}>
                <div
                  style={{
                    padding: '10px 14px',
                    borderRadius: '12px',
                    borderBottomLeftRadius: '4px',
                    background: '#F3F4F6',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '13px',
                    color: '#6B7280',
                  }}
                >
                  <Loader2 size={14} className="gemini-spin" />
                  Thinking...
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div
            style={{
              padding: '10px 12px',
              borderTop: '1px solid #E5E7EB',
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
            }}
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about Tamim's work..."
              style={{
                flex: 1,
                padding: '8px 12px',
                borderRadius: '8px',
                border: '1px solid #E5E7EB',
                fontSize: '13px',
                outline: 'none',
                fontFamily: 'Inter, sans-serif',
                background: '#F9FAFB',
              }}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isLoading}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                border: 'none',
                background: inputValue.trim() && !isLoading ? '#16A34A' : '#E5E7EB',
                color: inputValue.trim() && !isLoading ? '#fff' : '#9CA3AF',
                cursor: inputValue.trim() && !isLoading ? 'pointer' : 'not-allowed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.15s ease',
              }}
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <div
        onMouseDown={(e) => {
          e.preventDefault()
          handleDragStart(e.clientX, e.clientY)
        }}
        onTouchStart={(e) => {
          if (e.touches.length === 1) {
            handleDragStart(e.touches[0].clientX, e.touches[0].clientY)
          }
        }}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #16A34A 0%, #15803D 100%)',
          boxShadow: isDragging
            ? '0 8px 24px rgba(22,163,74,0.4)'
            : '0 4px 16px rgba(22,163,74,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: isDragging ? 'grabbing' : 'grab',
          transition: 'box-shadow 0.2s ease, transform 0.15s ease',
          transform: isDragging ? 'scale(1.1)' : 'scale(1)',
          userSelect: 'none',
          WebkitUserSelect: 'none',
        }}
      >
        <Sparkles size={24} color="#fff" />
      </div>

      {/* Section indicator */}
      {currentSection && (
        <div
          style={{
            position: 'absolute',
            bottom: '64px',
            right: 0,
            background: '#fff',
            padding: '6px 12px',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            fontSize: '12px',
            color: '#6B7280',
            whiteSpace: 'nowrap',
            border: '1px solid #E5E7EB',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          {isExplaining && (
            <Loader2 size={12} className="gemini-spin" style={{ color: '#16A34A' }} />
          )}
          {!isExplaining && '📍'} {formatSectionName(currentSection)}
        </div>
      )}
    </div>
  )
}
