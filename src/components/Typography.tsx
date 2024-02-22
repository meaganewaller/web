import type { JSX } from 'react';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import React from 'react';

export function H1({ className, ...props }: JSX.IntrinsicElements['h1']) {
  return (
    <h1
      {...props}
      className={cn(
        "mt-12 scroll-m-20 font-mono text-4xl font-semibold text-pink-500 first:mt-0 lg:text-5xl dark:text-purple-300",
        className,
      )}
    />
  )
}
H1.displayName = "H1";

export function H2({ className, ...props }: JSX.IntrinsicElements['h2']) {
  return (
    <h2
      {...props}
      className={cn(
        "mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className,
      )}
    />
  );
}
H2.displayName = "H2";

export function H3({ className, ...props }: JSX.IntrinsicElements["h3"]) {
  return (
    <h3
      {...props}
      className={cn(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0",
        className,
      )}
    />
  );
}
H3.displayName = "H3";

export function H4({ className, ...props }: JSX.IntrinsicElements["h4"]) {
  return (
    <h4
      {...props}
      className={cn(
        "mt-6 scroll-m-20 text-xl font-semibold tracking-tight first:mt-0",
        className,
      )}
    />
  );
}
H4.displayName = "H4";

export function P({ className, ...props }: JSX.IntrinsicElements["p"]) {
  return (
    <p {...props} className={cn("align-justify my-6 font-serif text-2xl leading-10 tracking-normal first:mt-0", className)} />
  );
}
P.displayName = "P";

export function Blockquote({
  className,
  ...props
}: JSX.IntrinsicElements["blockquote"]) {
  return (
    <blockquote
      {...props}
      className={cn(
        "border-border mt-6 border-l-2 pl-6 italic first:mt-0",
        className,
      )}
    />
  );
}
Blockquote.displayName = "Blockquote";

export function Ul({ className, ...props }: JSX.IntrinsicElements["ul"]) {
  return (
    <ul
      {...props}
      className={cn("ml-6 mt-6 list-disc first:mt-0 [&>li]:mt-2", className)}
    />
  );
}
Ul.displayName = "Ul";

export function Ol({ className, ...props }: JSX.IntrinsicElements["ol"]) {
  return (
    <ol
      {...props}
      className={cn("ml-6 mt-6 list-decimal first:mt-0 [&>li]:mt-2", className)}
    />
  );
}
Ol.displayName = "Ol";

export function Code({ className, ...props }: JSX.IntrinsicElements["code"]) {
  return (
    <code
      {...props}
      className={cn(
        "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className,
      )}
    />
  );
}
Code.displayName = "Code";

export function A({ className, ...props }: JSX.IntrinsicElements["a"]) {
  if (
    (props.href?.startsWith('https://meaganwaller.com') ||
      props.href?.startsWith('/')) &&
    !/\.(json|atom|rss)$/.test(props.href)
  ) {
    const { href, ref: _, ...rest } = props;
    return (
      <Link
        className="break-words"
        href={href!.replace('https://meaganwaller.com', '')}
        {...rest}
      />
    )
  }

  return (
    <a
      {...props}
      target='_blank'
      rel='noopener noreferrer'
      className={cn(
        Object.keys(props).includes("data-rehype-autolink-headings")
          ? "rehype-autolink-headings"
          : "text-blue-700 underline-offset-4 hover:font-serif hover:italic hover:underline hover:decoration-blue-500 focus-visible:underline focus-visible:outline-none dark:text-yellow-300 dark:hover:decoration-yellow-100",
        className,
      )}
    />
  );
}
A.displayName = "A";

export function Pre({ className, ...props }: JSX.IntrinsicElements["pre"], showLineNumber: boolean) {
  return (
    <pre
      {...props}
      className={cn("mt-6 overflow-x-auto rounded-lg border shadow", className)}
    />
  );
}
Pre.displayName = "Pre";
