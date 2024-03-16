import clsx from 'clsx';
import { useMemo } from 'react';
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
    <div className={clsx('my-2 flex justify-between p-1', isHighlighted ? 'rounded-md bg-warning-200/40' : '')}>
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
    </div>
  );
};
