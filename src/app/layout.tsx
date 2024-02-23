import Providers from '@/providers';
import { Suspense } from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Loading from './loading';
import { DM_Sans as Sans, EB_Garamond as Serif, Victor_Mono as Mono, Press_Start_2P } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

export interface LayoutProps {
  children: React.ReactNode;
}

const title = `meagan waller | it's a blog!`;
const description = `meagan waller's personal website and blog`;
const images = `${process.env.NEXT_PUBLIC_BASE_URL}/favicon.ico`;

export const metadata: Metadata = {
  title: {
    template: `%s | meagan waller`,
    default: title,
  },
  icons: [`${process.env.NEXT_PUBLIC_BASE_URL}/favicon.ico`],
  openGraph: {
    title,
    description,
    images: [images],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [images],
    creator: '@meaganewaller',
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),
  description,
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
  style: ['normal', 'italic'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-serif',
});

const mono = Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

const mono_italic = Mono({
  subsets: ['latin'],
  style: 'italic',
  variable: '--font-mono-italic',
  weight: ['400', '700'],
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
      className={`${sans.variable} ${serif.variable} ${mono.variable} ${pixel.variable} ${mono_italic.variable} font-sans motion-safe:scroll-smooth`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="debug-screens antialiased">
        <Providers>
          <Navbar />
          <Suspense fallback={<Loading />}>
            <div className="mx-auto my-8 h-screen max-w-[95%]">{children}</div>

          </Suspense>
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
