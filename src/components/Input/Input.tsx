import { forwardRef } from 'react'
import cn from '@/utils/cn'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      className={cn(
        'flex w-full font-normal text-base border transition-all duration-300 ease-in-out',
        'ring-violet-500',
        'dark:bg-lime-300 dark:border-lime-700 dark:ring-lime-600 dark:text-lime-900 dark:placeholder-lime-700',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})

Input.displayName = 'Input'
export default Input
