import React from 'react'
import { ButtonProps } from './types'
import Spinner from '../../icons/Spinner'

const Button = ({
  children,
  isLoading,
  icon,
  'data-testid': dataTestId,
  type = 'button',
  ...props
}: ButtonProps) => {
  const { disabled, className } = props
  const buttonClasses = [
    'button',
    className,
    (disabled || isLoading) && 'button--disabled',
    isLoading && 'button--loading',
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {icon?.position === 'left' && icon.element}
      {children}
      {icon?.position === 'right' && icon.element}
    </>
  )

  return (
    <button
      {...props}
      type={type}
      data-testid={dataTestId}
      className={buttonClasses}
      disabled={disabled || isLoading}
      aria-busy={isLoading || undefined}
    >
      <span className="button__content" aria-hidden={isLoading}>
        {content}
      </span>
      <span className="button__loading-spinner" aria-hidden={!isLoading}>
        <Spinner />
      </span>
    </button>
  )
}

export default Button
