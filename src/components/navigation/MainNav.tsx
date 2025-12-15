import { useState } from 'react'
import { Button } from '../ui/Button'

const navLinks = [
  { label: 'Admin & Operations', href: '#admin-operations' },
  { label: 'AI Learning', href: '#ai-learning' },
  { label: 'Gamification', href: '#gamification' },
  { label: 'Resources', href: '#resource-library' },
  { label: 'Future Tools', href: '#future-tools' }
]

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 bg-[#020314]/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <a href="#" className="flex items-center gap-3 text-lg font-semibold tracking-wide text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-2xl">
            ⚡
          </span>
          <span>EduPulse</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm font-semibold uppercase tracking-[0.18em] text-white/70 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile actions */}
        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle menu"
            aria-controls="main-nav-panel"
            onClick={() => setIsOpen((s) => !s)}
            className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/5 lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <Button variant="ghost" size="sm" className="hidden lg:inline-flex">
            Request Demo
          </Button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {isOpen ? (
        <div id="main-nav-panel" className="lg:hidden transition-[max-height] duration-300 overflow-hidden max-h-96">
          <div className="px-6 pb-6">
            <nav className="flex flex-col gap-3 text-white/90">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-4">
              <Button variant="primary" size="md" className="w-full">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
