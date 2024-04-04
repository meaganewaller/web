'use client';

import type { PostResponse } from "@/types";
import { useMemo } from 'react';
import PostCard from '@/components/PostCard'
import pluralize from "@/utils/pluralize";

interface PostsListProps {
  posts: PostResponse[];
  page?: number;
  url?: string;
  showSeparator?: boolean;
}

interface PostsCountProps {
  posts: PostResponse[];
  year: number;
}

export const PostsCount = ({ posts, year }: PostsCountProps) => {
  const count = useMemo(() => {
    return posts.filter((a) => {
      if (!a.published_date) {
        return false;
      }

      return new Date(a.published_date).getFullYear() === year;
    }).length;
  }, [posts, year]);

  return (
    <span className="mb-1 block rounded-full border border-solid border-blue-700 bg-blue-300 p-2 font-monoItalic text-xs text-blue-900">
      {count} {pluralize("post", count)}
    </span>
  );
};

interface PostTimelineSeparatorProps {
  posts: PostResponse[];
  currentPost: PostResponse;
  previousPost: PostResponse | null;
}

export const PostTimelineSeparator = ({
  posts,
  currentPost,
  previousPost,
}: PostTimelineSeparatorProps) => {
  if (
    !currentPost.published_date ||
    (previousPost && !previousPost.published_date)
  ) {
    return <></>;
  }
  const currentPostDate = new Date(currentPost.published_date);
  const currentPostYear = currentPostDate.getFullYear();

  let previousPostYear: number | null = null;

  if (previousPost?.published_date) {
    const previousPostDate = new Date(previousPost.published_date);
    previousPostYear = previousPostDate.getFullYear();
  }

  if (!Number.isNaN(currentPostYear) && currentPostYear !== previousPostYear) {
    return (
      <div className="mt-8 flex items-baseline justify-between border-b border-blue-700 md:mt-12 dark:border-orange-300">
        <span className="font-pixel my-4 inline-block text-xl font-bold text-orange-500 dark:text-yellow-200">
          {currentPostYear}
        </span>
        <PostsCount posts={posts} year={currentPostYear} />
      </div>
    );
  }

  return <></>;
};

const PostsList = ({ posts, page = 1, url, showSeparator = true }: PostsListProps) => {
  return (
    <div className="mt-10">
      {posts.length === 0 && <p>No posts found.</p>}
      {posts.length > 0 &&
        posts.map((post: PostResponse, index: number) => (
          <div key={`${post.slug}-${post.title}-${post.published_date}`}>
            {showSeparator && (
              <PostTimelineSeparator
                posts={posts}
                currentPost={post}
                previousPost={index > 0 ? posts[index - 1] : null}
              />
            )}
            <PostCard index={index} post={post} />
          </div>
        ))}
    </div>
  )
}

export default PostsList;
