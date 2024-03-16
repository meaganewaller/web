"use client";

import Link from "next/link";
import { useRef } from "react";
import type { IReadTimeResults } from "reading-time";
import { dateFormatLong, dateFormatMicroformat } from "@/utils/date";
import pluralize from "@/utils/pluralize";
import Tags from "@/components/Tags";
import Container from "@/components/Container";
import StickyTitle from "@/components/StickyTitle";
import BackButton from "@/components/BackButton";
import PageHeader from "@/components/PageHeader";
import { FaClock, FaEye } from "react-icons/fa";
import useView from "@/hooks/use-view";
import cn from "@/utils/cn";

import type { PostResponse } from "@/types";

interface HeaderProps {
  article: PostResponse;
  readingTime: IReadTimeResults;
}

const Header = ({ article, readingTime }: HeaderProps) => {
  const { views } = useView({
    slug: article.slug,
    type: "Post",
    trackView: true,
  });

  const pageHeaderRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div className="relative flex flex-col justify-center overflow-hidden py-6 sm:py-12">
        <div className="flex items-center justify-between border-b border-primary-300/50 bg-transparent p-3">
          <BackButton />
          <Link
            className={cn('bg-pink-500 p-2 text-pink-100 rounded-md hover:bg-pink-100 hover:text-pink-500 hover:no-underline ease-in-out hover:translate-y-1 transition duration-300')}
            href={`/blog?category=${article.category.slug}`}
          >
            {article.category.title}
          </Link>
        </div>
      </div>
      <Tags tags={article.tags} />
      <PageHeader title={article.title} description={article.description} ref={pageHeaderRef} />
      <StickyTitle title={article.title} elementRef={pageHeaderRef} />
      <Container wide={true}>
        <div className={cn('flex flex-col justify-between gap-2 text-sm font-medium text-primary-700', 'sm:flex-row')}>
          <div>
            Published on
            <time dateTime={dateFormatMicroformat(article.published_date)} className={cn('px-1')}>
              {dateFormatLong(article.published_date)}
            </time>
          </div>
          <div className={cn('flex items-center gap-4')}>
            <div className={cn('flex items-center gap-1')}>
              <FaClock className={cn('h-5 w-5')} />
              <span title="Estimated read time">{readingTime?.text}</span>
            </div>
            <div className={cn('flex items-center gap-1')}>
              <FaEye className={cn('h-5 w-5')} />
              <span title="Number of view(s)">{views?.count ?? '-'} {pluralize("view", views?.count || 0)}</span>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Header;
