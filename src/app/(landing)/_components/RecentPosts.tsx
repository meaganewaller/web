import Link from '@/components/Link'
import cn from '@/utils/cn'

import type { PostResponse } from '@/types'

interface IPosts {
  posts: PostResponse[]
}

export default function RecentPosts({ posts }: IPosts) {
  return (
    <section className="grid-in-recent-posts border-2 border-solid border-purple-400">
      <div className="sticky border-b-2 border-solid border-purple-200 bg-purple-100 text-blue-700">
        <header className="font-pixel border-b-2 border-dashed border-primary-500 bg-primary-300 p-2 text-center text-xl uppercase text-primary-700">
          Recent Posts
        </header>
        <div className="flex h-full flex-col justify-center text-primary-700">
          <ul className="table w-full">
            {posts.map((post: PostResponse, i: number) => (
              <li
                key={post.slug}
                className={cn(
                  'group table-row hover:bg-yellow-100 hover:text-yellow-500',
                  i % 2 === 0 && 'bg-purple-200/80',
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
        </div>
      </div>
    </section>
  );
}
