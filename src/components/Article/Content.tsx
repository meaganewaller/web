/* eslint-disable react/no-danger */
"use client";

import type { Components } from "react-markdown";

import cn from "@/utils/cn";
import { Children, memo, useState } from "react";
import type { ReactNode } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FiClipboard, FiToggleLeft, FiToggleRight } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import Note from "@/components/Note";
import Tab, { type TabProps } from "@/components/Tab";
import Tabs, { type TabsProps } from "@/components/Tabs";
import Accordion, { type AccordionProps } from "@/components/Accordion";

import type { NoteProps } from "@/components/Note";

interface CustomComponents extends Components {
  note: React.ComponentType<NoteProps>;
  tabs: React.ComponentType<TabsProps>;
  tab: React.ComponentType<TabProps>;
  accordion: React.ComponentType<AccordionProps>;
}

export type ContentProps = {
  markdown: string;
  className?: string;
};

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
      <code className="p-1 m-1 text-lg text-primary-700 bg-primary-200 rounded-md font-monoItalic">
        {children}
      </code>
    );

  return (
    <div className="my-4">
      <div className="flex justify-between items-center py-2 px-4 bg-gradient-to-b from-primary-500 via-primary-400 to-primary-300">
        <button
          type="button"
          className="text-primary-100 focus:outline-none"
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

        <span className="text-primary-100 font-monoItalic">{language}</span>
        <CopyToClipboard text={children}>
          <button
            type="button"
            className="inline-flex items-center py-1 px-2.5 text-sm font-medium text-center hover:text-primary-500 hover:bg-primary-100 rounded-lg text-primary-100 bg-transparent border-primary-100 border border-solid hover:border-transparent"
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
        style={oneLight}
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

const Blockquote = ({ children }: { children?: ReactNode }) => {
  return (
    <blockquote className="relative my-10 mx-0 text-primary-500 bg-primary-300/15 rounded-lg text-lg leading-loose p-12">
      <FaQuoteLeft className="absolute left-6 top-4 text-primary-600" size={10} />
      <div>{children}</div>
      <FaQuoteRight
        className="absolute right-6 bottom-4 text-primary-600"
        size={10}
      />
    </blockquote>
  );
};

const ListItem = ({ children }: { children?: ReactNode }) => {
  return (
    <li className="text-xl my-2 font-serif list-inside text-primary-600">
      {children}
    </li>
  );
};

const UnorderedList = ({ children }: { children?: ReactNode }) => {
  return <ul className="my-10 mx-0 list-flower">{children}</ul>;
};

const OrderedList = ({ children }: { children?: ReactNode }) => {
  return <ol className="my-10 mx-0 list-inside">{children}</ol>;
};

function getHeadingId(children: ReactNode) {
  const text = Children.toArray(children).join("");
  const cleanedText = text.replace(/[^a-z0-9\s]/gi, "");

  return cleanedText.toLowerCase().replace(/ /g, "-");
}

const components: Partial<CustomComponents> = {
  table: ({ node, className, children, ...props }) => (
    <div className="w-full overflow-auto ring-1 ring-inset">
      <table
        className="w-full text-neutral-900 ring-inset rounded-md"
        {...props}
      >
        {children}
      </table>
    </div>
  ),
  thead: ({ node, className, children, ...props }) => (
    <thead
      className="font-sans bg-primary-500/10 w-full border-b-1 border-solid border-primary-500/50 text-primary-500"
      {...props}
    >
      {children}
    </thead>
  ),
  tr: ({ node, className, children, ...props }) => (
    <tr
      className="w-fit [&>*]:text-md [&>*]:border [&>*]:border-solid [&>*]:border-primary-500/70 [&>*]:border-collapse [&>th]:whitespace-pre-line [&>th]:p-2 [&>td]:whitespace-pre-line [&>td]:p-2"
      {...props}
    >
      {children}
    </tr>
  ),
  tbody: ({ node, className, children, ...props }) => (
    <tbody
      className="font-sans w-full [&>*]:border [&>*]:border-solid [&>*]:border-primary-200 [&>*]:border-collapse"
      {...props}
    >
      {children}
    </tbody>
  ),
  note: Note,
  tabs: Tabs,
  tab: Tab,
  h1: ({ node, children, ...props }) => {
    return (
      <h1
        {...props}
        style={{ marginTop: "2rem" }}
        className="pt-8 font-monoItalic"
      >
        {children}
      </h1>
    );
  },
  h2: ({ node, children, ...props }) => {
    return (
      <h2
        className="pt-5 font-monoItalic"
        {...props}
        id={getHeadingId(children)}
        style={{ marginTop: "1.8rem" }}
      >
        {children}
      </h2>
    );
  },
  h3: ({ node, children, ...props }) => {
    return (
      <h3
        {...props}
        style={{ marginTop: "1.6rem" }}
        id={getHeadingId(children)}
        className="pt-4 font-monoItalic"
      >
        {children}
      </h3>
    );
  },
  h4: ({ node, children, ...props }) => {
    return (
      <h4
        {...props}
        style={{ marginTop: "1.4rem" }}
        className="pt-3 font-monoItalic"
      >
        {children}
      </h4>
    );
  },
  h5: ({ node, children, ...props }) => {
    return (
      <h5
        {...props}
        style={{ marginTop: "1.2rem" }}
        className="pt-2 font-monoItalic"
      >
        {children}
      </h5>
    );
  },
  h6: ({ node, children, ...props }) => {
    return (
      <h6
        {...props}
        style={{ marginTop: "1rem" }}
        className="pt-1 font-monoItalic"
      >
        {children}
      </h6>
    );
  },
  p: ({ node, ...props }) => {
    return (
      <p {...props} className="pt-2 font-serif text-2xl leading-relaxed" />
    );
  },
  a: ({ node, ...props }) => {
    return (
      <a
        {...props}
        className="p-1 text-info-700 rounded-lg hover:text-info-800 bg-info-200/30 hover:bg-info-600/15"
      />
    );
  },
  code: CodeBlock as any,
  blockquote: ({ ...props }) => <Blockquote {...props} />,
  ul: ({ ...props }) => <UnorderedList {...props} />,
  ol: ({ ...props }) => <OrderedList {...props} />,
  li: ({ ...props }) => <ListItem {...props} />,
  accordion: Accordion,
};

function Content({ markdown, className = "" }: ContentProps) {
  return (
    <article className={cn(className)}>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
        components={components}
      >
        {markdown}
      </ReactMarkdown>
    </article>
  );
}

export default memo(Content);

