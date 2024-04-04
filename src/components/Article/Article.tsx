"use client";

import { useEffect, useState } from "react";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import Content from "./Content";
import Header from "./Header";
import AuthorFooter from "./AuthorFooter";
import { PageFooter } from "@/components/Layout/PageFooter";
import type { PostResponse } from "@/types";
import Comments from "@/components/Comments";
import readingTime from "reading-time";
import { formatDistance, dateFormatLong, dateFormatMicroformat } from "@/utils/date";
import Note from "@/components/Note";
import Link from "@/components/Link";
import Image from "next/image";
import { PiLinkSimpleBold, PiTwitterLogoFill, PiFacebookLogoFill, PiLinkedinLogoFill, PiSlackLogoFill, PiPinterestLogoFill, PiLinkBold } from "react-icons/pi";
import cn from "@/utils/cn";
import Container from "@/components/Container";

const dateDifferenceInDays = (date1: Date, date2: Date) => {
  const diffInMs = Math.abs(date2.getTime() - date1.getTime());
  return Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
};

export interface ArticleProps {
  source: MDXRemoteSerializeResult;
  data: PostResponse;
  content: string;
}

export const Article = ({ source, data, content }: ArticleProps) => {
  const [isOutdated, setIsOutdated] = useState(false);
  const readingTimeOfArticle = readingTime(content);

  const publishedDate = dateFormatLong(data.published_date)
  const outdatedThresholdInDays = 365; // For example, 1 year

  useEffect(() => {
    if (data.published_date) {
      const daysSincePublication = dateDifferenceInDays(
        new Date(),
        new Date(data.published_date),
      );
      setIsOutdated(daysSincePublication > outdatedThresholdInDays);
    }
  }, [data.published_date]);

  const something = () => {
    <div className="flex flex-col w-full leading-7 align-top list-outside">
      <div className="flex flex-row justify-between mx-auto p-0 mt-8 mb-0">
        <div className="sticky flex-shrink-0 self-start px-0 pt-0 mx-0 mt-24 mb-0 basis-[55px] top-[200px] pb-[800px] z-30">
          <div className="flex justify-center items-center p-0 m-2 w-10 h-10 bg-purple-100 border-2 border-solid border-blue-500-200 rounded-full dark:bg-orange-900 dark:border-orange-900">
            <PiLinkBold className="text-purple-900 hover:text-blue-800 hover:cursor-pointer dark:text-orange-100 dark:hover:text-orange-200" size={24} />
          </div>
          <div className="flex justify-center items-center p-0 m-2 w-10 h-10 bg-purple-100 border-2 border-solid border-blue-500 rounded-full dark:bg-orange-900 dark:border-orange-900">
            <PiTwitterLogoFill className="text-blue-900 hover:text-blue-800 hover:cursor-pointer dark:text-orange-100 dark:hover:text-orange-200" size={24} />
          </div>
          <div className="flex justify-center items-center p-0 m-2 w-10 h-10 bg-blue-200 border-2 border-solid border-blue-500 rounded-full dark:bg-orange-900 dark:border-orange-900">
            <PiLinkedinLogoFill className="text-blue-900 hover:text-blue-800 hover:cursor-pointer dark:text-orange-100 dark:hover:text-orange-200" size={24} />
          </div>
          <div className="flex justify-center items-center p-0 m-2 w-10 h-10 bg-blue-200 border-2 border-solid border-blue-500 rounded-full dark:bg-orange-900 dark:border-orange-900">
            <PiSlackLogoFill className="text-blue-900 hover:text-blue-800 hover:cursor-pointer dark:text-orange-100 dark:hover:text-orange-200" size={24} />
          </div>
          <div className="flex justify-center items-center p-0 m-2 w-10 h-10 bg-blue-200 border-2 border-solid border-blue-500 rounded-full dark:bg-orange-900 dark:border-orange-900">
            <PiPinterestLogoFill className="text-blue-900 hover:text-blue-800 hover:cursor-pointer dark:text-orange-100 dark:hover:text-orange-200" size={24} />
          </div>
        </div>
        <div className="max-w-4xl p-8 box-content lg:max-w-5xl">
          <div className="flex flex-col items-stretch p-0 m-0">
            {content && <Content mdxSource={source} />}
          </div>
        </div>
        <div className="flex-shrink-0 p-0 basis-[280px]">
          <div className="sticky z-10 pt-0 pr-0 pl-5 mx-0 mt-24 mb-0">
          </div>
        </div>
      </div>
      <PageFooter>
        <>
          <AuthorFooter />
          <Comments />
        </>
      </PageFooter>



      {/* <div className="inline-block float-left relative py-0 pr-12 lg:pr-14 xl:pr-16 2xl:pr-20 w-full  leading-7 align-top border-0 lg:w-2/3 xl:w-3/4 2xl:w-3/4 outline-[0px] bg-[0px] list-outside min-h-[1px] lg:pr-10 md:pr-0"> */}
      {/*   <article className="block relative py-12 px-16 leading-7 align-baseline border-0 md:px-0 md:pt-0 md:pb-10 lg:px-0 lg:pt-0 lg:pb-8"> */}
      {/*     <div className="inline-block relative p-0 m-0 w-full  leading-7 align-top border-0"> */}
      {/*       <Header article={data} readingTime={readingTimeOfArticle} /> */}
      {/* {isOutdated && data.category.title === "Tutorials & Guides" && ( */}
      {/*   <Note type="info" title="Before Reading:"> */}
      {/*     This article was published more than {outdatedThresholdInDays} days */}
      {/*     ago. Please verify the information as it may be outdated. */}
      {/*   </Note> */}
      {/* )} */}
      {/* {data.image && (<img src={data.image} alt={data.title} className="w-full h-full object-cover" />)} */}
      {/* <div className="mt-20"> */}
      {/*
            {/* </div> */}
      {/* <PageFooter> */}
      {/*   <> */}
      {/*     <AuthorFooter /> */}
      {/*     <Comments /> */}
      {/*   </> */}
      {/* </PageFooter> */}
      {/*   </div> */}
      {/* </article> */}
      {/* </div> */}
      {/* <div className="inline-block float-left relative py-0 px-6 mx-0 mt-0 mb-12 w-full leading-7 align-top border-0 lg:w-1/3 xl:w-1/4 2xl:w-1/4 outline-[0px] bg-[0px] list-outside min-h-[1px] border-l border-dashed border-rose_pink-500/70 h-full"> */}
      {/*   <aside className="inline-block relative mt-10 mb-16 w-full  leading-7 align-top"> */}
      {/*     <div */}
      {/*       className="table clear-both p-0 mx-0 mt-0 mb-8  leading-7 align-baseline border-0 table-fixed" */}
      {/*     > */}
      {/*       <form */}
      {/*         role="search" */}
      {/*         method="get" */}
      {/*         action="#" */}
      {/*         className="p-0 m-0  leading-7 align-baseline border-0"> */}
      {/*         <label */}
      {/*           className="block overflow-hidden absolute p-0 -m-px w-px h-px leading-none align-baseline border-0 cursor-default focus:block focus:h-auto focus:w-auto focus:rounded-sm focus:bg-heliotrope-900 focus:px-6 focus:pt-4 focus:pb-3 focus:text-sm focus:font-bold focus:text-heliotrope-700" */}
      {/*           html-for="search" */}
      {/*         > */}
      {/*           Search for: */}
      {/*         </label> */}
      {/*         <div className="inline-block clear-both relative p-0 m-0 w-full  leading-7  align-top border-0 table-fixed outline-[0px] bg-[0px] content-[''] list-outside before:content-[''] before:table before:table-fixed before:outline-[0px] before:bg-[0px]"> */}
      {/*           <input */}
      {/*             id="search" */}
      {/*             className="inline-block relative py-px pr-12 pl-1 m-0 w-full text-lg leading-6 align-top bg-transparent rounded-none border-t-0 appearance-none cursor-pointer border-x-0 focus:bg-transparent outline-[0px] transition-[color_0.2s_ease-out_background-color_0.2s_ease-out_border-color_0.2s_ease-out_box-shadow] list-outside" */}
      {/*             type="search" */}
      {/*             value="" */}
      {/*             placeholder="Search..." */}
      {/*             name="s" */}
      {/*           /> */}
      {/*           <button */}
      {/*             className="absolute top-0 right-0 justify-center items-center p-0 mx-0 mt-0 mb-2 w-6 h-full font-sans text-base font-bold leading-8 text-center  uppercase align-middle bg-transparent rounded-none border-0 border-solid cursor-pointer hover:transform-none" */}
      {/*             type="submit" */}
      {/*           ><HiSearch size={20} className="stroke-pink-500" /></button> */}
      {/*         </div> */}
      {/*       </form> */}
      {/*     </div> */}
      {/*   </aside> */}
      {/* </div> */}
    </div>
  }


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
      <div className={cn('my-4', 'md:my-8')} id="thumbnail">
        <Image src={data.image} alt={data.title} layout="responsive" width={1200} height={630} className={cn('rounded-xl object-cover')} />
      </div>
      <div className="flex flex-row justify-between mx-auto p-0 mt-8 mb-0">
        <div className="sticky flex-shrink-0 self-start px-0 pt-0 mx-0 mt-24 mb-0 basis-[55px] top-[200px] pb-[800px] z-30">
          <div className="flex justify-center items-center p-0 m-2 w-10 h-10 bg-blue-200 border-2 border-solid border-blue-500 rounded-full dark:bg-orange-900 dark:border-orange-600">
            <PiLinkBold className="text-blue-900 hover:text-blue-800 hover:cursor-pointer dark:text-orange-200 dark:hover:text-orange-400" size={24} />
          </div>
          <div className="flex justify-center items-center p-0 m-2 w-10 h-10 bg-blue-200 border-2 border-solid border-blue-500 rounded-full dark:bg-orange-900 dark:border-orange-600">
            <PiTwitterLogoFill className="text-blue-900 hover:text-blue-800 hover:cursor-pointer dark:text-orange-200 dark:hover:text-orange-400" size={24} />
          </div>
          <div className="flex justify-center items-center p-0 m-2 w-10 h-10 bg-blue-200 border-2 border-solid border-blue-500 rounded-full dark:bg-orange-900 dark:border-orange-600">
            <PiLinkedinLogoFill className="text-blue-900 hover:text-blue-800 hover:cursor-pointer dark:text-orange-200 dark:hover:text-orange-400" size={24} />
          </div>
          <div className="flex justify-center items-center p-0 m-2 w-10 h-10 bg-blue-200 border-2 border-solid border-blue-500 rounded-full dark:bg-orange-900 dark:border-orange-600">
            <PiSlackLogoFill className="text-blue-900 hover:text-blue-800 hover:cursor-pointer dark:text-orange-200 dark:hover:text-orange-400" size={24} />
          </div>
          <div className="flex justify-center items-center p-0 m-2 w-10 h-10 bg-blue-200 border-2 border-solid border-blue-500 rounded-full dark:bg-orange-900 dark:border-orange-600">
            <PiPinterestLogoFill className="text-blue-900 hover:text-blue-800 hover:cursor-pointer dark:text-orange-200 dark:hover:text-orange-400" size={24} />
          </div>
        </div>
        <div className="max-w-4xl p-8 box-content lg:max-w-5xl">
          <div className="flex flex-col items-stretch p-0 m-0">
            {content && <Content mdxSource={source} />}
          </div>
        </div>
        <div className="flex-shrink-0 p-0 basis-[280px]">
          <div className="sticky z-10 pt-0 pr-0 pl-5 mx-0 mt-24 mb-0">
          </div>
        </div>
      </div>
      <PageFooter>
        <>
          <AuthorFooter />
          <Comments />
        </>
      </PageFooter>


    </>
  );
};

export default Article;
