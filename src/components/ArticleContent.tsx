/* eslint-disable react/no-danger */
"use client";
import { FiClipboard } from "react-icons/fi";
import { memo, useState, Children } from "react";
import type { ReactNode } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
	oneLight,
	tomorrow,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

type ArticleContentProps = {
	markdown: string;
	className?: string;
};

function getHeadingId(children: ReactNode) {
	const text = Children.toArray(children).join("");
	const cleanedText = text.replace(/[^a-z0-9\s]/gi, "");

	return cleanedText.toLowerCase().replace(/ /g, "-");
}

function ArticleContent({ markdown, className = "" }: ArticleContentProps) {
	return (
		<article className={className}>
			<ReactMarkdown
				rehypePlugins={[rehypeRaw]}
				remarkPlugins={[remarkGfm]}
				components={{
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
								style={{ marginTop: "2rem" }}
							>
								{children}
							</h2>
						);
					},
					h3: ({ node, children, ...props }) => {
						return (
							<h3
								{...props}
								style={{ marginTop: "2rem" }}
								className="pt-4 font-monoItalic"
							>
								{children}
							</h3>
						);
					},
					p: ({ node, ...props }) => {
						return (
							<p
								{...props}
								className="pt-2 font-serif text-2xl leading-relaxed"
							/>
						);
					},
					br: ({ node, ...props }) => {
						return <br />;
					},
					a: ({ node, ...props }) => {
						return (
							<a
								{...props}
								className="p-1 text-purple-700 rounded-lg hover:text-purple-800 bg-purple-200/30 hover:bg-purple-600/15"
							/>
						);
					},
					code: CodeBlock as any,
				}}
			>
				{markdown}
			</ReactMarkdown>
		</article>
	);
}

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

	let [copyButtonText, setCopyButtonText] = useState("Copy");

	// changes the text back to `copy` after 1 second
	const changeText = (text: string) => {
		setCopyButtonText(text);
		setTimeout(() => setCopyButtonText("Copy"), 1000);
	};

	// parse and format "inline" CodeBlocks, (e.g. `single ticked`) or full code blocks (e.g. ``` )
	if (inline || !language)
		return (
			<code className="p-1 m-1 text-lg text-pink-700 bg-pink-200 rounded-md font-monoItalic">
				{children}
			</code>
		);

	return (
		<div className="my-4">
			<div className="flex justify-between items-center py-2 px-4 bg-pink-700 rounded-tl-sm rounded-tr-sm border-b border-pink-200 border-solid">
				<span className="text-white">{language}</span>
				<CopyToClipboard text={children}>
					<button
						type="button"
						className="inline-flex items-center py-1 px-2.5 text-sm font-medium text-center text-pink-800 bg-pink-200 rounded-lg hover:text-pink-50 hover:bg-pink-400"
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
				className={className}
				style={oneLight}
				customStyle={{
					marginTop: 0,
				}}
				// allowCopy={true}
				language={language}
				showLineNumbers={true}
				wrapLongLines
			>
				{children}
			</SyntaxHighlighter>
		</div>
	);
};

export default memo(ArticleContent);
