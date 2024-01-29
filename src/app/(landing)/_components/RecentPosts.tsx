import Link from 'next/link';
import { clsx } from 'clsx';

export default function RecentPosts({ posts }) {
  return (
    <section className="border-turquoise-400 grid-in-recent-posts flex flex-col border-2 border-solid text-blue-700">
      <div className="border-turquoise-400 dark:border-turquoise-200 sticky h-full border-b-2 border-solid bg-blue-100 text-blue-700 dark:bg-blue-500 dark:text-pink-100">
        <header className="font-pixel bg-turquoise-300 dark:bg-mauve border-turquoise-700 dark:border-mauve-300 border-b-2 border-dashed p-2 text-center text-xl uppercase text-pink-500 dark:text-pink-700">
          Recent Posts
        </header>
        <div className="h-auto overflow-auto text-blue-700 dark:text-pink-100">
          <ul className="table w-full">
            {posts.map((post, i: number) => (
              <li
                key={post.slug}
                className={clsx(
                  'group table-row hover:bg-yellow-100 hover:text-yellow-500 dark:hover:bg-yellow-300 dark:hover:text-yellow-700',
                  i % 2 === 0 && 'bg-blue-200/80 dark:bg-blue-400/80',
                )}
              >
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group table-cell px-4 py-2 text-xl group-hover:italic"
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
