'use client'

import Image from 'next/image'
import cn from '@/utils/cn'
import Separator from '@/components/Separator'
import Title from '@/components/Title'
import ButtonLink from '@/components/ButtonLink'
import Button from '@/components/Button'
import Note from '@/components/Note'
import Link from '@/components/Link'
import Accordion from '@/components/Accordion'
import Tab from '@/components/Tab'
import Tabs from '@/components/Tabs'
import CodeBlock from '@/components/CodeBlock'

function filterTableCellProps(props: any) {
  const newProps = {
    ...props,
    rowSpan: props.rowspan,
    colSpan: props.colspan,
  }
  if (props.align) {
    if (newProps.style) {
      newProps.style = { ...newProps.style, textAlign: props.align }
    } else {
      newProps.style = { textAlign: props.align }
    }
  }

  delete newProps.align
  delete newProps.rowspan
  delete newProps.colspan
  return newProps
}

export const components = {
  h1: ({ children, className, ...props }: any) => {
    return (
      <Title level={1} {...props}>
        {children}
      </Title>
    )
  },
  h2: ({ children, className, ...props }: any) => {
    return (
      <Title level={2} {...props}>
        {children}
      </Title>
    )
  },
  h3: ({ children, className, ...props }: any) => {
    return (
      <Title level={3} {...props}>
        {children}
      </Title>
    )
  },
  h4: ({ children, className, ...props }: any) => {
    return (
      <Title level={4} {...props}>
        {children}
      </Title>
    )
  },
  h5: ({ children, className, ...props }: any) => {
    return (
      <Title level={5} {...props}>
        {children}
      </Title>
    )
  },
  h6: ({ children, className, ...props }: any) => {
    return (
      <Title level={6} {...props}>
        {children}
      </Title>
    )
  },
  p: ({ children }: any) => (
    <p className="text-xl leading-10 font-serif break-words w-full font-thin my-2">{children}</p>
  ),
  ul: ({ children, className, ordered, ...props }: any) => (
    <ul
      className={cn('mb-4 list-flower pl-6 marker:text-purple-800 dark:marker:text-orange-300', className)}
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children }: any) => (
    <ol className="mb-4 list-decimal pl-4 marker:text-purple-800 dark:marker:text-orange-300">{children}</ol>
  ),
  li: ({ children, ordered, ...props }: any) => (
    <li className="mb-2 text-xl leading-snug text-pink-800 dark:text-green-200 marker:not-italic italic" {...props}>
      {children}
    </li>
  ),
  a: ({ children, href = '#', ...props }: any) => (
    <Link href={href} {...props}>
      {children}
    </Link>
  ),
  strong: ({ children }: any) => <strong className="font-bold">{children}</strong>,
  em: ({ children }: any) => <em className="italic">{children}</em>,
  blockquote: ({ children }: any) => (
    <blockquote className="border-l-4 dark:border-yellow-400 border-purple-500 bg-purple-300/30 dark:bg-lime-500/30 pl-4 mb-4 py-2 italic">
      {children}
    </blockquote>
  ),
  hr: ({ ...props }: any) => <Separator orientation="horizontal" {...props} />,
  article: ({ children, className }: any) => <article className={cn(className, 'my-3')}>{children}</article>,
  details: ({ children, ...props }: any) => (
    <details className="mb-4" {...props}>
      {children}
    </details>
  ),
  summary: ({ children, ...props }: any) => (
    <summary className="list-none underline cursor-pointer" {...props}>
      {children}
    </summary>
  ),
  table: (props: any) => {
    return (
      <table
        className={cn(
          'text-lg mx-auto border-collapse overflow-hidden border divide-y-2',
          'divide-violet-800 border-violet-600 dark:border-lime-200 dark:bg-lime-900/50 bg-violet-300/50 dark:text-lime-50 text-violet-800 dark:bg-lime-500',
          // 'text-lg w-[90%] mx-auto border-collapse overflow-hidden border border-violet-600 dark:border-green-200 dark:bg-green-1000/50 bg-violet-300/50 dark:text-green-50 text-violet-800 dark:bg-purple-900 divide-y-2 dark:divide-green-300 divide-violet-700'
        )}
        {...props}
      />
    )
  },
  thead: (props: any) => {
    return <thead className="bg-violet-500 dark:bg-lime-800 p-2" {...props} />
  },
  tbody: (props: any) => {
    return <tbody className="font-normal text-base dark:text-lime-1000" {...props} />
  },
  tfoot: (props: any) => {
    return <tfoot className="" {...props} />
  },
  th: (props: any) => {
    return <th className="font-sans text-left p-2" {...filterTableCellProps(props)} />
  },
  tr: (props: any) => {
    return (
      <tr
        key={props.id}
        className="border-b dark:even:bg-lime-800 dark:border-lime-800 even:bg-violet-200"
        {...props}
      />
    )
  },
  td: (props: any) => {
    return <td className="font-sans text-left py-3 px-2" {...filterTableCellProps(props)} />
  },
  Title,
  ButtonLink,
  Button,
  Note,
  Accordion,
  Tab,
  Tabs,
  pre: ({ children, ...props }: any) => (
    <pre {...props} className="p-3 text-[0.9em] [&>code]:p-0 rounded-xl font-mono">
      {children}
    </pre>
  ),
  code: CodeBlock as any,
  img: ({ src, alt, ...props }: any) => {
    let Component: string | typeof Image = Image

    if (!props.width && !props.height) {
      Component = 'img'
    }

    return (
      <figure className="next-image relative">
        <Component src={src} alt={alt} {...props} />
        {alt && <figcaption>{alt}</figcaption>}
      </figure>
    )
  },
}
