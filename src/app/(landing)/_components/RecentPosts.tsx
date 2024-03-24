import Link from '@/components/Link'
import cn from '@/utils/cn'
import Container from './Container'

import type { PostResponse } from '@/types'

interface IPosts {
  posts: PostResponse[]
}

export default function RecentPosts({ posts }: IPosts) {
  return (
    <Container
      title="Recent Posts"
      gridName="grid-in-recent-posts"
    >
      <ul className="table w-full justify-between text-lg">
        {posts.map((post: PostResponse, i: number) => (
          <li
            key={post.slug}
            className={cn(
              'group table-row hover:bg-yellow-100 hover:text-yellow-500 hover:decoration-yellow-400 dark:hover:bg-purple-800 dark:hover:text-purple-200 dark:hover:decoration-purple-300',
              i % 2 === 0 && 'bg-purple-200/80 dark:bg-purple-950/80',
            )}
          >
            <Link
              path={`/blog/${post.slug}`}
              className="group table-cell px-4 py-2 text-xl group-hover:italic text-primary-700"
              label={post.title}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
}
