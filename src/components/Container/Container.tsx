import { forwardRef } from 'react'
import cn from '@/utils/cn'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  wide?: boolean;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ wide, children, className, ...props }, ref) => {
    return (
      <div
        className={cn(
          'mx-auto flex w-full flex-col px-8',
          'sm:px-12 md:px-10 lg:px-8 xl:px-6',
          wide ? 'max-w-[1200px]' : 'max-w-6xl',
          className,
        )}
        {...props}
        ref={ref}
      >
        {children}
      </div>
    )
  },
)

export default Container
