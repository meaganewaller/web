import * as React from 'react'
import cn from '@/utils/cn'

export const Title = ({
  children,
  highlighted = false,
  level = 1,
  className,
  ...props
}: {
  children: React.ReactNode
  highlighted?: boolean
  level?: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  return (
    <Tag
      className={cn(
        'relative font-heading font-bold text-neutral-900 dark:text-neutral-100 dark:text-opacity-90 leading-tight mt-8 mb-4',
        {
          'text-5xl lg:text-7xl': level === 1,
          'text-4xl lg:text-5xl': level === 2,
          'text-3xl lg:text-4xl': level === 3,
          'text-2xl lg:text-3xl': level === 4,
          'text-xl lg:text-2xl': level === 5,
          'text-lg lg:text-xl': level === 6,
        },
        className,
      )}
      {...props}
    >
      {highlighted ? (
        <span
          className={cn('absolute hidden xl:block text-neutral-500', {
            '-left-16': level === 1,
            '-left-12': level === 2,
            '-left-8': level === 3,
            '-left-4': level >= 4,
          })}
        >
          #
        </span>
      ) : null}

      {children}
    </Tag>
  )
}

export default Title
