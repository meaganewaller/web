import cn from '@/utils/cn'
import { GiJumpingDog } from "react-icons/gi";

interface EmptyStateProps {
  message: string
}

const EmptyState = ({ message }: EmptyStateProps) => {
  return (
    <div
      className={cn(
        'my-4 flex flex-col items-center justify-center space-y-1 py-3',
      )}
    >
      <GiJumpingDog className={cn('h-16 w-16')} />
      <p className={cn('text-center text-lg')}>{message}</p>
    </div>
  )
}

export default EmptyState;
