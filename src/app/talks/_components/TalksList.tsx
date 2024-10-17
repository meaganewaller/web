'use client'

import type { TalkResponse } from '@/types'
import { useMemo } from 'react'
import TalkCard from '@/components/TalkCard'
import pluralize from '@/utils/pluralize'
import cn from '@/utils/cn'

interface TalksListProps {
  talks: TalkResponse[]
  page?: number
  showSeparator?: boolean
}

interface TalksCountProps {
  talks: TalkResponse[]
  year: number
}

export const TalksCount = ({ talks, year }: TalksCountProps) => {
  const count = useMemo(() => {
    return talks.filter((a) => {
      if (!a.date) {
        return false
      }

      return new Date(a.date).getFullYear() === year
    }).length
  }, [talks, year])

  return (
    <span
      className={cn(
        'mb-1 block rounded-full border border-solid border-violet-700 bg-violet-300 p-2 font-monoItalic text-xs text-violet-900',
        'dark:bg-orange-300 dark:border-orange-700 dark:text-orange-900',
      )}
    >
      {count} {pluralize('talk', count)}
    </span>
  )
}

interface TalkTimelineSeparatorProps {
  talks: TalkResponse[]
  currentTalk: TalkResponse
  previousTalk: TalkResponse | null
}

export const TalkTimelineSeparator = ({ talks, currentTalk, previousTalk }: TalkTimelineSeparatorProps) => {
  if (!currentTalk.date || (previousTalk && !previousTalk.date)) {
    return <></>
  }

  const currentTalkDate = new Date(currentTalk.date)
  const currentTalkYear = currentTalkDate.getFullYear()

  let previousTalkYear: number | null = null

  if (previousTalk?.date) {
    const previousTalkDate = new Date(previousTalk.date)
    previousTalkYear = previousTalkDate.getFullYear()
  }

  if (!Number.isNaN(currentTalkYear) && currentTalkYear !== previousTalkYear) {
    return (
      <div className="mt-8 flex items-baseline justify-between border-b border-violet-700 md:mt-12 dark:border-orange-300">
        <span className="font-pixel my-4 inline-block text-xl font-bold text-violet-600 dark:text-orange-600">
          {currentTalkYear}
        </span>
        <TalksCount talks={talks} year={currentTalkYear} />
      </div>
    )
  }

  return <></>
}

const TalksList = ({ talks, page = 1, showSeparator = true }: TalksListProps) => {
  return (
    <div className="mt-10">
      {talks.length === 0 && <p>No talks found.</p>}
      {talks.length > 0 &&
        talks.map((talk: TalkResponse, index: number) => (
          <div key={`${talk.slug}-${talk.title}-${talk.date}`}>
            {showSeparator && (
              <TalkTimelineSeparator
                talks={talks}
                currentTalk={talk}
                previousTalk={index > 0 ? talks[index - 1] : null}
              />
            )}
            <TalkCard index={index} talk={talk} />
          </div>
        ))}
    </div>
  )
}

export default TalksList
