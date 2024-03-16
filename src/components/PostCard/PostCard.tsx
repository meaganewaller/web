'use client';

import type { PostResponse } from "@/types";
import { m } from 'framer-motion';
import cn from '@/utils/cn';
import { useMemo } from 'react';
import Link from '@/components/Link';

import { formatDate } from '@/utils/date';

export interface PostCardProps {
  post: PostResponse
  index: number
}

export default function PostCard({ post, index }: PostCardProps) {
  const publishedDate = useMemo(
    () => (post.published_date ? formatDate(post.published_date) : null),
    [post.published_date],
  );

  const isHighlighted = useMemo(() => {
    return post.tags?.length && post.tags.length > 0 ? post.tags.indexOf('highlights') !== -1 : false;
  }, [post.tags]);

  return (
    <m.div
      className={cn('my-2 flex justify-between p-1', isHighlighted ? 'rounded-md bg-warning-200/40' : '')}
      key={post.slug}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: index / 10 }}
    >
      <div className="flex flex-col">
        <div className="flex flex-row items-center space-x-4">
          <Link
            path={`/blog/${post.slug}`}
            className="decoration-none grow text-lg font-semibold text-primary-600 hover:text-primary-700"
            label={post.title}
          />
        </div>
        {isHighlighted && (post.description?.length || 0) > 0 && <p className="text-primary-800">{post.description}</p>}
      </div>
      <p className="hidden space-x-2 whitespace-nowrap text-right text-sm text-primary-500 md:block">
        <span>{publishedDate}</span>
      </p>
    </m.div>
  )
}
