interface IconProps {
  element: React.ReactNode
  position: 'left' | 'right'
}

export interface ButtonProps {
  children: string
  onClick: () => void
  disabled?: boolean
  isLoading?: boolean
  className?: string
  'data-testid'?: string
  icon?: IconProps
  type?: 'button' | 'submit'
  'aria-label'?: string
  ref?: React.RefObject<HTMLButtonElement>
}
