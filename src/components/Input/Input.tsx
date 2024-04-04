import { forwardRef } from 'react'
import cn from '@/utils/cn'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          'flex w-full rounded-md border border-teal-500 bg-teal-100 px-3 py-2 text-sm ring-offset-teal-100/20 ring-offset-2 ring-1 ring-teal-300 focus:ring-2 focus:ring-orange-200 focus:outline-none transition-all duration-300 ease-in-out',
          'placeholder:text-teal-900 placeholder-opacity-50',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'dark:bg-purple-500/90 dark:border-purple-200 dark:ring-purple-100 dark:text-purple-1100 dark:placeholder-purple-1000/60',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)

export default Input
