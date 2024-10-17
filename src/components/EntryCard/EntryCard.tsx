'use client'

import type { GuestbookEntry } from '@/types'
import { m } from 'framer-motion'
import cn from '@/utils/cn'
import { useMemo } from 'react'
import Link from '@/components/Link'

import { formatDate } from '@/utils/date'

export interface EntryCardProps {
  entry: GuestbookEntry
  index: number
}

export default function EntryCard({ entry, index }: EntryCardProps) {
  const publishedDate = useMemo(() => (entry.created_at ? formatDate(entry.created_at) : null), [entry.created_at])

  return (
    <m.div
      className={cn(
        'my-2 flex flex-col pb-5 bg-violet-300 rounded-lg dark:bg-green-800/80 border border-solid border-violet-300 dark:border-green-500',
      )}
      key={entry.id}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: index / 10 }}
    >
      <div className="flex justify-between w-full py-2 px-5 bg-violet-100/50 rounded-t-lg dark:bg-green-900/50">
        <span className="font-monoItalic text-violet-800 lowercase text-lg dark:text-green-100">
          {entry.website ? (
            <Link href={entry.website} className="dark:text-green-100 text-violet-800">
              {entry.name}
            </Link>
          ) : (
            <>{entry.name}</>
          )}
        </span>
        <span className="text-violet-800 font-mono lowercase text-xs dark:text-green-100 tracking-wider">
          {publishedDate}
        </span>
      </div>
      <div className="p-5 text-xl text-violet-900 font-serif dark:text-green-200">
        <p>{entry.body}</p>
      </div>
    </m.div>
  )
}
