import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'
import MagnifyingGlass from '../../icons/MagnifyingGlass'
import { ButtonProps } from './types'
const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: { control: 'text' },
    onClick: { table: { type: { summary: '() => void' } } },
    disabled: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' }, type: { summary: 'boolean' } },
    },
    isLoading: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' }, type: { summary: 'boolean' } },
    },
    className: { control: 'text', table: { type: { summary: 'string' } } },
    'data-testid': { control: 'text', table: { type: { summary: 'string' } } },
    icon: {
      table: {
        type: {
          detail:
            'An icon to display inside the button. Should be a React component that renders an SVG.',
          summary: "{ element: React.ReactNode, position: 'left' | 'right' }",
        },
      },
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit'],
      table: { defaultValue: { summary: 'button' }, type: { summary: "'button' | 'submit'" } },
    },
    'aria-label': { control: 'text', table: { type: { summary: 'string' } } },
    ref: { table: { type: { summary: 'React.RefObject<HTMLButtonElement>' } } },
  },
  args: {
    children: 'Add to Basket',
    disabled: false,
    isLoading: false,
    'data-testid': 'add-to-basket-cta',
    type: 'button',
    'aria-label': 'Add this item to your basket',
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

export const WithLeftIcon: StoryObj<typeof Button> = {
  args: {
    ...meta.args,
    icon: { element: <MagnifyingGlass />, position: 'left' },
  },
}

export const WithRightIcon: StoryObj<typeof Button> = {
  args: {
    ...meta.args,
    icon: { element: <MagnifyingGlass />, position: 'right' },
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

const VARIANT_MAP: Record<string, string> = {
  primary: '',
  secondary: 'button--variant-secondary',
  ghost: 'button--variant-ghost',
}

const SIZE_MAP: Record<string, string> = {
  sm: 'button--size-sm',
  md: '',
  lg: 'button--size-lg',
}

const makeAllSizesWithPropsStory = (
  extraProps: Partial<ButtonProps> = {},
): StoryObj<typeof Button> => ({
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "This story is purely for displaying purposes and it's code should not be used for an example.",
      },
    },
  },
  render: () => {
    return (
      <div className="grid grid-cols-3 grid-rows-3 gap-1 items-start justify-items-start">
        {Object.keys(SIZE_MAP).flatMap((size) =>
          Object.keys(VARIANT_MAP).map((variant) => (
            <Button
              key={`${String(size)}-${String(variant)}`}
              className={`${SIZE_MAP[size]} ${VARIANT_MAP[variant]}`.trim()}
              onClick={() => {}}
              {...extraProps}
            >
              {`${String(size)} ${String(variant)}`}
            </Button>
          )),
        )}
      </div>
    )
  },
})

export const AllVariantsAndSizes: StoryObj<typeof Button> = makeAllSizesWithPropsStory()

export const AllDisabledStatesAndSizes: StoryObj<typeof Button> = makeAllSizesWithPropsStory({
  disabled: true,
})

export const AllLoadingStatesAndSizes: StoryObj<typeof Button> = makeAllSizesWithPropsStory({
  isLoading: true,
})
