import { fireEvent, render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Button from './Button'

describe('Button', () => {
  it('renders the button with given children', () => {
    render(<Button>Add to Basket</Button>)
    expect(screen.getByRole('button')).toHaveTextContent('Add to Basket')
  })

  // Disabled button does not run click action
  // Loading state behavior
  // One additional useful behavior of your choice

  describe('When disabled', () => {})
})
