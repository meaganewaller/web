import Link from 'next/link';
import { Tag as TagType } from '@/types';

const Tag = ({ tag, className }: { tag: TagType; className: string }) => (
  <Link href={`/blog?tags=${tag.title}`} className={`${className} p-category mr-2 text-sm`}>
    #{tag.title}
  </Link>
)

const Tags = ({ tags, className = 'text-blue-600' }: { tags: TagType[]; className?: string }) => (
  <div className="mx-auto flex max-w-3xl flex-wrap sm:justify-center">
    {tags.map((tag) => (
      <Tag key={tag.title} tag={tag} className={className} />
    ))}

  </div>
)

export default Tags;
