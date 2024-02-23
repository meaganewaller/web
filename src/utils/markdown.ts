import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkMdx from 'remark-mdx';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlightCode from './rehype-highlight-code';
import rehypeMetaAttribute from './rehype-meta-attribute';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';


export const toHTML = async (raw: string) => {
  return String(
    await unified()
      .use(remarkParse)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeMetaAttribute)
      .use(rehypeHighlightCode)
      .use(rehypeRaw)
      .use(rehypeSlug)
      .use(rehypeStringify)
      .process(raw),
  );
};
