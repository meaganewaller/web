import { forwardRef } from 'react'
import cn from '@/utils/cn'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          'flex w-full rounded-md border border-pink-500 bg-pink-100 px-3 py-2 text-sm ring-offset-pink-100/20 ring-offset-2 ring-1 ring-pink-300 focus:ring-2 focus:ring-orange-200 focus:outline-none transition-all duration-300 ease-in-out',
          'placeholder:text-pink-500 placeholder-opacity-50',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
          'disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)

export default Input
