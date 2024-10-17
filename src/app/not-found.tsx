'use client'

import { useRouter } from 'next/navigation'
import createMetadata from '@/utils/metadata'
import type { Metadata } from 'next'

import PageLayout from '@/components/Layout'
import Container from '@/components/Container'
import Button from '@/components/Button'
import BackButton from '@/components/BackButton'

export const metadata: Metadata = createMetadata({
  date: String(new Date()),
  title: '404',
  description: 'Page Not Found',
  tags: ['404', 'not found', 'error'],
})

export default function NotFound() {
  const router = useRouter()
  return (
    <div className="my-10 sm:my-12 md:my-14 lg:my-16 xl:my-18 2xl:my-20">
      <Container wide={true}>
        <PageLayout>
          <div className="flex gap-1 font-medium leading-6 text-pink-300 text-lg mx-6">
            <BackButton />
          </div>

          <div>
            <div className="mx-auto my-10 flex w-full flex-nowrap justify-center flex-col">
              <h1 className="font-pixel text-center text-2xl uppercase text-pink-600 before:pr-[7px] before:content-[url('/images/ui/leftsparkle.gif')] after:pl-[5px] after:content-[url('/images/ui/rightsparkle.gif')] lg:text-3xl">
                404 - Page Not Found
              </h1>

              <p className="text-center text-lg mt-4">The page you are looking for does not exist.</p>
            </div>
          </div>
        </PageLayout>
      </Container>
    </div>
  )
}
