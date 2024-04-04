'use client';

import { useState } from 'react';
import Image from 'next/image';
import cn from '@/utils/cn';
import Separator from '@/components/Separator';
import Title from '@/components/Title';
import ButtonLink from '@/components/ButtonLink';
import Button from '@/components/Button';
import Note from '@/components/Note';
import Link from '@/components/Link';
import Accordion from '@/components/Accordion'
import Tab from '@/components/Tab'
import Tabs from '@/components/Tabs'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from 'next-themes';
import CopyToClipboard from "react-copy-to-clipboard";
import { FiClipboard, FiToggleLeft, FiToggleRight } from "react-icons/fi";

/*
  Define a custom reusable code block component
*/
type CodeBlockProps = {
  className?: string;
  inline?: boolean;
  children: string;
};
const CodeBlock = ({
  className = "not-prose",
  inline = false,
  children,
}: CodeBlockProps) => {
  const [showLineNumbers, setShowLineNumbers] = useState(true);
  const [copyButtonText, setCopyButtonText] = useState("Copy");
  const { theme } = useTheme();
  const colorTheme = theme === "dark" ? oneDark : oneLight;

  const toggleLineNumbers = () => {
    setShowLineNumbers(!showLineNumbers);
  };

  const changeText = (text: string) => {
    setCopyButtonText(text);
    setTimeout(() => setCopyButtonText("Copy"), 1000);
  };

  // trim white space and extra lines at the end
  if (Array.isArray(children)) {
    for (let i = 0; i < children.length; i++) {
      children[i] = children[i].trim();
    }
    // children[children.length - 1] = children[children.length - 1].trim();
  } else if (typeof children === "string") children = children.trim();

  // compute the `language`
  let language = className?.slice("language-".length).toLowerCase() || "";

  if (language === "sh") language = "bash";

  // changes the text back to `copy` after 1 second

  // parse and format "inline" CodeBlocks, (e.g. `single ticked`) or full code blocks (e.g. ``` )
  if (inline || !language)
    return (
      <code className="p-1 m-1 text-lg text-teal-900 bg-teal-300/40 rounded-lg font-monoItalic">
        {children}
      </code>
    );

  return (
    <div className="my-4">
      <div className="flex justify-between items-center py-2 px-4 bg-gradient-to-l from-teal-600 to-orange-400 dark:from-orange-900 dark:to-yellow-900">
        <button
          type="button"
          className="text-teal-900 focus:outline-none dark:text-orange-300"
          onClick={toggleLineNumbers}
        >
          {showLineNumbers ? (
            <FiToggleLeft
              className="w-6 h-6"
              size={6}
              aria-label="Hide Line Numbers"
            />
          ) : (
            <FiToggleRight
              className="w-6 h-6"
              size={6}
              aria-label="Show Line Numbers"
            />
          )}
        </button>

        <span className="text-lg font-normal text-teal-900 dark:text-orange-100 font-monoItalic">{language}</span>
        <CopyToClipboard text={children}>
          <button
            type="button"
            className="inline-flex items-center py-1 px-2.5 text-sm font-medium text-center hover:text-teal-100 hover:bg-teal-900 rounded-lg text-teal-900 bg-transparent border-teal-900 border border-solid hover:border-transparent dark:text-orange-100 dark:border-orange-100 dark:hover:bg-yellow-500 dark:hover:text-orange-1100"
            onClick={() => {
              changeText("Copied!");
            }}
          >
            <FiClipboard className="mr-2 -ml-0.5 w-4 h-4" aria-hidden="true" />
            {copyButtonText}
          </button>
        </CopyToClipboard>
      </div>

      <SyntaxHighlighter
        className={cn(className, "mb-0")}
        style={colorTheme}
        customStyle={{
          marginTop: 0,
        }}
        // allowCopy={true}
        language={language}
        showLineNumbers={showLineNumbers}
        wrapLongLines
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

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
    );
  },
  h3: ({ children, className, ...props }: any) => {
    return (
      <Title level={3} {...props}>
        {children}
      </Title>
    );
  },
  h4: ({ children, className, ...props }: any) => {
    return (
      <Title level={4} {...props}>
        {children}
      </Title>
    );
  },
  h5: ({ children, className, ...props }: any) => {
    return (
      <Title level={5} {...props}>
        {children}
      </Title>
    );
  },
  h6: ({ children, className, ...props }: any) => {
    return (
      <Title level={6} {...props}>
        {children}
      </Title>
    );
  },
  p: ({ children }: any) => (
    <p className="mb-4 md:text-2xl leading-snug font-serif text-lg">{children}</p>
  ),
  ul: ({ children, className, ordered, ...props }: any) => (
    <ul className={cn("mb-4 list-flower pl-6", className)} {...props}>
      {children}
    </ul>
  ),
  ol: ({ children }: any) => (
    <ol className="mb-4 list-decimal pl-4">{children}</ol>
  ),
  li: ({ children, ordered, ...props }: any) => (
    <li className="mb-2 text-xl leading-snug" {...props}>
      {children}
    </li>
  ),
  a: ({ children, href = '#', ...props }: any) => (
    <Link href={href} {...props}>
      {children}
    </Link>
  ),
  strong: ({ children }: any) => (
    <strong className="font-bold">{children}</strong>
  ),
  em: ({ children }: any) => <em className="italic">{children}</em>,
  blockquote: ({ children }: any) => (
    <blockquote className="border-l-4 border-purple-500 bg-purple-300/30 pl-4 mb-4 py-2 italic">
      {children}
    </blockquote>
  ),
  hr: ({ ...props }: any) => <Separator orientation="horizontal" {...props} />,
  article: ({ children, className }: any) => (
    <article className={cn(className, "mb-24")}>{children}</article>
  ),
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
  Title,
  ButtonLink,
  Button,
  Note,
  Accordion,
  Tab,
  Tabs,
  pre: ({ children, ...props }: any) => (
    <pre {...props} className="p-3 text-[0.9em] [&>code]:p-0 rounded-xl">
      {children}
    </pre>
  ),

  code: CodeBlock as any,
  img: ({ src, alt, ...props }: any) => {
    let Component: string | typeof Image = Image;

    if (!props.width && !props.height) {
      Component = "img";
    }

    return (
      <figure className="next-image relative">
        <Component src={src} alt={alt} {...props} />
        {alt && <figcaption>{alt}</figcaption>}
      </figure>
    );
  },
};
