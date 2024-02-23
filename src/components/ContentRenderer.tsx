'use client';

import { MDXRemote } from 'next-mdx-remote';
import MDXComponents from './CustomMDX';

interface Props {
  content: string;
}

const ContentRenderer = ({ content }: Props) => {
  return (
    <div data-testid="content mt-6">
      <MDXRemote
        compiledSource={content}
        components={MDXComponents}
        scope={undefined}
        frontmatter={undefined}
        lazy
      />
    </div>
  )
}

export default ContentRenderer;
