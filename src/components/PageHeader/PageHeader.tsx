'use client'

import { m } from 'framer-motion'
import { forwardRef } from 'react'

import cn from '@/utils/cn'
import Container from '@/components/Container'

interface PageHeaderProps extends React.HTMLProps<HTMLDivElement> {
  title: string
  description?: string
  centered?: boolean
}

const PageHeader = forwardRef<HTMLDivElement, PageHeaderProps>(({ title, description, centered, ...props }, ref) => {
  const animation = {
    hide: centered ? { y: 32, opacity: 0 } : { x: -32, opacity: 0 },
    show: centered ? { y: 0, opacity: 1 } : { x: 0, opacity: 1 },
  }

  return (
    <div className={cn('bg-pattern py-16', 'lg:py-20')} ref={ref} {...props}>
      <Container className={cn('pointer-events-none select-none overflow-hidden', centered && 'text-center')}>
        <m.div initial={animation.hide} animate={animation.show} transition={{ delay: 0.1 }}>
          <h1
            className={cn(
              'pb-2 font-display text-4xl font-extrabold lowercase',
              'md:text-5xl',
              'lg:text-6xl',
              'xl:text-7xl',
              '2xl:text-8xl',
              'text-purple-900',
              'dark:text-yellow-300',
            )}
          >
            {title}
          </h1>
        </m.div>
        {description && (
          <m.div initial={animation.hide} animate={animation.show} transition={{ delay: 0.2 }}>
            <p className={cn('mt-2 font-display text-lg', 'text-purple-800 dark:text-yellow-400')}>{description}</p>
          </m.div>
        )}
      </Container>
    </div>
  )
})

PageHeader.displayName = 'PageHeader'
export default PageHeader
