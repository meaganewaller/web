'use client'

import type { TalkResponse } from '@/types'
import { m } from 'framer-motion'
import cn from '@/utils/cn'
import { useMemo } from 'react'
import Link from '@/components/Link'

import { formatDate } from '@/utils/date'

export interface TalkCardProps {
  talk: TalkResponse
  index: number
}

export default function TalkCard({ talk, index}: TalkCardProps) {
  const talkDate = useMemo(
    () => (talk.date ? formatDate(talk.date) : null),
      [talk.date],
  )

  const isHighlighted = useMemo(() => {
    return talk.tags?.length && talk.tags.length > 0 ? talk.tags.indexOf('highlights') !== -1 : false
  }, [talk.tags])

  return (
    <m.div
      className={cn('my-2 flex justify-between p-1', isHighlighted ? 'rounded-md bg-yellow-200/40' : '')}
      key={talk.slug}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: index / 10 }}
    >
      <div className="flex flex-col">
        <div className="flex flex-row items-center space-x-4">
          <Link
            href={`/talks/${talk.slug}`}
            className="decoration-none grow text-lg font-semibold text-pink-800 hover:text-pink-700 dark:text-green-100 dark:hover:text-green-200"
          >
            {talk.title}
          </Link>
        </div>
        {isHighlighted && (talk.description?.length || 0) > 0 && <p className="text-pink-800">{talk.description}</p>}
      </div>
      <p className="hidden space-x-2 whitespace-nowrap text-right text-xs text-pink-900 md:block dark:text-orange-200">
        <span>{talkDate}</span>
      </p>
    </m.div>
  )
}
