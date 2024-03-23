import NextImage from 'next/image';
import cn from '@/utils/cn';

export default function Image({ src, alt, className, width, height }: { src: string; alt: string, className?: string, width: number, height: number }) {
  return (
    <NextImage
      width={width}
      height={height}
      src={src}
      alt={alt}
      className={cn(
        className,
        'rounded-md'
      )}
    />
  )
}

