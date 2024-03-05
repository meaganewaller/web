'use client'

import React, { FC, memo } from 'react'
import ReactMarkdown, { Options } from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkNormalizeHeadings from 'remark-normalize-headings'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import { atelierPlateauLight, atelierPlateauDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import Link from 'next/link'
import Note from '@/components/Markdown/Note'
import { cn } from '@/utils/cn'
import { useTheme } from 'next-themes'
import Tabs from '@/components/Markdown/Tabs'
import Tab from '@/components/Markdown/Tab'
import { Code } from '@/components/Markdown/Code'

export const MemoizedReactMarkdown: FC<Options> = memo(
  ReactMarkdown,
  (prevProps, nextProps) =>
    prevProps.children === nextProps.children &&
    prevProps.className === nextProps.className
)

interface MarkdownProps {
  children: string;
}

const createHeading = (children: string, level: number) => {
  const element = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <div id={String(children).toLowerCase().replace(/\s/g, '-')} className="relative m-0 leading-7">
      {element === 'h1' && (
        <h1 className='font-monoItalic relative mb-8 mt-24 break-words text-4xl font-semibold text-purple-500 dark:text-yellow-400'>
          {children}
        </h1>
      )}
      {element === 'h2' && (
        <h2 className='font-monoItalic relative mb-8 mt-24 break-words text-3xl font-normal text-purple-500 dark:text-yellow-400'>
          {children}
        </h2>
      )}
      {element === 'h3' && (
        <h3 className={cn('font-monoItalic relative my-5 pb-2 text-2xl font-medium italic text-purple-500 dark:text-yellow-400')}>
          {children}
        </h3>
      )}
      {element === 'h4' && (
        <h4 className={cn('font-monoItalic relative my-5 pb-2 text-xl font-medium italic text-purple-500 dark:text-yellow-400')}>
          {children}
        </h4>
      )}
      {element === 'h5' && (
        <h5 className={cn('font-monoItalic relative my-5 pb-2 text-lg font-medium italic text-purple-500 dark:text-yellow-400')}>
          {children}
        </h5>
      )}
      {element === 'h6' && (
        <h6 className={cn('font-monoItalic relative my-5 pb-2 text-base font-medium italic text-purple-500 dark:text-yellow-400')}>
          {children}
        </h6>
      )}
    </div>
  )
}

export const Markdown = ({ children }: MarkdownProps) => {
  const { systemTheme, theme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;

  const syntaxColor = currentTheme === 'dark' ? atelierPlateauDark : atelierPlateauLight;

  const components = {
    blockquote({ node, inline, className, children, ...props }: any) {
      return (
        <blockquote className=''>
          <p className="mx-0 mb-6 mt-0 break-words text-lg italic leading-7 text-purple-400">{children}</p>
        </blockquote>
      )
    },
    p({ node, inline, className, children, ...props }: any) {
      return (
        <p className="mx-0 mb-6 mt-0 break-words font-serif text-2xl leading-8 text-neutral-800 dark:text-neutral-50">{children}</p>
      )
    },
    a({ node, inline, className, children, ...props }: any) {
      const href: string = props.href;

      return href.startsWith('/') || href.startsWith('#') ? (
        <Link
          {...props}
          href={href}
          className="font-normal text-blue-500 no-underline"
        >
          {children}
        </Link>
      ) : (
        <a
          {...props}
          className="font-semibold text-blue-500 hover:italic hover:text-blue-600 hover:decoration-blue-400 hover:decoration-wavy hover:underline-offset-2 dark:text-green-300 dark:hover:text-green-200 dark:hover:decoration-green-400"
          target="_blank" rel="noopener noreferrer"
        >
          {children}
        </a>
      )
    },
    h1: ({ node, inline, className, children, ...props }: any) => createHeading(children, 1),
    h2: ({ node, inline, className, children, ...props }: any) => createHeading(children, 2),
    h3: ({ node, inline, className, children, ...props }: any) => createHeading(children, 3),
    h4: ({ node, inline, className, children, ...props }: any) => createHeading(children, 4),
    h5: ({ node, inline, className, children, ...props }: any) => createHeading(children, 5),
    h6: ({ node, inline, className, children, ...props }: any) => createHeading(children, 6),
    ul({ node, inline, className, children, ...props }: any) {
      return (
        <ul className="list-flower mx-0 mb-8 mt-0 p-0 text-lg leading-7">
          {children}
        </ul>
      )
    },
    li({ node, inline, className, children, ...props }: any) {
      return (
        <li className="list-flower mx-0 mb-4 mt-0 flex items-start text-left text-lg leading-7">
          {children}
        </li>
      )
    },
    // pre: Code,
    code({ node, inline, className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || '')

      if (inline) {
        return (
          <code className={cn('rounded-lg bg-pink-200/40 p-1 text-lg text-pink-600 dark:bg-purple-400/40 dark:text-purple-100', className)} {...props}>
            {children}
          </code>
        )
      }

      return (
        <Code
          key={Math.random()}
          language={(match && match[1]) || ""}
          value={String(children).replace(/\n$/, '')}
          {...props}
        />
      )
    },
    note: Note,
    tabs: Tabs,
    tab: Tab,
    table: ({ node, className, children, ...props }: any) => (
      <div className="w-full overflow-auto ring-1 ring-inset dark:ring-purple-300/90">
        <table className="w-full text-neutral-900 dark:text-neutral-50 ring-inset rounded-md" {...props}>
          {children}
        </table>
      </div>
    ),
    thead: ({ node, className, children, ...props }: any) => (
      <thead className="font-sans bg-pink-500/10 w-full border-b-1 border-solid border-pink-500/50 text-pink-500" {...props}>
        {children}
      </thead>
    ),
    tr: ({ node, className, children, isHeader, ...props }: any) => (
      <tr
        className="w-fit [&>*]:text-md [&>*]:border [&>*]:border-solid [&>*]:border-pink-500/70 [&>*]:border-collapse [&>th]:whitespace-pre-line [&>th]:p-2 [&>td]:whitespace-pre-line [&>td]:p-2"
        {...props}
      >
        {children}
      </tr>
    ),
    tbody: ({ node, className, children, ...props }: any) => (
      <tbody className="font-sans w-full [&>*]:border [&>*]:border-solid [&>*]:border-pink-200 [&>*]:border-collapse" {...props}>
        {children}
      </tbody>
    ),
    img: ({ node, className, children, ...props }: any) => {
      console.log("props", props)

      return (<img {...props} src={props.src} title={props.title} alt={props.caption} className="w-full overflow-hidden rounded-md ring-1 ring-pink-500/60 shadow-md my-4" />)
    }
  };

  return (
    <MemoizedReactMarkdown
      className="break-words prose-p:leading-relaxed prose-pre:p-0"
      remarkPlugins={[remarkGfm, remarkNormalizeHeadings]}
      rehypePlugins={[rehypeRaw, rehypeSlug]}
      components={components}
    >
      {children}
    </MemoizedReactMarkdown>
  )
}
