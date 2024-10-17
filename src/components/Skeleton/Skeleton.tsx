import cn from '@/utils/cn'
import { createElement } from 'react'

type SkeletonProps = {
  className?: string
}

export const Skeleton = (props: SkeletonProps) => {
  return createElement<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>('div', {
    className: cn('rounded-sm', 'bg-pink-900/40 dark:bg-green-100/40', 'animate-pulse', props.className),
  })
}

export default Skeleton
