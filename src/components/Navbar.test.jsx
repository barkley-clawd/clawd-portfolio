import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import Navbar from './Navbar'

vi.mock('../hooks/useActiveSection', () => ({
  default: () => 'about',
}))

describe('Navbar', () => {
  it('opens the mobile menu and links are accessible', async () => {
    render(<Navbar />)

    fireEvent.click(screen.getByRole('button', { name: /open menu/i }))

    expect(screen.getByRole('navigation', { name: /primary navigation/i })).toBeInTheDocument()
    expect(within(screen.getByRole('navigation')).getAllByRole('link', { name: 'About' })).toHaveLength(2)
  })

  it('marks the active section link with aria-current', async () => {
    render(<Navbar />)

    const nav = screen.getByRole('navigation', { name: /primary navigation/i })
    const aboutLinks = within(nav).getAllByRole('link', { name: 'About' })

    expect(aboutLinks).toHaveLength(2)
    aboutLinks.forEach((link) => {
      expect(link).toHaveAttribute('aria-current', 'true')
    })
  })

  it('does not mark inactive links with aria-current', async () => {
    render(<Navbar />)

    const nav = screen.getByRole('navigation', { name: /primary navigation/i })
    const homeLinks = within(nav).getAllByRole('link', { name: 'Home' })

    homeLinks.forEach((link) => {
      expect(link).not.toHaveAttribute('aria-current')
    })
  })
})
