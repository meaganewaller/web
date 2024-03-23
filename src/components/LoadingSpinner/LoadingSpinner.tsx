/* eslint-disable react/jsx-props-no-spreading */
import { IoRefresh } from 'react-icons/io5'
import clsx from 'clsx'

type Props = {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'none' | 'primary'
  className?: string
}

const sizes = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
}

const variants = {
  none: '',
  primary: 'text-gray-600',
}

const LoadingSpinner = ({ size = 'md', variant = 'none', className, ...rest }: Props) => {
  const finalClassName = clsx('animate-spin', sizes[size], variants[variant], className)

  const props = {
    className: finalClassName,
    ...rest,
  }

  return <IoRefresh size={30} {...props} />
}

export default LoadingSpinner
