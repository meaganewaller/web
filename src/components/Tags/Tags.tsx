import Link from 'next/link'

const Tag = ({ tag, className }: { tag: string; className: string }) => (
  <Link className="mx-2 group" href={`/blog?tags=${tag}`}>
    <div className="inline-block relative py-1 text-xs group-hover:translate-y-1 transition-all">
      <div className="absolute inset-0 text-info-200 flex group-hover:text-info-300">
        <svg height="100%" viewBox="0 0 50 100">
          <path
            d="M49.9,0a17.1,17.1,0,0,0-12,5L5,37.9A17,17,0,0,0,5,62L37.9,94.9a17.1,17.1,0,0,0,12,5ZM25.4,59.4a9.5,9.5,0,1,1,9.5-9.5A9.5,9.5,0,0,1,25.4,59.4Z"
            fill="currentColor" />
        </svg>
        <div className="flex-grow h-full -ml-px bg-info-200 rounded-md rounded-l-none group-hover:bg-info-300" />
      </div>
      <span className="relative text-info-500 uppercase font-semibold pr-px group-hover:text-info-800">
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>{tag}<span>&nbsp;</span>
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
