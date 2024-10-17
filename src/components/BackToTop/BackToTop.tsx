'use client'

import { m, useInView } from 'framer-motion'
import { useRef } from 'react'

import useMediaQuery from '@/hooks/use-media-query'
import { min } from '@/utils/screens'
import Link from '@/components/Link'

import { FaArrowUp } from 'react-icons/fa'
import BackToTopMobile from '@/components/BackToTopMobile'

export const BackToTop = () => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const transition = { duration: 0.3, ease: 'easeInOut' }
  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  }

  const isMinMd = useMediaQuery(min('md'))

  const scrollToTop = () => {
    try {
      window.scroll({
        top: -210,
        left: 0,
        behavior: 'smooth',
      })
    } catch {
      window.scrollTo(0, 0)
    }
  }

  return (
    <>
      {isMinMd ? (
        <m.div
          ref={ref}
          initial="initial"
          animate="animate"
          variants={variants}
          transition={transition}
          className="mx-auto max-w-3xl hidden md:block mt-8"
        >
          <p className="text-right">
            <Link
              onClick={scrollToTop}
              withAnchor={false}
              href="#"
              className="text-pink-500 text-sm flex-inline items-center group"
            >
              <span className="pr-1 dark:text-lime-500 dark:group-hover:text-lime-400 transition-all">Back to Top</span>
              <FaArrowUp
                size={10}
                className="w-4 h-4 inline dark:text-lime-200 dark:group-hover:text-lime-100 transition-all"
              />
            </Link>
          </p>
        </m.div>
      ) : (
        <BackToTopMobile />
      )}
    </>
  )
}

export default BackToTop
