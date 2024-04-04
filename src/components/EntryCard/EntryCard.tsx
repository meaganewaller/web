'use client';

import type { GuestbookEntry } from '@/types';
import { m } from 'framer-motion';
import cn from '@/utils/cn';
import { useMemo } from 'react';
import Link from '@/components/Link';

import { formatDate } from '@/utils/date';

export interface EntryCardProps {
  entry: GuestbookEntry
  index: number
}

export default function EntryCard({ entry, index }: EntryCardProps) {
  const publishedDate = useMemo(
    () => (entry.created_at ? formatDate(entry.created_at) : null),
    [entry.created_at],
  );

  return (
    <m.div
      className={cn('my-2 flex flex-col pb-5 bg-pink-300/20 rounded-lg dark:bg-zinc-900/20')}
      key={entry.id}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: index / 10 }}
    >
      <div className="flex justify-between w-full py-2 px-5 bg-pink-300/50 rounded-t-lg dark:bg-zinc-900/50">
        <span className="font-monoItalic text-pink-600 lowercase text-xs dark:text-zinc-50">
          {entry.website ? (
            <Link
              href={entry.website}
              className="dark:text-zinc-100 text-pink-500"
            >
              {entry.name}
            </Link>
          ) : (
            <>
              {entry.name}
            </>
          )}
        </span>
        <span className="text-pink-500 font-mono lowercase text-xs dark:text-zinc-100">{publishedDate}</span>
      </div>
      <div className="p-5 text-xl text-pink-500 font-serif dark:text-neutral-200">
        <p>{entry.body}</p>
      </div>
    </m.div>
  )
}
