import ArticleContent from "./ArticleContent";
import ArticleHeader from "./ArticleHeader";
import { ArticleAboutMeaganFooter } from "@/components/marketing/ArticleAboutMeaganFooter";
// import { Comments } from "@/components/comments/Comments";
import { PageFooter } from "@/components/Layout/PageFooter";
import type { PostResponse } from "@/types";

import readingTime from "reading-time";

export interface ArticleHeaderProps {
	article: PostResponse;
}

export const Article = ({ article }: ArticleHeaderProps) => {
	const readingTimeOfArticle = readingTime(article.content);

	return (
		<article className="h-entry">
			<ArticleHeader article={article} readingTime={readingTimeOfArticle} />
			{article.content && <ArticleContent markdown={article.content} />}
			<PageFooter>
				<>
					<ArticleAboutMeaganFooter />
				</>
			</PageFooter>
		</article>
	);
};
