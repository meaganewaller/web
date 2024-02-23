import {
  Anchor
} from '@/components/MDXRemote/Anchor';
import { MDXRemote } from 'next-mdx-remote/rsc';

const components = {
  a: function A(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
    return <Anchor underline {...props} />;
  },
  h1: (props) => (
    <h1 className="mb-2 mt-4 font-mono text-4xl font-normal italic text-pink-400 dark:text-purple-300" {...props}>
      {props.children}
    </h1>
  ),
  h2: (props) => {}
}

export function Highlight(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}

// import React, { useEffect } from 'react';
// import hljs from 'highlight.js';
// import 'highlight.js/styles/base16/atelier-plateau-light.css';

// interface IProps {
//   htmlContent: string;
// }

// const Highlight = ({ htmlContent }: IProps) => {
//   useEffect(() => {
//     hljs.highlightAll();
//   }, [htmlContent]);

//   return <div
//     className="e-content prose dark:prose-invert mx-auto"
//     dangerouslySetInnerHTML={{ __html: htmlContent }} />;
// };

// export default Highlight;
