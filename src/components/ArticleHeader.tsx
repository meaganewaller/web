import Link from "next/link";
import type { PostResponse } from "@/types";
import { dateFormatLong, dateFormatMicroformat } from "@/utils/date";
import pluralize from "@/utils/pluralize";
import Tags from "./Tags";
import Image from "next/image";

export interface ArticleHeaderProps {
  article: PostResponse;
}

export const ArticleHeader = ({ article }: ArticleHeaderProps) => {
  return (
    <div className="px-2 mb-6">
      <div className="mx-auto mb-2 max-w-5xl">
        <p className="flex flex-row items-center sm:justify-center">
          <Link
            href="/blog"
            className="flex items-center text-sm text-pink-700"
          >
            <span className="pl-1">Blog</span>
          </Link>
          <Link
            href={`${String(process.env.NEXT_PUBLIC_BASE_URL)}/blog/${article.slug
              }`}
            className="u-url"
          >
            <time
              className="ml-2 text-sm font-semibold text-pink-500 dt-published"
              dateTime={dateFormatMicroformat(article.published_date)}
            >
              {dateFormatLong(article.published_date)}
            </time>
          </Link>
          {article.comment_count > 0 && (
            <Link
              href="#comments"
              className="flex items-center ml-2 text-sm font-semibold link--blue"
            >
              <span>
                {article.comment_count}{" "}
                {pluralize("comment", article.comment_count)}
              </span>
            </Link>
          )}
          <Link
            href="/privacy"
            className="flex items-center ml-2 text-sm font-semibold text-orange-500"
          >
            <span>
              {article.views} {pluralize("view", article.views)}
            </span>
          </Link>
        </p>
        <h1 className="text-3xl font-bold leading-tight text-orange-500 sm:text-center md:text-5xl font-monoItalic p-name">
          {article.title}
        </h1>
        {article.description && article.description.length > 0 && (
          <div className="hidden p-summary">{article.description}</div>
        )}

        {article.cover_image && (
          <Image
            className="hidden u-photo"
            alt={`${article.title} poster`}
            loading="lazy"
            src={article.cover_image}
            width={800}
            height={600}
          />
        )}
      </div>
      {article.tags && article.tags.length > 0 && (
        <div className="mx-auto max-w-4xl sm:text-center">
          <Tags tags={article.tags} />
        </div>
      )}
    </div>
  );
};
