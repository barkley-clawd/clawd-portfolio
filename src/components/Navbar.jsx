import { useState, useRef, useEffect } from 'react'

import { navLinks } from '../data/content'
import useActiveSection from '../hooks/useActiveSection'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)
  const firstLinkRef = useRef(null)
  const sectionIds = navLinks.map((l) => l.href.replace('#', ''))
  const activeId = useActiveSection(sectionIds)

  // Escape key handler
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    if (isOpen) document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [isOpen])

  // Scroll lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Focus trap
  useEffect(() => {
    if (isOpen && firstLinkRef.current) {
      firstLinkRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen || !menuRef.current) return

    const menu = menuRef.current
    const focusable = menu.querySelectorAll('a')
    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    const handleTab = (e) => {
      if (e.key !== 'Tab') return
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    menu.addEventListener('keydown', handleTab)
    return () => menu.removeEventListener('keydown', handleTab)
  }, [isOpen])

  return (
    <nav aria-label="Primary navigation" className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="#hero" className="text-sm font-semibold text-[var(--color-accent)]">
          Clawd
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
          {navLinks.map((link) => {
            const isActive = activeId === link.href.replace('#', '')
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={isActive ? 'text-[var(--color-accent)] transition-colors' : 'text-[var(--color-text-dim)] transition-colors hover:text-[var(--color-text)]'}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>
      </div>

      <div
        id="primary-navigation"
        ref={menuRef}
        className={`border-t border-[var(--color-border)] bg-[var(--color-bg)]/95 md:hidden ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="mx-auto grid max-w-4xl gap-1 px-4 py-3 sm:px-6">
          {navLinks.map((link, index) => {
            const isActive = activeId === link.href.replace('#', '')
            return (
              <li key={link.href}>
                <a
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={link.href}
                  className={`block rounded-md px-3 py-3 text-sm transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-text)] ${
                    isActive ? 'bg-[var(--color-surface)] text-[var(--color-accent)]' : 'text-[var(--color-text-dim)]'
                  }`}
                  aria-current={isActive ? 'true' : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
