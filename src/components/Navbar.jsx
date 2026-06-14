import { useState } from 'react'

import { navLinks } from '../data/content'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="#hero" className="text-sm font-semibold text-[var(--color-accent)]">
          Clawd Barkley
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-[var(--color-border)] px-3 py-2 text-sm text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-white md:hidden"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
          <span aria-hidden="true" className="text-lg leading-none">
            {isOpen ? '×' : '☰'}
          </span>
        </button>

        <ul className="hidden items-center gap-6 text-sm md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[var(--color-text-dim)] transition-colors hover:text-[var(--color-text)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div
        id="primary-navigation"
        className={`border-t border-[var(--color-border)] bg-[var(--color-bg)]/95 md:hidden ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="mx-auto grid max-w-4xl gap-1 px-4 py-3 sm:px-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block rounded-md px-3 py-3 text-sm text-[var(--color-text-dim)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
