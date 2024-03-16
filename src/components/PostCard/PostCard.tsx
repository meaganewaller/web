'use client';

import type { PostResponse } from "@/types";
import { m } from 'framer-motion';
import Link from 'next/link';

export interface PostCardProps {
  post: PostResponse
  index: number
}

export default function PostCard({ post, index }: PostCardProps) {
  return (
    <m.div
      key={post.slug}
      className="py-2"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: index / 10 }}
    >
      <Link href={`/blog/${post.slug}`} aria-label={`Read "${post.title}"`} legacyBehavior>
        <article className="cursor-pointer gap-3 space-y-2 bg-opacity-20 py-5 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
          <div className="space-y-3 xl:col-span-4">
            <span className="text-2xl font-bold leading-8 tracking-tight">
              <Link href={`/blog/${post.slug}`}>
                <span className="text-primary-500 duration-300 hover:text-primary-400">
                  {post.title}
                </span>
              </Link>
            </span>
            <div className="prose max-w-none text-gray-900 dark:text-gray-100">{post.description}</div>
          </div>
        </article>
      </Link>
    </m.div>
  )
}
// 'use client';
//
// import type { PostResponse } from "@/types";
// import Image from 'next/image';
// import { useState } from 'react';
//
// import { ROUTES } from '@/config/constants';
// import useView from '@/hooks/use-view';
// import cn from '@/utils/cn';
// import { formatDistance as formatDate } from '@/utils/date';
//
// import IncrementCounter from '@/components/IncrementCounter';
// import Link from '@/components/Link';
// import Spinner from '@/components/Spinner';
//
// const PostCard = ({ post }: { post: PostResponse }) => {
//   const { title, slug, published_date, description, cover_image } =
//     post
//   const { views, loading: isLoadViews } = useView({ slug, type: 'Post' })
//
//   const publishedAt = formatDate(published_date)
//   const [isLoadingImage, setIsLoadingImage] = useState(true)
//
//   return (
//     <div className={cn('bg-primary-100 w-[calc(33.33% - 30px)] float-left p-4 mt-5 mx-4 mb-4 rounded-lg shadow-sm flex flex-col')}>
//       <div
//         className={cn(
//           'relative aspect-video w-full overflow-hidden bg-cover bg-no-repeat',
//           isLoadingImage && 'animate-pulse',
//         )}
//       >
//         <div className={cn('absolute h-full w-full')} />
//         <Image
//           src={cover_image ?? ''}
//           alt={title}
//           className={cn(
//             'rounded-xl object-cover transition duration-200 ease-in-out',
//             isLoadingImage && 'scale-[1.01] blur-xl grayscale',
//           )}
//           width={1200}
//           height={800}
//           onLoad={() => setIsLoadingImage(false)}
//         />
//       </div>
//       <div className="py-[27px] px-2">
//         <span className="font-sans text-xs font-bold text-primary-500 uppercase">{post.category.title}</span>
//         <h3 className="font-sans font-bold text-lg text-primary-900 leading-5">
//           <Link
//             path={`${ROUTES.blog}/${slug}`}
//             label={title}
//             className="text-primary-900 hover:text-primary-700 hover:no-underline"
//           />
//         </h3>
//         <p className="mb-2 primary-700 leading-7 line-clamp-5">{description}</p>
//         <div className="flex mb-8">
//           <Link
//             path={`${ROUTES.blog}/${slug}`}
//             label="Read more..."
//             className="text-primary-500 hover:text-primary-700 hover:no-underline"
//           />
//         </div>
//
//         <div className="flex gap-2 text-xs place-self-end">
//           <time dateTime={publishedAt}>{publishedAt}</time>
//           <div>&middot;</div>
//           <div title="Estimated read time">1 min</div>
//           <div>&middot;</div>
//           <div className={cn('inline-flex')}>
//             {isLoadViews ? (
//               <Spinner />
//             ) : (
//               <span>
//                 <IncrementCounter to={views?.count ?? 0} /> views
//               </span>
//             )}
//           </div>
//         </div>
//       </div>
//     </div >
//   )
// }
//
// export default PostCard
