import Link from '@/components/Link'
import cn from '@/utils/cn'
import Container from './Container'

import type { PostResponse } from '@/types'

interface IPosts {
  posts: PostResponse[]
}

export default function RecentPosts({ posts }: IPosts) {
  return (
    <Container title="Recent Posts" gridName="grid-in-recent-posts">
      <ul className="table w-full justify-between text-lg font-extra">
        {posts.map((post: PostResponse, i: number) => (
          <li
            key={post.slug}
            className={cn(
              'group table-row',
              'hover:bg-yellow-200',
              i % 2 !== 0 && 'bg-violet-300/80 dark:bg-green-900/80 dark:hover:bg-yellow-300',
            )}
          >
            <Link
              href={`/blog/${post.slug}`}
              className={cn(
                'group table-cell px-4 py-2 text-xl',
                'text-violet-900 dark:text-green-300 dark:hover:text-green-900',
              )}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  )
}
