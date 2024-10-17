'use client'

import tw, { GlobalStyles as TailwindStyles } from 'twin.macro'
import { Global as EmotionStyles, css } from '@emotion/react'
import { ThemeProvider } from 'next-themes'
import { Toaster as ToastProvider } from 'react-hot-toast'
import { useAnalytics } from '@/hooks'
import { Theme } from '@/types'
import React, { Suspense } from 'react'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
import { LazyMotion, MotionConfig as MotionProvider, domAnimation, m } from 'framer-motion'

import useMounted from '@/hooks/use-mounted'

const GlobalStyles = css`
  html {
    ${tw`
      antialiased \
      bg-pink-100 \
      text-blue-900 \
      font-serif \
      transition ease-in-out duration-300
    `}

    &.dark {
      ${tw`bg-purple-1100 text-purple-100`}

      * {
        --tw-ring-offset-color: #0c0e10;

        &::selection {
          ${tw`bg-green-300 text-green-900`}
        }
      }
    }
  }

  *::selection {
    ${tw`bg-purple-400 text-purple-900`}
  }

  @supports (font-variation-settings: normal) {
    html {
      ${tw`font-sans`}
    }
  }

  #nprogress .bar {
    ${tw`h-1 bg-teal-500`}
  }
`

interface Props {
  children: React.ReactNode
}

const pageVariants = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
}

export const Providers: React.FC<Props> = ({ children }) => {
  const mounted = useMounted()
  useAnalytics()

  return (
    mounted && (
      <MotionProvider reducedMotion="user">
        <LazyMotion strict features={domAnimation}>
          <ThemeProvider
            attribute="class"
            defaultTheme={Theme.SYSTEM}
            themes={Object.values(Theme)}
            enableSystem
            disableTransitionOnChange
          >
            <m.div
              initial="initial"
              animate="enter"
              exit="exit"
              variants={pageVariants}
              className="transition-color flex flex-col"
            >
              <EmotionStyles styles={GlobalStyles} />
              <TailwindStyles />
              {children}
              <ToastProvider position="top-center" />
            </m.div>
            <Suspense fallback={null}>
              <ProgressBar height="4px" color="#00ced1" options={{ showSpinner: false }} />
            </Suspense>
          </ThemeProvider>
        </LazyMotion>
      </MotionProvider>
    )
  )
}

export default Providers
