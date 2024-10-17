import { forwardRef } from 'react'
import cn from '@/utils/cn'

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical'
}

const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
  ({ orientation = 'horizontal', className, ...props }, ref) => {
    return (
      <div
        data-orientation={orientation}
        className={cn(
          'shrink-0 bg-pink-400 dark:bg-green-800',
          orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)

Separator.displayName = 'Separator'

export default Separator
