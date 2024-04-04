import cn from '@/utils/cn';

interface ContainerProps {
  children: React.ReactNode;
  gridName: string;
  title: string
}

export default function Container({ children, gridName, title }: ContainerProps) {
  return (
    <section className={cn(gridName, 'border-2 border-solid border-pink-800 dark:border-yellow-1100 dark:bg-yellow-800 dark:text-yellow-1100 flex flex-col h-full bg-purple-200 text-purple-900 antialiased')}>
      <div
        className="sticky h-full flex flex-col content-center"
      >
        <header
          className="font-pixel border-b-2 border-dashed border-teal-800 bg-teal-400 p-2 text-center text-xl uppercase text-blue-900 dark:bg-yellow-500 dark:text-yellow-900 dark:border-orange-900"
        >
          {title}
        </header>
        <div
          className="h-full content-center flex flex-col justify-center"
        >
          {children}
        </div>
      </div>
    </section>
  )
}
