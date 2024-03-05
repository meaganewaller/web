import { useMemo } from 'react'
import Pagination from '@/components/Layout/Pagination'
import { PostLink } from './PostLink'

interface PostsCountProps {
  posts: any[]
  year: number
}

export const PostsCount = ({ posts, year }: PostsCountProps) => {
  const count = useMemo(() => {
    return posts.filter((a) => {
      if (!a.published_date) {
        return false
      } else {
        return new Date(a.published_date).getFullYear() === year
      }
    }).length
  }, [posts, year])

  return (
    <span className="mb-1 block rounded-full border border-solid border-pink-400 bg-pink-300 p-2 font-mono text-xs uppercase text-pink-800 dark:border-green-500 dark:bg-green-300 dark:text-green-900">
      {count} post{count === 1 ? '' : 's'}
    </span>
  )
}
interface PostTimelineSeparatorProps {
  posts: any[]
  currentPost: any
  previousPost: any | null
}

export const PostTimelineSeparator = ({ posts, currentPost, previousPost }: PostTimelineSeparatorProps) => {
  if (!currentPost.published_date || (previousPost && !previousPost.published_date)) {
    return <></>
  }
  const currentPostDate = new Date(currentPost.published_date)
  const currentPostYear = currentPostDate.getFullYear()

  let previousPostDate
  let previousPostYear

  if (!previousPost) {
    previousPostDate = null
    previousPostYear = null
  } else {
    if (previousPost.published_date) {
      previousPostDate = new Date(previousPost.published_date)
      previousPostYear = previousPostDate.getFullYear()
    }
  }

  if (!Number.isNaN(currentPostYear) && currentPostYear !== previousPostYear) {
    return (
      <div className="mt-8 flex items-baseline justify-between border-b border-pink-700 md:mt-12 dark:border-purple-950">
        <span className="font-pixel my-4 inline-block text-xl font-bold text-orange-500 dark:text-green-400">
          {currentPostYear}
        </span>
        <PostsCount posts={posts} year={currentPostYear} />
      </div>
    )
  }

  return <></>
}

export interface PostTimelineProps {
  posts: any[]
  page?: number
  totalPages?: number
  url?: string
  showSeparator?: boolean
  previousPostUrl?: string
  pagination?: string[]
}

export const PostsList = ({ posts, page = 1, totalPages = 1, url, previousPostUrl, showSeparator = true, pagination }: PostTimelineProps) => {
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

      {page && totalPages && (
        <Pagination
          series={pagination}
          page={page}
          totalPages={totalPages}
          url={url}
          previousPostUrl={previousPostUrl}
        />
      )}
    </div>
  )
};
