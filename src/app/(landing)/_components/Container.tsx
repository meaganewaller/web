import cn from '@/utils/cn';

interface ContainerProps {
  children: React.ReactNode;
  gridName: string;
  title: string
}

export default function Container({ children, gridName, title }: ContainerProps) {
  return (
    <section className={cn(gridName, 'border-2 border-solid border-purple-400 dark:bg-purple-900 flex flex-col h-full')}>
      <div
        className="sticky h-full flex flex-col content-center"
      >
        <header
          className="font-pixel border-b-2 border-dashed border-primary-500 bg-primary-300 p-2 text-center text-xl uppercase text-primary-700 dark:bg-primary-900 dark:text-primary-500"
        >
          {title}
        </header>
        <div
          className="text-primary-700 h-full content-center flex flex-col justify-center dark:text-primary-300"
        >
          {children}
        </div>
      </div>
    </section>
  )
}
