import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Button from './Button'

describe('Button', () => {
  it('renders the button with given children', () => {
    render(<Button onClick={() => {}}>Add to Basket</Button>)
    expect(screen.getByRole('button')).toHaveTextContent('Add to Basket')
  })
})
