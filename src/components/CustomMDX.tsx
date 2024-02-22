'use client';

import type { MarkdownMetadata } from '@/types/markdown';
import { cn } from '@/utils/cn';
import type { FC } from 'react';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import remarkRehype from 'remark-rehype';

import styles from './style.module.css';
import { A, BlockQuote, Code, H1, H2, H3, H4, H5, H6, Img, Li, Ol, Pre, Table, Ul } from './Markdown';
import rehypeRaw from '@/config/rehypeRaw';

export type MarkdownProps = {
  source: string;
  className?: string;
  metadataRef?: React.MutableRefObject<MarkdownMetadata>;
};

export const CustomMDX: FC<MarkdownProps> = ({
  source,
  className,
}) => {
  return (
    <ReactMarkdown
      className={cn(styles.markdownBody, className)}
      rehypePlugins={[rehypeSlug, rehypeRaw]}
      components={{
        h1: H1,
        h2: H2,
        h3: H3,
        h4: H4,
        h5: H5,
        h6: H6,
        blockquote: BlockQuote,
        table: Table,
        a: A,
        code: Code,
        pre: Pre,
        li: Li,
        ul: Ul,
        ol: Ol,
        img: Img,
      }}
    >
      {source}
    </ReactMarkdown>
  );
};

export default CustomMDX;

// import ReactMarkdown from 'react-markdown';
// import RemarkBreaks from 'remark-breaks';
// import RemarkGfm from 'remark-gfm';
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { atelierPlateauLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
// import type { RefObject } from 'react';
// import { useEffect, useRef, useState, createElement, ReactElement, ReactNode } from 'react';
// import { cn } from '@/utils/cn';
// import CopyBtn from './CopyBtn';
// import s from './style.module.css';

// import {
//  Ol,
//  Ul,
//  P,
//  Blockquote,
//  A,
// } from './Typography';

// type HeadingProps = {
//  level: 1 | 2 | 3 | 4 | 5 | 6;
// } & React.HTMLAttributes<HTMLHeadingElement>;

// type NodeToProps<T> = {
//   node: T;
//   className?: string;
//   children: T extends { children: any } ? ReactNode : never;
// };

// type CustomRenderers = {
//   [K in keyof JSX.IntrinsicElements]?: (
//     props: NodeToProps<JSX.IntrinsicElements[K]>
//   ) => ReactElement;
// };

// function slugify(str: string) {
//  return str
//    .toString()
//    .toLowerCase()
//    .trim() // Remove whitespace from both ends of a string
//    .replace(/\s+/g, "-") // Replace spaces with -
//    .replace(/&/g, "-and-") // Replace & with 'and'
//    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
//    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
// }

// function createHeading(level: number) {
//  return function Heading({ children }: { children?: React.ReactNode }) {
//    if (typeof children !== "string") {
//      console.warn("Heading children is not a string", children);
//      return createElement(`h${level}`, {}, children);
//    }

//    let slug = slugify(children);
//    return createElement(`h${level}`, { id: slug }, [
//      createElement(
//        "a",
//        {
//          href: `#${slug}`,
//          key: `link-${slug}`,
//          className: "anchor decoration-transparent font-monoItalic text-pink-500 dark:text-purple-300 hover:text-pink-400 hover:dark:text-purple-400",
//        },
//        children,
//      ),
//    ]);
//  };
// }

// const capitalizationLanguageNameMap: Record<string, string> = {
//   bash: 'Bash',
//   c: 'C',
//   coffeescript: 'CoffeeScript',
//   cpp: 'C++',
//   csharp: 'C#',
//   css: 'CSS',
//   go: 'Go',
//   graphql: 'GraphQL',
//   html: 'HTML',
//   java: 'Java',
//   javascript: 'JavaScript',
//   json: 'JSON',
//   kotlin: 'Kotlin',
//   less: 'Less',
//   lua: 'Lua',
//   markdown: 'Markdown',
//   matlab: 'MATLAB',
//   objectivec: 'Objective-C',
//   perl: 'Perl',
//   php: 'PHP',
//   plaintext: 'Plain Text',
//   python: 'Python',
//   r: 'R',
//   ruby: 'Ruby',
//   rust: 'Rust',
//   sass: 'Sass',
//   scss: 'SCSS',
//   sh: 'Bash',
//   shell: 'Shell',
//   shellsession: 'Shell Session',
//   sql: 'SQL',
//   svg: 'SVG',
//   swift: 'Swift',
//   typescript: 'TypeScript',
//   xml: 'XML',
//   yaml: 'YAML',
// }

// const getCorrectCapitalizationLanguageName = (language: string) => {
//   if (!language)
//     return 'Plain'

//   if (language in capitalizationLanguageNameMap)
//     return capitalizationLanguageNameMap[language]

//   return language.charAt(0).toUpperCase() + language.substring(1);
// }

// function PreCode(props: { children: any }) {
//   const ref = useRef<HTMLPreElement>(null);

//   return (
//     <pre ref={ref}>
//       <span
//         className="copy-code-button"
//         onClick={() => {
//           if (ref.current) {
//             navigator.clipboard.writeText(ref.current.innerText);
//           }
//         }}
//       ></span>
//       {props.children}
//     </pre>
//   )
// }

// const useLazyLoad = (ref: RefObject<HTMLElement>): boolean => {
//   const [isIntersecting, setIntersecting] = useState<boolean>(false)

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) {
//         setIntersecting(true)
//         observer.disconnect()
//       }
//     })

//     if (ref.current)
//       observer.observe(ref.current)

//     return () => {
//       observer.disconnect()
//     }
//   }, [ref])

//   return isIntersecting
// }

// type CustomMDXProps = {
//   content: string;
//   className?: string;
//   inline: boolean;
//   children: any;
// }


// export function CustomMDX(props: { content: string; className?: string }) {
//   const components: CustomRenderers = {
//     code: (props) => {
//       console.log(props);
//       const { node, className, children, ...rest } = props
//       const match = /language-(\w+)/.exec(className || '')
//       const language = match?.[1]
//       const languageShowName = getCorrectCapitalizationLanguageName(language || '')
//       return (!inline && match)
//         ? (
//           <div>
//             <div
//               className='flex h-8 items-center justify-between border-b p-1 pl-3'
//               style={{
//                 borderColor: 'rgba(0, 0, 0, 0.05)',
//               }}
//             >
//               <div className='text-[13px] font-normal text-gray-500'>{languageShowName}</div>
//               <div style={{ display: 'flex' }}>
//                 <CopyBtn
//                   className={cn(s.copyBtn, 'mr-1')}
//                   value={String(children).replace(/\n$/, '')}
//                   isPlain
//                 />
//               </div>
//             </div>

//             <SyntaxHighlighter
//               {...props}
//               style={atelierPlateauLight}
//               customStyle={{
//                 paddingLeft: 12,
//                 backgroundColor: '#fff',
//               }}
//               language={match[1]}
//               showLineNumbers
//               PreTag="div"
//             >
//               {String(children).replace(/\n$/, '')}
//             </SyntaxHighlighter>
//           </div>
//         )
//         : (
//           <code {...props} className={className}>
//             {children}
//           </code>
//         )
//     },
//     em: (props: any) => (
//       <em className="font-serif italic text-neutral-700 dark:text-neutral-100" {...props} />
//      ),
//     p: (props: any) => (
//       <P
//         {...props}
//         className="text-neutral-800 dark:text-neutral-200"
//       />
//     ),
//     h1: createHeading(1),
//     h2: createHeading(2),
//     h3: createHeading(3),
//     h4: createHeading(4),
//     h5: createHeading(5),
//     h6: createHeading(6),
//     li: (props: any) => {
//       <li className="list-flower" {...props}>
//         {props.children}
//       </li>
//     },
//     a: A,
//     hr: (props: any) => (
//       <hr className="mt-7" {...props}>
//         {props.children}
//       </hr>
//     ),
//     ol: Ol,
//     ul: Ul,
//     blockquote: Blockquote,
//   };

//   return (
//     <div className={cn(props.className, 'markdown-body')}>
//       <ReactMarkdown
//         remarkPlugins={[RemarkGfm, RemarkBreaks]}
//         renderers={components}
//       >
//         {props.content}
//       </ReactMarkdown>
//     </div>
//   )
// }
