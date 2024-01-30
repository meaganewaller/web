import { useMemo } from 'react';
import { PostLink } from './PostLink';

interface PostsCountProps {
  posts: any[];
  year: number;
}

export const PostsCount = ({ posts, year }: PostsCountProps) => {
  const count = useMemo(() => {
    return posts.filter((a) => {
      if (!a.published_date) {
        return false;
      } else {
        return new Date(a.published_date).getFullYear() === year;
      }
    }).length;
  }, [posts, year]);

  return (
    <span className="mb-1 block rounded-full bg-lime-400 p-2 font-mono text-xs text-lime-800">
      {count} post{count === 1 ? '' : 's'}
    </span>
  );
};
interface PostTimelineSeparatorProps {
  posts: any[];
  currentPost: any;
  previousPost: any | null;
}

export const PostTimelineSeparator = ({ posts, currentPost, previousPost }: PostTimelineSeparatorProps) => {
  if (!currentPost.published_date || (previousPost && !previousPost.published_date)) {
    return <></>;
  }
  const currentPostDate = new Date(currentPost.published_date);
  const currentPostYear = currentPostDate.getFullYear();

  let previousPostDate;
  let previousPostYear;

  if (!previousPost) {
    previousPostDate = null;
    previousPostYear = null;
  } else {
    if (previousPost.published_date) {
      previousPostDate = new Date(previousPost.published_date);
      previousPostYear = previousPostDate.getFullYear();
    }
  }

  if (!Number.isNaN(currentPostYear) && currentPostYear !== previousPostYear) {
    return (
      <div className="mt-8 flex items-baseline justify-between border-b-2 border-pink-100 md:mt-12">
        <span className="font-pixel text-mauve-400 text-xl font-bold">{currentPostYear}</span>
        <PostsCount posts={posts} year={currentPostYear} />
      </div>
    );
  }

  return <></>;
};

export interface PostTimelineProps {
  posts: any[];
  page?: number;
  totalPages?: number;
  url: string;
  showSeparator?: boolean;
  previousPostUrl: string;
  pagination: string[];
}

export const PostsList = ({ posts, showSeparator = true }: PostTimelineProps) => {
  return (
    <div>
      {posts.length === 0 && <p>No Posts Found :(</p>}
      {posts.length > 0 &&
        posts.map((post: any, index: number) => (
          <div key={`${post.slug}-${post.title}-${post.published_date}`}>
            {showSeparator && (
              <PostTimelineSeparator
                posts={posts}
                currentPost={post}
                previousPost={index > 0 ? posts[index - 1] : null}
              />
            )}
            <PostLink post={post} />
          </div>
        ))}
    </div>
  );
};
