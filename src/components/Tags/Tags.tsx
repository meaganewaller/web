import Link from 'next/link'

const Tag = ({ tag, className }: { tag: string; className: string }) => (
  <Link
    href={`/blog?tags=${tag}`}
    className={`${className} text-sm mr-2 p-category font-extra text-purple-600 hover:text-purple-400`}
  >
    #{tag}
  </Link>
)

const Tags = ({ tags, className = 'link--blue' }: { tags: string[]; className?: string }) => (
  <div className="flex flex-wrap mx-auto max-w-3xl sm:justify-center">
    {tags.map((tag) => (
      <Tag key={tag} tag={tag} className={className} />
    ))}
  </div>
)

export default Tags
