import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';

const rehypeHighlightOptions = {};

export const toHTML = async (raw: string) => {
  return String(
    await unified()
      .use(remarkParse)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeHighlight, rehypeHighlightOptions)
      .use(rehypeRaw)
      .use(rehypeSlug)
      .use(rehypeStringify)
      .process(raw),
  );
};
