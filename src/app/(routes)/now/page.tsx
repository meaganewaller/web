import { Metadata } from 'next';
import Link from 'next/link';
import { formatDate } from '@/utils/date';

export const metadata: Metadata = {
  title: 'now',
  description: 'my personal and professional updates',
  openGraph: {
    title: 'now',
    description: 'my personal and professional updates',
  },
  twitter: {
    title: 'now',
    site: '@meaganewaller',
    card: 'summary',
    description: 'my personal and professional updates',
    images: [
      {
        url: '/images/og/now.jpeg',
        height: 1200,
        width: 1200,
      },
    ],
  },
};

const Page = async (): Promise<JSX.Element> => {
  return (
    <div>
      <h1 className="font-pixel dark:text-turquoise-300 text-center text-2xl uppercase text-pink-600 before:pr-[7px] before:content-[url('/images/ui/leftsparkle.gif')] after:pl-[5px] after:content-[url('/images/ui/rightsparkle.gif')] lg:text-3xl">
        Now
      </h1>
      <blockquote className="text-md text-italic px-5 py-4 text-justify font-semibold md:px-20">
        <p>
          The stuff I&apos;m currently focused on / recent happenings / other life updates I wanna share. Inspired by
          Derek Sivers&apos;{' '}
          <Link
            href="https://nownownow.com"
            target="_blank"
            className="border-1 rounded-md border-solid border-purple-100 bg-purple-50 p-0.5 hover:bg-purple-200/60 dark:border-orange-500 dark:bg-orange-600 dark:text-yellow-50 dark:hover:bg-orange-600/60"
          >
            now page
          </Link>
          .
        </p>
      </blockquote>
      <span className="block px-5 text-right text-sm text-pink-700 md:px-20 dark:text-pink-100">
        <strong>Last updated</strong>: {formatDate('2024-01-29T00:00:00')}
      </span>
      <h2 className="font-pixel mt-5 text-xl uppercase">quickly</h2>
      <ul className="list-flower list-inside py-4 text-justify text-lg">
        <li className="mb-3">
          Senior Development Consultant at{' '}
          <Link
            href="https://www.testdouble.com"
            target="_blank"
            className="border-1 rounded-md border-solid border-purple-100 bg-purple-50 p-0.5 hover:bg-purple-200/60 dark:border-orange-500 dark:bg-orange-600 dark:text-yellow-50 dark:hover:bg-orange-600/60"
          >
            Test Double
          </Link>
        </li>
        <li className="mb-3">
          <strong>Current hyperfixations</strong>: pilates, taylor swift, and customizing my{' '}
          <Link
            href="https://www.notion.so"
            target="_blank"
            className="border-1 rounded-md border-solid border-purple-100 bg-purple-50 p-0.5 hover:bg-purple-200/60 dark:border-orange-500 dark:bg-orange-600 dark:text-yellow-50 dark:hover:bg-orange-600/60"
          >
            notion
          </Link>{' '}
          workspace
        </li>
        <li className="mb-3">Planning my wedding</li>
      </ul>
      <hr className="mx-auto my-6 w-2/3 border-dashed border-t-purple-300 dark:border-t-orange-300" />
    </div>
  );
};

export default Page;
