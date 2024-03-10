"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { useRef } from "react";
import type { IReadTimeResults } from "reading-time";
import { dateFormatLong, dateFormatMicroformat } from "@/utils/date";
import pluralize from "@/utils/pluralize";
import Tags from "./Tags";

import BackButton from "@/components/BackButton";

import { FaClock, FaEye } from "react-icons/fa";
import useView from "@/hooks/use-view";
import { cn } from "@/utils/cn";

import type { PostResponse } from "@/types";

interface ArticleHeaderProps {
	article: PostResponse;
	readingTime: IReadTimeResults;
}

const ArticleHeader = ({ article, readingTime }: ArticleHeaderProps) => {
	const { views } = useView({
		slug: article.slug,
		type: "Post",
		trackView: true,
	});

	const animation = {
		hide: { y: 32, opacity: 0 },
		show: { y: 0, opacity: 1 },
	};

	const pageHeaderRef = useRef<HTMLDivElement | null>(null);

	return (
		<>
			<div className="mx-auto mb-2 max-w-5xl">
				<p className="flex flex-row items-center sm:justify-center">
					<BackButton href="/blog" text="Blog" />
					<Link
						href={`${String(process.env.NEXT_PUBLIC_BASE_URL)}/blog/${
							article.slug
						}`}
						className="u-url"
					>
						<time
							className="ml-2 text-sm font-semibold text-blue-600 dt-published hover:underline-offset-3"
							dateTime={dateFormatMicroformat(article.published_date)}
						>
							{dateFormatLong(article.published_date)}
						</time>
					</Link>
					<span className="mx-2 text-blue-500">
						<span className={cn("flex items-center gap-1")}>
							<FaClock className={cn("h-4 w-4 text-blue-500")} size={4} />
							<span title="Estimated read time">{readingTime?.text}</span>
						</span>
					</span>
					<span className="mx-2 text-blue-500">
						<span className={cn("flex items-center gap-1")}>
							<FaEye className={cn("h-4 w-4 text-blue-500")} size={4} />
							<span title="Number of views">
								{views?.count ?? "-"}{" "}
								{views?.count && pluralize("view", views.count)}
							</span>
						</span>
					</span>
				</p>
			</div>
			{article.tags && article.tags.length > 0 && (
				<div className="mx-auto max-w-4xl sm:text-center my-2">
					<Tags tags={article.tags} />
				</div>
			)}

			<div className={cn("bg-pattern py-16", "lg:py-20")} ref={pageHeaderRef}>
				<m.div
					initial={animation.hide}
					animate={animation.show}
					transition={{ delay: 0.1 }}
				>
					<h1
						className={cn(
							"pb-2 font-monoItalic text-4xl font-bold",
							"md:text-5xl",
							"lg:text-6xl",
						)}
					>
						{article.title}
					</h1>
				</m.div>
				{article.description && (
					<m.div
						initial={animation.hide}
						animate={animation.show}
						transition={{ delay: 0.2 }}
					>
						<p className={cn("mt-2 font-serif text-lg")}>
							{article.description}
						</p>
					</m.div>
				)}
			</div>
		</>
	);
};

export default ArticleHeader;

// import Link from "next/link";
// import type { PostResponse } from "@/types";
// import { dateFormatLong, dateFormatMicroformat } from "@/utils/date";
// import pluralize from "@/utils/pluralize";
// import Tags from "./Tags";
// import Image from "next/image";
// import ViewCounter from "./ViewCounter";
// import { Suspense, cache } from "react";
// import { unstable_noStore as noStore } from "next/cache";
// import { fetchData } from "@/utils/fetchData";
//
// async function getViewsCount(): Promise<{ slug: string; count: number }[]> {
//   if (!process.env.NEXT_PUBLIC_BASE_API_URL) {
//     return [];
//   }
//
//   noStore();
//
//   return fetchData(
//     `${process.env.NEXT_PUBLIC_BASE_API_URL}/views?viewable_type=Post`,
//   );
// }
//
// const incrementViews = cache(increment);
//
// async function increment(slug: string) {
//   noStore();
//   const data = {
//     viewable_type: "Post",
//     viewable_slug: slug,
//     session_id: sessionId,
//   }
//   await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/views`, {
//     method: "POST",
//     body: JSON.stringify(data)
//   });
// }
//
// async function Views({ slug }: { slug: string }) {
//   const views = await getViewsCount();
//   incrementViews(slug);
//
//   return <ViewCounter allViews={views} slug={slug} />;
// }
//
// export interface ArticleHeaderProps {
//   article: PostResponse;
// }
//
// export const ArticleHeader = ({ article }: ArticleHeaderProps) => {
//   return (
//     <div className="px-2 mb-6">
//       <div className="mx-auto mb-2 max-w-5xl">
//         <p className="flex flex-row items-center sm:justify-center">
//           <Link
//             href="/blog"
//             className="flex items-center text-sm text-pink-700"
//           >
//             <span className="pl-1">Blog</span>
//           </Link>
//           <div className="ml-2">
//             <Suspense fallback={<p className="h-6" />}>
//               <Views slug={article.slug} />
//             </Suspense>
//           </div>
//         </p>
//         <h1 className="text-3xl font-bold leading-tight text-orange-500 sm:text-center md:text-5xl font-monoItalic p-name">
//           {article.title}
//         </h1>
//         {article.description && article.description.length > 0 && (
//           <div className="hidden p-summary">{article.description}</div>
//         )}
//
//         {article.cover_image && (
//           <Image
//             className="hidden u-photo"
//             alt={`${article.title} poster`}
//             loading="lazy"
//             src={article.cover_image}
//             width={800}
//             height={600}
//           />
//         )}
//       </div>
//     </div>
//   );
// };
