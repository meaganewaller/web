export type MarkdownMetadata = {
  author?: string;
  tags?: string[];
  date?: string;
  title: string;
  summary?: string;
  cover?: string;
  slug?: string;
  wordCount?: number;
  readingTime?: number;
  [key: string]: unknown;
}
