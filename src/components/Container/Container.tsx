import { forwardRef } from 'react'
import cn from '@/utils/cn'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  wide?: boolean
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(({ wide, children, className, ...props }, ref) => {
  return (
    <div
      className={cn(
        'mx-auto flex w-full flex-col px-1',
        'sm:px-2 md:px-4 lg:px-6 xl:px-8 2xl:px-10',
        wide ? 'max-w-full' : 'max-w-6xl',
        className,
      )}
      {...props}
      ref={ref}
    >
      {children}
    </div>
  )
})

Container.displayName = 'Container'

export default Container
