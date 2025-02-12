import Link from 'next/link'

const Tag = ({ tag, className }: { tag: string; className: string }) => (
  <Link className="m-2 group text-base font-extra antialiased" href={`/blog?tags=${tag}`}>
    <div className="inline-block relative py-1 group-hover:translate-y-1 transition-all">
      <div className="absolute inset-0 text-blue-200 flex group-hover:text-blue-300 dark:text-pink-700 dark:group-hover:text-pink-600">
        <svg height="100%" viewBox="0 0 50 100">
          <path
            d="M49.9,0a17.1,17.1,0,0,0-12,5L5,37.9A17,17,0,0,0,5,62L37.9,94.9a17.1,17.1,0,0,0,12,5ZM25.4,59.4a9.5,9.5,0,1,1,9.5-9.5A9.5,9.5,0,0,1,25.4,59.4Z"
            fill="currentColor"
          />
        </svg>
        <div className="flex-grow h-full -ml-px bg-blue-200 rounded-md rounded-l-none group-hover:bg-blue-300 dark:bg-pink-700 dark:group-hover:bg-pink-600" />
      </div>
      <span className="relative text-blue-500 pr-px group-hover:text-blue-800 dark:text-pink-200 dark:group-hover:text-pink-100">
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        {tag}
        <span>&nbsp;</span>
      </span>
    </div>
  </Link>
)

const Tags = ({ tags, className = 'text-purple-600' }: { tags: string[]; className?: string }) => (
  <div className="flex flex-wrap mx-auto max-w-3xl sm:justify-center">
    {tags.map((tag) => (
      <Tag key={tag} tag={tag} className={className} />
    ))}
  </div>
)

export default Tags
