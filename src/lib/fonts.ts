import {
  Bricolage_Grotesque as Display,
  Itim as Heading,
  Victor_Mono as Mono,
  Press_Start_2P as Pixel,
  Epilogue as Sans,
  Rasa as Serif,
} from 'next/font/google'
import localFont from 'next/font/local'

export const fontSans = Sans({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-sans',
})

export const fontSerif = Serif({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-serif',
})

export const fontMono = Mono({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-mono',
  adjustFontFallback: false,
})

export const fontMonoItalic = Mono({
  subsets: ['latin'],
  style: 'italic',
  display: 'swap',
  variable: '--font-mono-italic',
  weight: ['400', '700'],
})

export const fontPixel = Pixel({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-pixel',
})

export const fontDisplay = Display({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  display: 'swap',
  variable: '--font-display',
})

export const fontHeading = Heading({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-heading',
})

export const fontExtra = localFont({
  variable: '--font-extra',
  src: [
    {
      path: '../../public/fonts/basiic.ttf',
      weight: '400',
      style: 'normal',
    },

    {
      path: '../../public/fonts/basiic.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/basiic.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/basiic.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})
