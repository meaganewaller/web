'use client'

import tw, { styled, css, theme } from 'twin.macro'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
  isSmall?: boolean
}

export const Button = styled.button(({ variant, isSmall }: ButtonProps) => [
  tw`rounded-full transform duration-75 border-2 font-pixel`,
  tw`hocus:(scale-105 text-yellow-800 bg-yellow-200 border-yellow-700)`,
  variant === 'primary' && tw`bg-purple-200 text-purple-600 border-purple-400`,

  variant === 'secondary' && [
    css`
      box-shadow: 0 0 0 1px ${theme`colors.blue.500`} inset;
    `,
    tw`border-yellow-600`,
  ],
  isSmall ? tw`text-xs px-2 py-0.5` : tw`text-sm px-3 py-1`,
])
