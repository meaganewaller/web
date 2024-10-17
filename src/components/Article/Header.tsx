'use client'

import { useRef } from 'react'

import pluralize from '@/utils/pluralize'

import type { IReadTimeResults } from 'reading-time'
import ArticleHeader from '@/components/ArticleHeader'
import { FaCalendarAlt as Calendar, FaClock as Clock, FaEye as Eye } from 'react-icons/fa'
import StickyTitle from '@/components/StickyTitle'
import Container from '@/components/Container'
import useView from '@/hooks/use-view'
import cn from '@/utils/cn'

interface HeaderProps {
  type: 'Post' | 'Page'
  title: string
  date: string
  readingTime: IReadTimeResults
  slug: string
  description?: string
}

const Header = ({ type, title, date, readingTime, slug, description }: HeaderProps) => {
  const { views } = useView({
    slug: slug,
    type,
    trackView: true,
  })
  const pageHeaderRef = useRef<HTMLDivElement | null>(null)

  return (
    <>
      <ArticleHeader title={title} description={description} ref={pageHeaderRef} centered={true} />
      <StickyTitle title={title} elementRef={pageHeaderRef} />
      <Container>
        <div
          className={cn(
            'flex flex-col w-full justify-around sm:justify-between gap-2 text-sm font-medium text-blue-900 dark:text-lime-500 tracking-widest mt-8',
            'sm:flex-row',
          )}
        >
          <div className={cn('flex items-start sm:items-center justify-between gap-4 text-200')}>
            <div className={cn('items-start flex sm:items-center gap-2')}>
              <Calendar className={cn('h-5 w-5')} title="Published on" />
              <time title="Published on" dateTime={date} className={cn('px-1')}>
                {date}
              </time>
            </div>
          </div>
          <div className={cn('flex items-center mt-4 sm:mt-0 gap-4 justify-between')}>
            <div className={cn('flex items-center gap-2')}>
              <Clock className={cn('h-5 w-5')} />
              <span title="Estimated reading time">{readingTime?.text}</span>
            </div>
            <div className={cn('flex items-center gap-2')}>
              <Eye className={cn('h-5 w-5')} />
              <span title="Number of view(s)">
                {views?.count ?? '-'} {pluralize('view', views?.count || 0)}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Header
