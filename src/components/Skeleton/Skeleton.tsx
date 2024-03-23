import { cn } from '@/utils/cn';
import { createElement } from 'react';

type SkeletonProps = {
  className?: string;
}

export const Skeleton = (props: SkeletonProps) => {
  return createElement<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>('div', {
    className: cn('rounded', 'bg-purple-200 dark:bg-purple-800', 'animate-pulse', props.className),
  })
}

export default Skeleton;
