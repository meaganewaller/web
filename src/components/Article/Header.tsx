"use client";

import { useRef } from 'react'

import pluralize from "@/utils/pluralize"

import type { IReadTimeResults } from "reading-time"
import ArticleHeader from "@/components/ArticleHeader"
import { FaClock as Clock, FaEye as Eye, FaPencilAlt as Pencil, FaCalendarAlt as Calendar } from 'react-icons/fa'
import StickyTitle from "@/components/StickyTitle"
import Container from "@/components/Container"
import useView from "@/hooks/use-view"
import cn from "@/utils/cn"

interface HeaderProps {
  type: "Post" | "Page"
  title: string
  date: string
  readingTime: IReadTimeResults
  slug: string
  description?: string
}

const Header = ({ type, title, date, readingTime, slug, description }: HeaderProps) => {
  const { views } = useView({
    slug: slug,
    type,
    trackView: true,
  });
  const pageHeaderRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <ArticleHeader title={title} description={description} ref={pageHeaderRef} centered={true} />
      <StickyTitle title={title} elementRef={pageHeaderRef} />
      <Container>
        <div
          className={cn(
            'flex flex-col justify-between gap-2 text-sm font-medium text-blue-900 dark:text-purple-500 tracking-widest mt-8',
            'sm:flex-row'
          )}
        >
          <div className={cn('flex items-center gap-4 text-200')}>
            <div className={cn('flex items-center gap-2')}>
              <Calendar className={cn('h-5 w-5')} title="Published on" />
              <time title="Published on" dateTime={date} className={cn('px-1')}>
                {date}
              </time>
            </div>
            <div className={cn('flex items-center gap-2')}>
              <Pencil className={cn('h-5 w-5')} title="Written by" />
              <span title="Written by">by Meagan Waller</span>
            </div>
          </div>
          <div className={cn('flex items-center gap-4')}>
            <div className={cn('flex items-center gap-2')}>
              <Clock className={cn('h-5 w-5')} />
              <span title="Estimated reading time">{readingTime?.text}</span>
            </div>
            <div className={cn('flex items-center gap-2')}>
              <Eye className={cn('h-5 w-5')} />
              <span title="Number of view(s)">{views?.count ?? '-'} {pluralize("view", views?.count || 0)}</span>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
// import { forwardRef } from 'react';
// import { dateFormatLong } from "@/utils/date";
// import pluralize from "@/utils/pluralize";
// import StickyTitle from "@/components/StickyTitle";
// import useView from "@/hooks/use-view";
// import cn from "@/utils/cn";
// import Image from "next/image";
// import ArticleHeader from "@/components/ArticleHeader"
//
// import type { PostResponse } from "@/types";
//
// interface HeaderProps {
//   article: PostResponse;
//   readingTime: IReadTimeResults;
//   ref?: React.Ref<HTMLDivElement>;
// }
//
// interface BlogHeaderProps extends React.HTMLProps<HTMLDivElement> {
//   title: string;
//   description: string;
//   date: string;
//   readingTime: IReadTimeResults;
//   views?: { count: number };
//   category: { slug: string; title: string };
//   tags: string[];
// }
//
// const BlogHeader = forwardRef<HTMLDivElement, BlogHeaderProps>(
//   ({ title, description, date, readingTime, views, category, tags, ...props }, ref) => {
//     return (
//       <div className="flex clear-both p-0 my-0 leading-7 align-baseline border-0 table-fixed outline-[0px] bg-[0px] content-[''] list-outside before:content-[''] before:table before:table-fixed after:clear-both after:table after:table-fixed after:outline-[0px] after:bg-[0px] after:content-[''] w-full items-center" ref={ref} {...props}>
//         <div className="max-w-4xl w-full mx-auto my-0 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
//           <div className="flex flex-col justify-center">
//             <h4
//               className="font-bold text-sm text-cobalt_blue-600 leading-7 uppercase text-center mt-10 tracking-widest dark:text-light_green-700"
//               title="Category"
//             >
//               in{' '}
//               <Link
//                 href={`/blog?category=${category.slug}`}
//                 className='font-semibold inline-flex font-sans flex-col'
//                 data-text={`${category.title}`}
//               >
//                 {category.title}
//               </Link>
//             </h4>
//             <h1
//               className="text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl -tracking-[-0.03em] mt-6 text-center font-display font-extrabold"
//               title="Post Title"
//             >
//               {title}
//             </h1>
//             <div className="mt-8 mb-5 flex flex-row justify-center">
//               <h4 className="flex align-middle font-semibold text-sm text-cobalt_blue-400 tracking-widest text-center uppercase dark:text-light_green-800" title="Published on">
//                 {dateFormatLong(date)}
//               </h4>
//               <div className="border border-solid border-cobalt_blue/50 h-6 mx-4 dark:border-light_green-800/50" />
//               <h4 className="font-semibold text-sm text-cobalt_blue-400 tracking-widest text-center uppercase dark:text-light_green-800" title="Estimated reading time">
//                 {readingTime.text}
//               </h4>
//               <div className="border border-solid border-cobalt_blue/50 h-6 mx-4 dark:border-light_green-800/50" />
//               <h4 className="font-semibold text-sm text-cobalt_blue-400 tracking-widest text-center uppercase dark:text-light_green-800" title='View profile'>
//                 Written by <Link href="/meagan" className='font-semibold inline-flex font-sans flex-col'>Meagan Waller</Link>
//               </h4>
//               <div className="border border-solid border-cobalt_blue/50 h-6 mx-4 dark:border-light_green-800/50" />
//               <div className={cn('flex items-center gap-1 font-semibold font-sans uppercase text-cobalt_blue-400 dark:text-light_green-800 tracking-widest text-center text-sm')}>
//                 <span title="Number of view(s)">{views?.count ?? '-'} {pluralize("view", views?.count || 0)}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// );
//
// const Header = ({ article, readingTime }: HeaderProps) => {
//   const { views } = useView({
//     slug: article.slug,
//     type: "Post",
//     trackView: true,
//   });
//
//   const pageHeaderRef = useRef<HTMLDivElement | null>(null);
//
//   return (
//     <>
//       <ArticleHeader title={article.title} date={article.published_date} readingTime={readingTime} views={views} category={article.category} tags={article.tags} />
//       {/* <BlogHeader */}
//       {/*   title={article.title} */}
//       {/*   description={article.description} */}
//       {/*   date={article.published_date} */}
//       {/*   readingTime={readingTime} */}
//       {/*   views={views} */}
//       {/*   category={article.category} */}
//       {/*   tags={article.tags} */}
//       {/*   ref={pageHeaderRef} */}
//       {/* /> */}
//       <StickyTitle title={article.title} elementRef={pageHeaderRef} />
//       <div className="flex flex-col flex-grow items-stretch self-stretch py-12 px-6 m-0 w-3/4 mx-auto">
//         <div className="relative">
//           <Image
//             className="object-fit overflow-hidden bubble-rose_pink-900"
//             src={article.image}
//             alt={`${article.title} featured image`}
//             title={`${article.title} featured image`}
//             layout="responsive"
//             sizes="(max-width: 1200px) 100vw, 1200px"
//             width={1200}
//             height={628}
//           />
//         </div>
//       </div>
//     </>
//   )
// };
//
export default Header;
