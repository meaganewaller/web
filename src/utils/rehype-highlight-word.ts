import { visit } from 'unist-util-visit';
import { toHtml } from 'hast-util-to-html';
import { unified } from 'unified';
import parse from 'rehype-parse';
import { Node } from 'unist';

const CALLOUT = /__(.*?)__/g;

const rehypeHighlightWord = (code: Node[]): Node[] => {
  const html = toHtml(code);
  const result = html.replace(CALLOUT, (_, text) => `<span class="highlight-word">${text}</span>`);
  const hast = unified().use(parse, { emitParseErrors: true, fragment: true }).parse(result);
  return (hast as { children: Node[] }).children;
};

export default rehypeHighlightWord;
