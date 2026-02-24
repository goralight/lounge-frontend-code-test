import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button, type ButtonProps } from '.'
import MagnifyingGlass from '../../icons/MagnifyingGlass'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A standard button component with multiple variants and sizes. Supports loading and disabled states, along with native `<button>` attributes such as; `onClick`, `ref`, `aira-label`, `className`, etc - Even though not explicity mentioned in the below table.',
      },
    },
    controls: { disable: true },
  },
  argTypes: {
    children: { control: 'text', table: { type: { summary: 'string' } } },
    isLoading: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' }, type: { summary: 'boolean' } },
    },
    icon: {
      table: {
        type: {
          detail:
            'An icon to display inside the button. Should be a React component that renders an SVG.',
          summary: "{ element: React.ReactNode, position: 'left' | 'right' }",
        },
      },
    },
    'data-testid': { control: 'text', table: { type: { summary: 'string' } } },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset', undefined],
      table: {
        defaultValue: { summary: 'button' },
        type: { summary: "'button' | 'submit' | 'reset' | undefined'" },
      },
    },
  },
  args: {
    children: 'Add to Basket',
    isLoading: false,
    icon: undefined,
    'data-testid': 'add-to-basket-cta',
    type: 'button',
  },
} satisfies Meta<typeof Button>
export default meta

export const Primary: StoryObj<typeof Button> = {}

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

// Due to primary and md being the default (no className), need to filter out the empty strings
const CLASSNAME_OPTIONS = Object.fromEntries(
  Object.entries(VARIANT_MAP)
    .flatMap(([_, variantClass]) =>
      Object.entries(SIZE_MAP).map(([_, sizeClass]) => {
        const className = [variantClass, sizeClass].filter(Boolean).join(' ')
        return [className]
      }),
    )
    .filter(([className]) => className),
)

export const Playground: StoryObj<typeof Button> = {
  parameters: {
    controls: { disable: false },
  },
  argTypes: {
    ...meta.argTypes,
    className: {
      control: 'select',
      options: Object.keys(CLASSNAME_OPTIONS),
      table: { type: { summary: 'string' } },
    },
    disabled: { control: 'boolean', table: { type: { summary: 'boolean' } } },
  },
  args: {
    ...meta.args,
    className: '',
    disabled: false,
    // Both the fn() and action() work, but they would lag the storybook and would track multiple ghost clicks
    // Might be an issue with my machine though. But opted for a simple log.
    onClick: () => console.log('clicked'),
  },
}

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

export const DisabledWithIcon: StoryObj<typeof Button> = {
  args: {
    ...meta.args,
    disabled: true,
    icon: { element: <MagnifyingGlass />, position: 'left' },
  },
}

export const IsLoading: StoryObj<typeof Button> = {
  args: {
    ...meta.args,
    isLoading: true,
    'aria-label': 'Loading...',
  },
}

const makeAllSizesWithPropsStory = (
  extraProps: Partial<ButtonProps> = {},
): StoryObj<typeof Button> => ({
  parameters: {
    docs: {
      description: {
        story: 'This story is purely for displaying purposes and its code should not be used.',
      },
    },
  },
  render: () => {
    return (
      <div className="grid grid-cols-3 grid-rows-3 gap-1 items-start justify-items-start">
        {Object.keys(SIZE_MAP).map((size) =>
          Object.keys(VARIANT_MAP).map((variant) => (
            <Button
              key={`${size}-${variant}`}
              className={`${SIZE_MAP[size]} ${VARIANT_MAP[variant]}`.trim()}
              {...extraProps}
            >
              {`${size} ${variant}`}
            </Button>
          )),
        )}
      </div>
    )
  },
})

export const AllVariantsAndSizes: StoryObj<typeof Button> = makeAllSizesWithPropsStory()

export const AllDisabledStatesWithVariantsAndSizes: StoryObj<typeof Button> =
  makeAllSizesWithPropsStory({
    disabled: true,
  })

export const AllLoadingStatesWithVariantsAndSizes: StoryObj<typeof Button> =
  makeAllSizesWithPropsStory({
    isLoading: true,
    'aria-label': 'Loading...',
  })

export const AllLeftIconsWithVariantsAndSizes: StoryObj<typeof Button> = makeAllSizesWithPropsStory(
  {
    icon: { element: <MagnifyingGlass />, position: 'left' },
  },
)

export const AllRightIconsWithVariantsAndSizes: StoryObj<typeof Button> =
  makeAllSizesWithPropsStory({
    icon: { element: <MagnifyingGlass />, position: 'right' },
  })

export const DisabledIconWithVariantsAndSizes: StoryObj<typeof Button> = makeAllSizesWithPropsStory(
  {
    icon: { element: <MagnifyingGlass />, position: 'left' },
    disabled: true,
  },
)
