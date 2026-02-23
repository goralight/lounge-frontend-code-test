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
      className={buttonClasses}
      disabled={disabled || isLoading}
      data-testid={dataTestId}
      onClick={onClick}
      type={type}
    >
      {isLoading ? <Spinner /> : content}
    </button>
  )
}

export default Button
