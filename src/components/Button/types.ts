import { type ComponentPropsWithRef } from 'react'

interface IconProps {
  element: React.ReactNode
  position: 'left' | 'right'
}

export interface ButtonProps extends Omit<ComponentPropsWithRef<'button'>, 'children'> {
  children: string
  isLoading?: boolean
  icon?: IconProps
  'data-testid'?: string
  // for defaulting to type button
  type?: 'button' | 'submit' | 'reset' | undefined
}
