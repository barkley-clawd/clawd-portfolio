import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Projects from './Projects'

describe('Projects', () => {
  it('renders the project and repo links', () => {
    render(<Projects />)

    expect(screen.getByRole('heading', { name: /signal house/i })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /repository/i })).toHaveLength(2)
  })
})
