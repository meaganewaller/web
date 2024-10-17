import cn from '@/utils/cn'

interface ContainerProps {
  children: React.ReactNode
  gridName: string
  title: string
}

export default function Container({ children, gridName, title }: ContainerProps) {
  return (
    <section
      className={cn(
        gridName,
        'border-2 border-solid flex flex-col h-full antialiased',
        'border-violet-800 bg-violet-200 text-violet-900',
        'dark:border-green-500 dark:bg-green-1000 dark:text-pink-100',
      )}
    >
      <div className="sticky h-full flex flex-col content-center">
        <header
          className={cn(
            'font-pixel border-b-2 border-dashed p-2 text-center text-xl uppercase',
            'text-violet-800 border-violet-800 bg-violet-500',
            'dark:bg-green-500 dark:text-green-900 dark:border-green-1000',
          )}
        >
          {title}
        </header>
        <div className="h-full content-center flex flex-col justify-center">{children}</div>
      </div>
    </section>
  )
}
