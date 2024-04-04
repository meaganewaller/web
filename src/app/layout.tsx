import '@/styles/globals.css'
import { fontSans, fontSerif, fontMono, fontMonoItalic, fontPixel, fontDisplay, fontExtra } from '@/lib/fonts'
import type { Metadata, Viewport } from 'next'

import Analytics from '@/components/Analytics'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import NowPlaying from '@/components/NowPlaying'
import Providers from '@/providers'
import createMetadata from '@/utils/metadata'
import cn from '@/utils/cn'

export const metadata: Metadata = {
  title: {
    default: 'meagan waller',
    template: `%s - meagan waller`
  },
  description: `meagan waller's personal website and blog`,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' }
  ],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
  width: 'device-width',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        fontSans.variable,
        fontSerif.variable,
        fontMono.variable,
        fontPixel.variable,
        fontMonoItalic.variable,
        fontDisplay.variable,
        fontExtra.variable,
        'scroll-smooth',
      )}
    >
      <head />
      <body className={cn('min-h-screen bg-rose_pink-900 font-sans antialiased scroll-smooth')}>
        <Providers>
          <div id="__app">
            <Header />
            <main className='flex-1'>{children}</main>
            <Footer />
            <NowPlaying />
          </div>
          <Analytics />
        </Providers>
      </body>
    </html>
  )

}

export default RootLayout
// export default function RootLayout({ children }: LayoutProps) {
//   return (
//     <html lang="en" suppressHydrationWarning className={`${sans.variable} ${serif.variable} ${mono.variable} ${pixel.variable} ${mono_italic.variable} ${display.variable} font-sans scroll-smooth`}>
//       <head>
//         <meta charSet="utf-8" />
//       </head>
//       <body className="debug-screens">
//         <Providers>
//           <div id="__app">
//             <Header />
//             <Suspense fallback={<Loading />}>
//               <main className="mx-auto mt-3 overscroll-none max-w-[98%] lg:max-w-[96%] xl:max-w-[94%] 2xl:max-w-[92%]">{children}</main>
//             </Suspense>
//           </div>
//           <Analytics />
//           <SpeedInsights />
//         </Providers>
//       </body>
//     </html>
//   );
// }
