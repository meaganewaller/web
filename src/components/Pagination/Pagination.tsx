'use client'

import Link from '@/components/Link'
import React, { FC } from 'react'
import { LiaCaretLeftSolid, LiaCaretRightSolid } from 'react-icons/lia'
import cn from '@/utils/cn'

interface PaginationProps {
  page: number
  url: string
  previousPostUrl?: string
  series: (string | number)[]
}

const Pagination: FC<PaginationProps> = ({ page, url, previousPostUrl, series }) => {
  const genUrl = (pageNumber: number) => {
    return pageNumber ? url.replace(/page=\d+/g, `page=${pageNumber}`) : null
  }
  const active = (pageNumber: number) => {
    return page === pageNumber
  }

  const links = [
    {
      label: (
        <span className={cn('flex')}>
          <LiaCaretLeftSolid size={16} className="mr-3 h-5 w-5" /> Prev
        </span>
      ),
      url: previousPostUrl,
      active: false,
      key: 'prev',
    },
    ...series.map((page) => {
      return {
        label: page,
        url: genUrl(Number(page)),
        active: active(Number(page)),
        key: page,
      }
    }),
    {
      label: (
        <span className="flex">
          Next <LiaCaretRightSolid size={16} className="ml-3 h-5 w-5" />
        </span>
      ),
      url: genUrl(page + 1),
      active: false,
      key: 'next',
    },
  ]

  return (
    <nav className="flex items-center justify-between p-4 mt-10 sm:px-0">
      {links.map((link) => {
        return (
          <div key={link.key} className="-mt-px flex w-0 flex-1 justify-center font-normal">
            {link.label === 'gap' && <div className="text-purple-900 text-4xl">...</div>}
            {link.url !== undefined && link.url !== null && (
              <Link
                href={link.url}
                className={cn([
                  'inline-flex items-center px-4 py-2 text-sm align-middle font-mono',
                  link.active && 'bg-purple-900 rounded-full text-purple-50 font-bold',
                ])}
              >
                {link.label}
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
}

export default Pagination
