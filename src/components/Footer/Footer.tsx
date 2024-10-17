'use client'

import Image from 'next/image'
import site from '@/config'
import NextLink from 'next/link'
import Link from '@/components/Link'
import Input from '@/components/Input'
import BackToTop from '@/components/BackToTop'
import Button from '@/components/Button'
import useTheme from '@/hooks/use-theme'

export default function Footer() {
  const { theme } = useTheme()

  const isDark = theme === 'dark'

  return (
    <footer className="py-12 bg-pink-200 sm:pt-16 xl:pt-20 dark:bg-green-1000 border-t border-pink-400 dark:border-green-800">
      <div className="px-4 mx-auto sm:px-6 xl:px-8 max-w-7xl">
        <div className="flex flex-wrap items-start md:justify-between gap-y-12 gap-x-24 md:gap-x-12">
          <div className="w-full">
            <NextLink href="/" className="flex">
              <Image
                src={isDark ? '/images/dark-logo-sm.svg' : '/images/logo-sm.svg'}
                className="w-auto h-12 mx-auto md:mx-0"
                alt="Meagan Waller Logo"
                width={200}
                height={200}
              />
            </NextLink>
            <p className="mt-8 text-base font-normal text-pink-800 dark:text-green-100 text-center md:text-left">
              Meagan Waller is a software developer from Jacksonville, FL
            </p>
          </div>

          <div className="w-full flex flex-col md:flex-row">
            <div className="flex justify-start md:pr-10 w-full md:w-1/2">
              <div>
                <p className="text-xs font-semibold tracking-widest text-pink-700 dark:text-green-200 uppercase font-sans">
                  Site
                </p>
                <ul className="mt-8 space-y-5">
                  <li>
                    <Link
                      href="/meagan"
                      className="inline-flex text-base font-medium text-pink-900 transition-all duration-200 hover:translate-x-1 hover:text-pink-600"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/colophon"
                      className="inline-flex text-base font-medium text-pink-900 transition-all duration-200 hover:translate-x-1 hover:text-pink-600"
                    >
                      Colophon
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/source"
                      className="inline-flex text-base font-medium text-pink-900 transition-all duration-200 hover:translate-x-1 hover:text-pink-600"
                    >
                      Source Code
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/report"
                      className="inline-flex text-base font-medium text-pink-900 transition-all duration-200 hover:translate-x-1 hover:text-pink-600"
                    >
                      Report an Issue
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="inline-flex text-base font-medium text-pink-900 transition-all duration-200 hover:translate-x-1 hover:text-pink-600"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="px-16 md:px-0 flex flex-col w-full md:w-1/2 mt-12 md:mt-0">
              <label
                htmlFor="email"
                className="text-xs font-semibold tracking-widest text-pink-700 dark:text-green-200 font-sans uppercase"
              >
                Newsletter
              </label>
              <form action="#" method="POST" className="mt-8 space-y-5">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <Input type="email" name="email" id="email" placeholder="Enter your email address" />
                  <div className="mt-2">
                    <Button variant="accent" className="w-full rounded-xl" type="submit">
                      Subscribe Now
                    </Button>
                  </div>
                </div>
              </form>

              <p className="mt-5 text-xs font-normal text-center text-pink-900 dark:text-lime-500 italic font-display tracking-wide">
                Your email will not be shared with any third parties.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-12 mt-12 text-center border-t border-pink-400 sm:mt-16 xl:mt-20 dark:border-green-900">
          <p className="text-sm font-normal text-pink-900 dark:text-green-50">
            © Copyright {new Date().getFullYear()}, All Rights Reserved by{' '}
            <Link href={site.author.url}>{site.author.name}</Link>
          </p>
          <BackToTop />
        </div>
      </div>
    </footer>
  )
}
