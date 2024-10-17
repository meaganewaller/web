import { Metadata } from 'next'
import Form from './_components/Form'
import PageTitle from '@/components/PageTitle'

export const metadata: Metadata = {
  title: 'say hi',
  description: 'chat with me',
  openGraph: {
    title: 'say hi to meagan',
    description: 'chat with meagan waller',
  },
  twitter: {
    site: '@meaganewaller',
    card: 'summary',
    description: 'chat with meagan waller',
    images: [
      {
        url: '/images/og/chat.jpeg',
        height: 1200,
        width: 1200,
      },
    ],
  },
}

const Page = async (): Promise<JSX.Element> => {
  return (
    <div>
      <PageTitle title="Say Hi" />
      <Form />
    </div>
  )
}

export default Page
