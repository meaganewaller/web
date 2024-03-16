import Providers from "@/providers";
import { Suspense } from "react";
import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import Loading from "./loading";
import {
  DM_Sans as Sans,
  EB_Garamond as Serif,
  Victor_Mono as Mono,
  Press_Start_2P,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "@/styles/globals.css";

export interface LayoutProps {
  children: React.ReactNode;
}

export const viewport: Viewport = {
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
  width: 'device-width',
}


const title = `meagan waller | it's a blog!`;
const description = `meagan waller's personal website and blog`;
const images = `${process.env.NEXT_PUBLIC_BASE_URL}/favicon.ico`;

export const metadata: Metadata = {
  title: {
    template: "%s | meagan waller",
    default: title,
  },
  icons: [images],
  openGraph: {
    title,
    description,
    images: [images],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [images],
    creator: "@meaganewaller",
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),
  description,
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
};

const sans = Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-sans",
});

const serif = Serif({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-serif",
});

const mono = Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

const mono_italic = Mono({
  subsets: ["latin"],
  style: "italic",
  display: "swap",
  variable: "--font-mono-italic",
  weight: ["400", "700"],
});

const pixel = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-pixel",
});

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sans.variable} ${serif.variable} ${mono.variable} ${pixel.variable} ${mono_italic.variable} font-sans scroll-smooth`}
    >
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className="debug-screens antialiased">
        <Providers>
          <div id="__app">
            <Header />
            <Suspense fallback={<Loading />}>
              <main className="mx-auto my-8 h-screen max-w-[95%]">{children}</main>
            </Suspense>
          </div>
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
