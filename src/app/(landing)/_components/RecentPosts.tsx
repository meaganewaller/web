import Link from 'next/link';
import { clsx } from 'clsx';

interface IPosts {
  posts: any[]
}

export default function RecentPosts({ posts }: IPosts) {
  return (
    <section className="grid-in-recent-posts dark:border-turquoise-800 border-2 border-solid border-purple-400">
      <div className="dark:border-turquoise-700 sticky border-b-2 border-solid border-purple-200 bg-purple-100 text-blue-700 dark:bg-blue-800">
        <header className="font-pixel dark:bg-turquoise-700 dark:border-turquoise-300 border-b-2 border-dashed border-pink-500 bg-pink-300 p-2 text-center text-xl uppercase text-pink-700 dark:text-blue-800">
          Recent Posts
        </header>
        <div className="dark:text-turquoise-100 flex h-full flex-col justify-center text-pink-700">
          <ul className="table w-full">
            {posts.map((post, i: number) => (
              <li
                key={post.slug}
                className={clsx(
                  'group table-row hover:bg-yellow-100 hover:text-yellow-500 dark:hover:bg-yellow-300 dark:hover:text-pink-900 dark:text-turquoise-100',
                  i % 2 === 0 && 'bg-purple-200/80 dark:bg-blue-400/80',
                )}
              >
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="dark:text-turquoise-100 group table-cell px-4 py-2 text-xl group-hover:italic dark:hover:text-pink-900"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
