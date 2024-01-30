import { Metadata } from 'next';
import Form from './_components/Form';

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
};

const Page = async (): Promise<JSX.Element> => {
  return (
    <div>
      <h1 className="font-pixel text-center text-2xl uppercase before:pr-[7px] before:content-[url('/images/ui/leftsparkle.gif')] after:pl-[5px] after:content-[url('/images/ui/rightsparkle.gif')] lg:text-3xl">
        say hi!
      </h1>
      <Form />
    </div>
  );
};

export default Page;
