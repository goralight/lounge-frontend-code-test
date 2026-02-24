import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Button from './Button'
import MagnifyingGlass from '../../icons/MagnifyingGlass'

describe('Button', () => {
  it('renders with given children and correct default props', () => {
    render(<Button>Add to Basket</Button>)
    const button = screen.getByRole('button')
    const content = screen.getByTestId('content')
    const loadingSpinner = screen.getByTestId('loading-spinner')

    expect(button).toHaveTextContent('Add to Basket')
    expect(button).not.toBeDisabled()
    expect(button).not.toHaveAttribute('aria-busy')
    expect(button).toHaveAttribute('type', 'button')

    expect(content).toBeInTheDocument()
    expect(loadingSpinner).toBeInTheDocument()
    expect(content).not.toHaveAttribute('aria-hidden')
    expect(loadingSpinner).toHaveAttribute('aria-hidden', 'true')
  })

  it('should fire click action', async () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick}>Add to Basket</Button>)
    const button = screen.getByRole('button')

    const user = userEvent.setup()
    await user.click(button)
    expect(onClick).toHaveBeenCalled()
  })

  describe('When loading', () => {
    it('should show loading spinner', () => {
      render(<Button isLoading>Add to Basket</Button>)
      const button = screen.getByRole('button')
      const content = screen.getByTestId('content')
      const loadingSpinner = screen.getByTestId('loading-spinner')

      expect(button).toBeDisabled()
      expect(button).toHaveAttribute('aria-busy', 'true')

      expect(content).toHaveAttribute('aria-hidden', 'true')
      expect(loadingSpinner).not.toHaveAttribute('aria-hidden')
    })

    it('should not fire click action', async () => {
      const onClick = vi.fn()
      render(
        <Button isLoading onClick={onClick}>
          Add to Basket
        </Button>,
      )
      const button = screen.getByRole('button')

      const user = userEvent.setup()
      await user.click(button)
      expect(onClick).not.toHaveBeenCalled()
    })
  })

  describe('When disabled', () => {
    it('should be disabled', () => {
      render(<Button disabled>Add to Basket</Button>)
      const button = screen.getByRole('button')
      expect(button).toBeDisabled()
    })

    it('should not fire click action', async () => {
      const onClick = vi.fn()
      render(
        <Button disabled onClick={onClick}>
          Add to Basket
        </Button>,
      )
      const button = screen.getByRole('button')

      const user = userEvent.setup()
      await user.click(button)
      expect(onClick).not.toHaveBeenCalled()
    })
  })

  describe('When an icon is provided', () => {
    describe('When position is left', () => {
      it('should render the icon before children', () => {
        render(
          <Button icon={{ element: <MagnifyingGlass />, position: 'left' }}>Add to Basket</Button>,
        )
        const icon = screen.getByTestId('magnifying-glass')
        const content = screen.getByTestId('content')

        expect(icon).toBeInTheDocument()
        expect(content.firstChild).toBe(icon)
      })
    })
    describe('When position is right', () => {
      it('should render the icon after children', () => {
        render(
          <Button icon={{ element: <MagnifyingGlass />, position: 'right' }}>Add to Basket</Button>,
        )
        const icon = screen.getByTestId('magnifying-glass')
        const content = screen.getByTestId('content')

        expect(icon).toBeInTheDocument()
        expect(content.lastChild).toBe(icon)
      })
    })
  })
})
