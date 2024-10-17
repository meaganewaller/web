'use client'

import cn from '@/utils/cn'
import * as React from 'react'
import { ButtonProps, Button as RACButton } from 'react-aria-components'

export const buttonStyle =
  'text-base uppercase py-5 px-10 font-bold inline-flex items-center justify-center gap-2 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 duration-200 rounded-sm focus:ring-pink-500 ring-offset-background bg-pink-600 text-pink-100 hover:bg-pink-700 data-[pressed]:bg-pink-500' +
  ' ' +
  'data-[variant=accent]:bg-pink-600 data-[variant=accent]:text-pink-100 data-[variant=accent]:hover:bg-pink-700 data-[variant=accent]:data-[pressed]:bg-pink-500 data-[variant=accent]:active:bg-pink-500' +
  ' ' +
  'dark:bg-lime-800 dark:text-lime-100 dark:hover:bg-lime-700 dark:data-[pressed]:bg-lime-600 dark:active:bg-lime-600' +
  ' ' +
  'data-[variant=default]:bg-purple-500 data-[variant=default]:text-purple-100 data-[variant=default]:hover:bg-purple-600 data-[variant=default]:data-[pressed]:bg-purple-700 data-[variant=default]:active:bg-purple-700'

export type ButtonVariant = 'accent' | 'default'

const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & {
    variant?: ButtonVariant
    disabled?: boolean
  }
>(({ variant = 'accent', className = '', disabled, isDisabled, ...props }, ref) => {
  return (
    <RACButton
      {...props}
      ref={ref}
      isDisabled={disabled || isDisabled}
      className={cn(buttonStyle, className)}
      data-variant={variant}
    />
  )
})

Button.displayName = 'Button'

export default Button
