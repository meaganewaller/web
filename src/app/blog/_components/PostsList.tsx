import type { PostResponse } from "@/types";

import cn from '@/utils/cn';
import PostCard from '@/components/PostCard'
import Pagination from '@/components/Pagination'

interface PostsListProps {
  posts: PostResponse[];
  page?: number;
  url?: string;
  showSeparator?: boolean;
  previousPostUrl?: string;
  pagination?: (string | number)[];
}

const PostsList = ({ posts, page = 1, url, showSeparator = true, previousPostUrl, pagination = [] }: PostsListProps) => {
  return (
    <>
      <div className={cn('my-8 grid grid-cols-1 gap-2', 'md:my-12 md:grid-cols-2', 'lg:my-6 lg:grid-cols-3')}>
        {posts.map((post: PostResponse, index: number) => (
          <PostCard index={index} post={post} />
        ))}
      </div>
      {page && url && previousPostUrl && (
        <Pagination
          series={pagination}
          page={page}
          url={url}
          previousPostUrl={previousPostUrl}
        />
      )}
    </>
  )
}

export default PostsList;

// 'use client';
//
// import { useMemo, useState } from 'react';
// import { cn } from '@/utils/cn';
// import { PostLink } from "./PostLink";
// import type { PostResponse } from "@/types";
// import pluralize from "@/utils/pluralize";

//
// interface PostsCountProps {
//   posts: PostResponse[];
//   year: number;
// }
//
// export const PostsCount = ({ posts, year }: PostsCountProps) => {
//   const count = useMemo(() => {
//     return posts.filter((a) => {
//       if (!a.published_date) {
//         return false;
//       }
//
//       return new Date(a.published_date).getFullYear() === year;
//     }).length;
//   }, [posts, year]);
//
//   return (
//     <span className="mb-1 block rounded-full border border-solid border-primary-400 bg-primary-300 p-2 font-mono text-xs uppercase text-primary-800">
//       {count} {pluralize("post", count)}
//     </span>
//   );
// };
//
// interface PostTimelineSeparatorProps {
//   posts: PostResponse[];
//   currentPost: PostResponse;
//   previousPost: PostResponse | null;
// }
//
// export const PostTimelineSeparator = ({
//   posts,
//   currentPost,
//   previousPost,
// }: PostTimelineSeparatorProps) => {
//   if (
//     !currentPost.published_date ||
//     (previousPost && !previousPost.published_date)
//   ) {
//     return <></>;
//   }
//   const currentPostDate = new Date(currentPost.published_date);
//   const currentPostYear = currentPostDate.getFullYear();
//
//   let previousPostYear: number | null = null;
//
//   if (previousPost?.published_date) {
//     const previousPostDate = new Date(previousPost.published_date);
//     previousPostYear = previousPostDate.getFullYear();
//   }
//
//   if (!Number.isNaN(currentPostYear) && currentPostYear !== previousPostYear) {
//     return (
//       <div className="mt-8 flex items-baseline justify-between border-b border-primary-700 md:mt-12">
//         <span className="font-pixel my-4 inline-block text-xl font-bold text-orange-500">
//           {currentPostYear}
//         </span>
//         <PostsCount posts={posts} year={currentPostYear} />
//       </div>
//     );
//   }
//
//   return <></>;
// };
//
// export interface PostTimelineProps {
//   posts: PostResponse[];
//   page?: number;
//   url?: string;
//   showSeparator?: boolean;
//   previousPostUrl?: string;
//   pagination?: (string | number)[];
// }
//
// export const PostsList = ({
//   posts,
//   page = 1,
//   url,
//   previousPostUrl,
//   showSeparator = true,
//   pagination = [],
// }: PostTimelineProps) => {
//   return (
//     <div>
//       {posts.length === 0 && <p>No Posts Found :(</p>}
//       {posts.length > 0 &&
//         posts.map((post: PostResponse, index: number) => (
//           <div key={`${post.slug}-${post.title}-${post.published_date}`}>
//             {showSeparator && (
//               <PostTimelineSeparator
//                 posts={posts}
//                 currentPost={post}
//                 previousPost={index > 0 ? posts[index - 1] : null}
//               />
//             )}
//             <PostLink post={post} />
//           </div>
//         ))}
//
//     </div>
//   );
// };
