"use client";
import { useEffect, useState } from "react";
import Content from "./Content";
import Header from "./Header";
import AuthorFooter from "./AuthorFooter";
import { PageFooter } from "@/components/Layout/PageFooter";
import type { PostResponse } from "@/types";
import Comments from "@/components/Comments";
import readingTime from "reading-time";
import Note from "@/components/Note";

const dateDifferenceInDays = (date1: Date, date2: Date) => {
  const diffInMs = Math.abs(date2.getTime() - date1.getTime());
  return Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
};

export interface ArticleProps {
  article: PostResponse;
}

export const Article = ({ article }: ArticleProps) => {
  const [isOutdated, setIsOutdated] = useState(false);
  const readingTimeOfArticle = readingTime(article.content);

  const outdatedThresholdInDays = 365; // For example, 1 year

  useEffect(() => {
    if (article.published_date) {
      const daysSincePublication = dateDifferenceInDays(
        new Date(),
        new Date(article.published_date),
      );
      setIsOutdated(daysSincePublication > outdatedThresholdInDays);
    }
  }, [article.published_date]);

  return (
    <article className="relative leading-4 box-border z-1 list-outside">
      <div className="relative mx-auto mb-16 min-h-screen">
        <div className="md:px-10">
          <Header article={article} readingTime={readingTimeOfArticle} />
          {isOutdated && article.category.title === "Tutorials & Guides" && (
            <Note type="info" title="Before Reading:">
              This article was published more than {outdatedThresholdInDays} days
              ago. Please verify the information as it may be outdated.
            </Note>
          )}
          <div className="mt-20">
            {article.content && <Content markdown={article.content} />}
          </div>
          <PageFooter>
            <>
              <AuthorFooter />
              <Comments />
            </>
          </PageFooter>
        </div>
      </div>
    </article>
  );
};

export default Article;
