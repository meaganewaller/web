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
      <ul className="table w-full justify-between text-lg font-extra">
        {posts.map((post: PostResponse, i: number) => (
          <li
            key={post.slug}
            className={cn(
              'group table-row hover:bg-light_orange-800 hover:text-light_orange-300 hover:decoration-light_orange-400 dark:hover:bg-cobalt_blue-200 dark:hover:text-cobalt_blue-800 dark:hover:decoration-cobalt_blue-700',
              i % 2 !== 0 && 'bg-heliotrope-800/80 dark:bg-cobalt_blue-200/80',
            )}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="group table-cell px-4 py-2 text-xl group-hover:italic"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
