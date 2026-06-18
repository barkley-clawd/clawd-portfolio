import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import Navbar from './Navbar'

describe('Navbar', () => {
  it('opens the mobile menu and links are accessible', async () => {
    render(<Navbar />)

    fireEvent.click(screen.getByRole('button', { name: /open menu/i }))

    expect(screen.getByRole('navigation', { name: /primary navigation/i })).toBeInTheDocument()
    expect(within(screen.getByRole('navigation')).getAllByRole('link', { name: 'About' })).toHaveLength(2)
  })
})
