import clsx from 'clsx';
import { useMemo } from 'react';
import { IconStar } from '@tabler/icons-react';

import { Link } from '@/components/Link';

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
    <div className={clsx('my-2 flex justify-between p-1', isHighlighted ? 'rounded bg-yellow-200' : '')}>
      <div className="flex flex-col">
        <div className="flex flex-row items-center space-x-4">
          <Link
            href={`/blog/${post.slug}`}
            className="decoration-none hover:text-mauve-300 grow text-lg font-semibold text-pink-800"
          >
            <span>{post.title}</span>
            {isHighlighted && <IconStar size={18} className="ml-2 inline max-w-[18px]" />}
          </Link>
        </div>
        {isHighlighted && (post.description?.length || 0) > 0 && (
          <p className="text-purple ml-[48px]">{post.description}</p>
        )}
      </div>
      <p className="text-turquoise-400 hidden space-x-2 whitespace-nowrap text-right text-sm md:block">
        <span>{publishedDate}</span>
      </p>
    </div>
  );
};
