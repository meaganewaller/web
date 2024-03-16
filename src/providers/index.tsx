'use client';

import tw, { GlobalStyles as TailwindStyles } from 'twin.macro';
import { css, Global as EmotionStyles } from '@emotion/react';
import { ThemeProvider } from 'next-themes';
import { Toaster as ToastProvider } from 'react-hot-toast';
import { useAnalytics } from '@/hooks'
import { Theme } from '@/types';
import React, { Suspense } from 'react'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
import {
  domAnimation,
  LazyMotion,
  MotionConfig as MotionProvider,
  m
} from "framer-motion";

import useMounted from '@/hooks/use-mounted';

const GlobalStyles = css`
  html {
    ${tw`
      antialiased \
      bg-primary-100 \
      text-neutral-900 \
      font-serif \
      transition ease-in-out duration-300
    `}

    &.dark {
      ${tw`bg-neutral-900 text-neutral-100`}

      * {
        --tw-ring-offset-color: #0c0e10;

        &::selection {
          ${tw`bg-primary-100 text-primary-600`}
        }
      }
    }
  }

  *::selection {
    ${tw`bg-primary-500 text-primary-100`}
  }

  @supports (font-variation-settings: normal) {
    html {
      ${tw`font-sans`}
    }
  }

  #nprogress .bar {
    ${tw`h-1 bg-info-500`}
  }
`;

interface Props {
  children: React.ReactNode;
}

const pageVariants = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

export const Providers: React.FC<Props> = ({ children }) => {
  const mounted = useMounted();
  useAnalytics();

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
              initial='initial'
              animate='enter'
              exit='exit'
              variants={pageVariants}
              className='transition-color flex min-h-screen flex-col bg-primary-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100'
            >
              <EmotionStyles styles={GlobalStyles} />
              <TailwindStyles />
              {children}
              <ToastProvider position='top-right' />
            </m.div>
            <Suspense fallback={null}>
              <ProgressBar height='4px' color='#9f7aea' options={{ showSpinner: false }} />
            </Suspense>
          </ThemeProvider>
        </LazyMotion>
      </MotionProvider>
    )
  )
}

export default Providers;
