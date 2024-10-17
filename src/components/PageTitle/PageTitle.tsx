import * as React from 'react'
import cn from '@/utils/cn'

function PageTitle({ title }: { title: string }) {
  return (
    <h1
      className={cn(
        "font-pixel text-center text-2xl uppercase before:pr-[7px] before:content-[url('/images/ui/leftsparkle.gif')] after:pl-[5px] after:content-[url('/images/ui/rightsparkle.gif')] lg:text-3xl",
        'text-violet-600 dark:text-yellow-400',
      )}
    >
      {title}
    </h1>
  )
}

export default PageTitle
