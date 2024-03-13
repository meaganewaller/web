import clsx from 'clsx';
import { useMemo } from 'react';
import Icon from '@/components/Icon';
import Link from '@/components/Link';

import { formatDate } from '@/utils/date';

export interface PostLinkProps {
  post: any;
}

export const PostLink = ({ post }: PostLinkProps) => {
  const publishedDate = useMemo(
    () => (post.published_date ? formatDate(post.published_date) : null),
    [post.published_date],
  );

  const isHighlighted = useMemo(() => {
    return post.tags?.length && post.tags.length > 0 ? post.tags.indexOf('highlights') !== -1 : false;
  }, [post.tags]);

  return (
    <div className={clsx('my-2 flex justify-between p-1', isHighlighted ? 'rounded-md bg-pink-500/40' : '')}>
      <div className="flex flex-col">
        <div className="flex flex-row items-center space-x-4">
          <Link
            href={`/blog/${post.slug}`}
            className="decoration-none grow text-lg font-semibold text-pink-600 hover:text-pink-700 dark:text-purple-300"
          >
            {isHighlighted && <Icon name="star" />}
            <span className="inline">{post.title}</span>
          </Link>
        </div>
        {isHighlighted && (post.description?.length || 0) > 0 && <p className="text-purple-800">{post.description}</p>}
      </div>
      <p className="hidden space-x-2 whitespace-nowrap text-right text-sm text-pink-500 md:block dark:text-purple-100">
        <span>{publishedDate}</span>
      </p>
    </div>
  );
};
