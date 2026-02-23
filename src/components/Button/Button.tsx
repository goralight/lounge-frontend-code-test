import React from 'react'
import { ButtonProps } from './types'
import Spinner from '../../icons/Spinner'

const Button = ({
  children,
  onClick,
  disabled,
  isLoading,
  className,
  'data-testid': dataTestId,
  icon,
  type = 'button',
  'aria-label': ariaLabel,
  ref,
}: ButtonProps) => {
  const buttonClasses = [
    'button',
    className,
    disabled && 'button--disabled',
    isLoading && 'button--disabled button--loading',
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
      ref={ref}
      type={type}
      data-testid={dataTestId}
      className={buttonClasses}
      disabled={disabled || isLoading}
      onClick={onClick}
      aria-busy={isLoading || undefined}
      aria-disabled={disabled || undefined}
      aria-label={ariaLabel || undefined}
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
