import { Metadata } from 'next'
import { Bio, Buttons, QuickInfo } from './_components/index'
import PageTitle from '@/components/PageTitle'

export const metadata: Metadata = {
  title: 'about',
  description: 'about page',
}

const Page = async (): Promise<JSX.Element> => {
  return (
    <div className="max-w-[80%] mx-auto mt-[5rem] py-10">
      <PageTitle title="About" />
      <QuickInfo />
      <Bio />
      <Buttons />
    </div>
  )
}

export default Page
