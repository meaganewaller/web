'use client'

import PageLayout from '@/components/Layout'
import Container from '@/components/Container'
import BackButton from '@/components/BackButton'

export default function RoutesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-10 sm:my-12 md:my-14 lg:my-16 xl:my-18 2xl:my-20">
      <Container wide={true}>
        <PageLayout>
          <div className="flex gap-1 font-medium leading-6 text-pink-300 text-lg mx-6">
            <BackButton />
          </div>
          {children}
        </PageLayout>
      </Container>
    </div>
  )
}
