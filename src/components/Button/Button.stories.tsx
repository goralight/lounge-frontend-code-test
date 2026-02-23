import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { action } from 'storybook/actions'

import Button from './Button'
import MagnifyingGlass from '../../icons/MagnifyingGlass'
const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: { control: 'text' },
    onClick: { action: 'onClick' },
    disabled: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    className: { control: 'text' },
    'data-testid': { control: 'text' },
  },
  args: {
    children: 'Add to Basket',
    onClick: action('onClick', {}),
    disabled: false,
    isLoading: false,
    className: '',
    'data-testid': 'add-to-basket-cta',
  },
} satisfies Meta<typeof Button>
export default meta

export const Primary: StoryObj<typeof Button> = {}

export const Secondary: StoryObj<typeof Button> = {
  args: {
    ...meta.args,
    className: 'button--variant-secondary',
  },
}

export const Ghost: StoryObj<typeof Button> = {
  args: {
    ...meta.args,
    className: 'button--variant-ghost',
  },
}

export const Small: StoryObj<typeof Button> = {
  args: {
    ...meta.args,
    className: 'button--size-sm',
  },
}

export const Large: StoryObj<typeof Button> = {
  args: {
    ...meta.args,
    className: 'button--size-lg',
  },
}

export const FullWidth: StoryObj<typeof Button> = {
  args: {
    ...meta.args,
    className: 'w-full',
  },
  render: (args) => {
    return (
      <div className="w-[600px]">
        <Button {...args} onClick={action('onClick', {})}></Button>
      </div>
    )
  },
}

export const WithLeftIcon: StoryObj<typeof Button> = {
  args: {
    ...meta.args,
    icon: { icon: <MagnifyingGlass />, position: 'left' },
  },
}

export const WithRightIcon: StoryObj<typeof Button> = {
  args: {
    ...meta.args,
    icon: { icon: <MagnifyingGlass />, position: 'right' },
  },
}

export const Disabled: StoryObj<typeof Button> = {
  args: {
    ...meta.args,
    disabled: true,
  },
}

export const IsLoading: StoryObj<typeof Button> = {
  args: {
    ...meta.args,
    isLoading: true,
  },
}

export const AllSizesAndVariants: StoryObj<typeof Button> = {
  render: () => {
    const variantMap: Record<string, string> = {
      primary: '',
      secondary: 'button--variant-secondary',
      ghost: 'button--variant-ghost',
    }

    const sizeMap: Record<string, string> = {
      sm: 'button--size-sm',
      md: '',
      lg: 'button--size-lg',
    }

    return (
      <div className="grid grid-cols-3 grid-rows-3 gap-2 p-4 items-start justify-items-start">
        {Object.keys(sizeMap).map((size) => (
          <>
            {Object.keys(variantMap).map((variant) => (
              <Button
                key={`${size}-${variant}`}
                className={`${sizeMap[size]} ${variantMap[variant]}`.trim()}
                onClick={action('onClick', {})}
              >
                Add to Basket
              </Button>
            ))}
          </>
        ))}
      </div>
    )
  },
}
