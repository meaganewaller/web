import Providers from '@/providers';
import { Suspense } from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Loading from './loading';
import { DM_Sans as Sans, Prata as Serif, Fira_Code as Mono, Press_Start_2P } from 'next/font/google';

import '@/styles/globals.css';

export interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: `%s | meagan waller`,
    default: `meagan waller | it's a blog!`,
  },
  description: `meagan waller's personal website and blog`,
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
};

const sans = Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const serif = Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-serif',
});

const mono = Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const pixel = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pixel',
});

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sans.variable} ${serif.variable} ${mono.variable} ${pixel.variable} font-sans motion-safe:scroll-smooth`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="debug-screens bg-pink-100 tracking-tight text-pink-900 antialiased dark:bg-blue-950 dark:text-pink-100">
        <Providers>
          <Navbar />
          <Suspense fallback={<Loading />}>
            <div className="mx-auto my-8 h-screen max-w-[95%]">{children}</div>
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
