'use client'

import { useEffect, useState } from 'react'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import Content from './Content'
import Header from './Header'
import AuthorFooter from './AuthorFooter'
import { PageFooter } from '@/components/Layout/PageFooter'
import type { PostResponse } from '@/types'
import Comments from '@/components/Comments'
import readingTime from 'reading-time'
import { dateFormatLong } from '@/utils/date'
import Image from 'next/image'
import { PiLinkBold, PiLinkedinLogoFill, PiPinterestLogoFill, PiSlackLogoFill, PiTwitterLogoFill } from 'react-icons/pi'
import cn from '@/utils/cn'

const dateDifferenceInDays = (date1: Date, date2: Date) => {
  const diffInMs = Math.abs(date2.getTime() - date1.getTime())
  return Math.ceil(diffInMs / (1000 * 60 * 60 * 24))
}

export interface ArticleProps {
  source: MDXRemoteSerializeResult
  data: PostResponse
  content: string
}

export const Article = ({ source, data, content }: ArticleProps) => {
  const [isOutdated, setIsOutdated] = useState(false)
  const readingTimeOfArticle = readingTime(content)

  const publishedDate = dateFormatLong(data.published_date)
  const outdatedThresholdInDays = 365 // For example, 1 year

  useEffect(() => {
    if (data.published_date) {
      const daysSincePublication = dateDifferenceInDays(new Date(), new Date(data.published_date))
      setIsOutdated(daysSincePublication > outdatedThresholdInDays)
    }
  }, [data.published_date])

  // const something = () => {
  //   <div className="flex flex-col w-full leading-7 align-top list-outside">
  //     <div className="flex flex-row justify-between mx-auto p-0 mt-8 mb-0">
  //       <div className="lg:sticky flex-shrink-0 self-start px-0 pt-0 mx-0 mt-24 mb-0 basis-[55px] top-[200px] pb-[800px] z-30">
  //         <div className="flex justify-center items-center p-0 m-2 w-10 h-10 bg-purple-100 border-2 border-solid border-blue-500-200 rounded-full dark:bg-orange-900 dark:border-orange-900">
  //           <PiLinkBold className="text-purple-900 hover:text-blue-800 hover:cursor-pointer dark:text-orange-100 dark:hover:text-orange-200" size={24} />
  //         </div>
  //         <div className="flex justify-center items-center p-0 m-2 w-10 h-10 bg-purple-100 border-2 border-solid border-blue-500 rounded-full dark:bg-orange-900 dark:border-orange-900">
  //           <PiTwitterLogoFill className="text-blue-900 hover:text-blue-800 hover:cursor-pointer dark:text-orange-100 dark:hover:text-orange-200" size={24} />
  //         </div>
  //         <div className="flex justify-center items-center p-0 m-2 w-10 h-10 bg-blue-200 border-2 border-solid border-blue-500 rounded-full dark:bg-orange-900 dark:border-orange-900">
  //           <PiLinkedinLogoFill className="text-blue-900 hover:text-blue-800 hover:cursor-pointer dark:text-orange-100 dark:hover:text-orange-200" size={24} />
  //         </div>
  //         <div className="flex justify-center items-center p-0 m-2 w-10 h-10 bg-blue-200 border-2 border-solid border-blue-500 rounded-full dark:bg-orange-900 dark:border-orange-900">
  //           <PiSlackLogoFill className="text-blue-900 hover:text-blue-800 hover:cursor-pointer dark:text-orange-100 dark:hover:text-orange-200" size={24} />
  //         </div>
  //         <div className="flex justify-center items-center p-0 m-2 w-10 h-10 bg-blue-200 border-2 border-solid border-blue-500 rounded-full dark:bg-orange-900 dark:border-orange-900">
  //           <PiPinterestLogoFill className="text-blue-900 hover:text-blue-800 hover:cursor-pointer dark:text-orange-100 dark:hover:text-orange-200" size={24} />
  //         </div>
  //       </div>
  //       <div className="max-w-4xl p-8 box-content lg:max-w-5xl">
  //         <div className="flex flex-col items-stretch p-0 m-0">
  //           {content && <Content mdxSource={source} />}
  //         </div>
  //       </div>
  //       <div className="flex-shrink-0 p-0 basis-[280px]">
  //         <div className="sticky z-10 pt-0 pr-0 pl-5 mx-0 mt-24 mb-0">
  //         </div>
  //       </div>
  //     </div>
  //     <PageFooter>
  //       <>
  //         <AuthorFooter />
  //         <Comments />
  //       </>
  //     </PageFooter>
  //     }

  return (
    <>
      <Header
        type="Post"
        title={data.title}
        date={publishedDate}
        readingTime={readingTimeOfArticle}
        slug={data.slug}
        description={data.description}
      />
      {data.image && (
        <div className={cn('my-4', 'md:my-8')} id="thumbnail">
          <Image
            src={data.image}
            alt={data.title}
            layout="responsive"
            width={1200}
            height={630}
            className={cn('rounded-xl object-cover')}
          />
        </div>
      )}
      <div className="flex">
        <aside className="hidden sm:flex h-screen sm:sticky top-52">
          <ul className="pr-2 md:pr-6 lg:pr-8 xl:pr-12 space-y-2">
            <li className="flex justify-center items-center p-0 m-2 w-10 h-10 bg-blue-200 border-2 border-solid border-blue-500 rounded-full dark:bg-orange-900 dark:border-orange-600 group">
              <PiLinkBold
                className="text-blue-900 group-hover:text-blue-800 group-hover:cursor-pointer dark:text-orange-200 dark:group-hover:text-orange-400"
                size={24}
              />
            </li>
            <li className="flex justify-center items-center p-0 m-2 w-10 h-10 bg-blue-200 border-2 border-solid border-blue-500 rounded-full dark:bg-orange-900 dark:border-orange-600 group">
              <PiTwitterLogoFill
                className="text-blue-900 group-hover:text-blue-800 group-hover:cursor-pointer dark:text-orange-200 dark:group-hover:text-orange-400"
                size={24}
              />
            </li>
            <li className="flex justify-center items-center p-0 m-2 w-10 h-10 bg-blue-200 border-2 border-solid border-blue-500 rounded-full dark:bg-orange-900 dark:border-orange-600 group">
              <PiLinkedinLogoFill
                className="text-blue-900 group-hover:text-blue-800 group-hover:cursor-pointer dark:text-orange-200 dark:group-hover:text-orange-400"
                size={24}
              />
            </li>
            <li className="flex justify-center items-center p-0 m-2 w-10 h-10 bg-blue-200 border-2 border-solid border-blue-500 rounded-full dark:bg-orange-900 dark:border-orange-600 group">
              <PiSlackLogoFill
                className="text-blue-900 group-hover:text-blue-800 group-hover:cursor-pointer dark:text-orange-200 dark:group-hover:text-orange-400"
                size={24}
              />
            </li>
            <li className="flex justify-center items-center p-0 m-2 w-10 h-10 bg-blue-200 border-2 border-solid border-blue-500 rounded-full dark:bg-orange-900 dark:border-orange-600 group">
              <PiPinterestLogoFill
                className="text-blue-900 group-hover:text-blue-800 group-hover:cursor-pointer dark:text-orange-200 dark:group-hover:text-orange-400"
                size={24}
              />
            </li>
          </ul>
        </aside>

        <main className="w-full">
          <div className="p-2 md:p-4">{content && <Content mdxSource={source} />}</div>
        </main>
      </div>
      <PageFooter>
        <>
          <AuthorFooter />
          <Comments />
        </>
      </PageFooter>
    </>
  )
}

export default Article
