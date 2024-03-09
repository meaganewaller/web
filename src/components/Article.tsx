import ArticleContent from "./ArticleContent";
import { ArticleHeader } from "./ArticleHeader";
import { ArticleAboutMeaganFooter } from "@/components/marketing/ArticleAboutMeaganFooter";
// import { Comments } from "@/components/comments/Comments";
import { PageFooter } from "@/components/Layout/PageFooter";
import type { PostResponse } from "@/types";
import { BackToTop } from "./BackToTop";

export interface ArticleHeaderProps {
  article: PostResponse;
}

export const Article = ({ article }: ArticleHeaderProps) => {
  return (
    <article className="h-entry">
      <ArticleHeader article={article} />
      {article.content && <ArticleContent markdown={article.content} />}
      <PageFooter>
        <>
          <ArticleAboutMeaganFooter />
        </>
      </PageFooter>
    </article>
  );
};
