import { RecordPageProps } from '@/types';
import { toHTML } from '@/utils/markdown';
import Highlight from '@/app/(routes)/[type]/[slug]/_components/highlight';
import Tags from '@/app/(routes)/[type]/[slug]/_components/tags';
import { TbArrowBigLeft, TbArrowBigDown, TbArrowBigUp } from "react-icons/tb";
import Link from 'next/link';
import { formatDate } from '@/utils/date';
import pluralize from '@/utils/pluralize';
import Image from 'next/image';

interface PageProps {
  params: RecordPageProps;
}

export async function generateMetadata({ params: { slug, type } }: PageProps) {
  if (type == "blog") {
    type = "posts"
  }
  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/${type}/${slug}`).then((res) => res.json());

  return {
    title: data.title,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/${type}/${slug}`,
    },
    openGraph: {
      title: `${data.title} | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
      publishedTime: data.published_date,
      modifiedTime: data.last_updated,
      description: data.metaDescription,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${type}/${slug}`,
      siteName: process.env.NEXT_PUBLIC_SITE_NAME,
      images: [
        {
          url: data.coverImage,
          alt: data.alt,
          width: 1300,
          height: 630,
        },
      ],
      locale: 'en',
      type: 'article',
    },

    authors: [{ name: 'Meagan Waller', url: 'https://meaganwaller.com' }],
  };
}

export default async function SlugPage({ params: { type, slug } }: PageProps) {
  if (type == "blog") {
    type = "posts"
  }

  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/${type}/${slug}`).then((res) => res.json());
  const content = await toHTML(data.content);

  return (
    <article className="h-entry">
      <div className="mb-6 px-2">
        <div className="mx-auto mb-2 max-w-5xl">
          <p className="flex flex-row items-center sm:justify-center">
            <Link href="/blog" className="text-md flex items-center text-orange-700">
              <TbArrowBigLeft size="14" className="inline size-4" />
              <span className="pl-1">Blog</span>
            </Link>
            <Link href={`${String(process.env.NEXT_PUBLIC_BASE_URL)}/${type}/${slug}`} className="u-url">
              <time className="dt-published ml-2 text-sm font-semibold text-purple-800"
                dateTime={data.published_date}
              >
                {formatDate(data.published_date)}
              </time>
            </Link>
            {data?.comments?.length > 0 && (
              <Link href="#comments" className="ml-2 flex items-center text-sm font-semibold text-pink-400">
                <span>
                  {data.comments.length} {pluralize('comment', data.comments.length)}
                </span>
                <TbArrowBigDown size="4" className="inline size-3 pl-1" />
              </Link>
            )}
          </p>
          <h1 className="p-name font-sans text-3xl font-bold leading-tight text-pink-500 sm:text-center md:text-5xl">
            {data.title}
          </h1>
          {data.description && data.description.length > 0 && <div className="p-summary hidden">{data.description}</div>}

          {data.cover_image && (
            <Image className="u-photo hidden" alt={`${data.title} poster`} loading="lazy" src={data.cover_image} width={1300} height={630} />
          )}
        </div>
        {data.tags && data.tags.length > 0 && (
          <div className="mx-auto max-w-4xl text-blue-600 sm:text-center">
            <Tags tags={data.tags} />
          </div>
        )}
      </div>
      <Highlight htmlContent={content} />
      <div>
        <div className="mt-12 pb-8 md:pt-4">
          <div className="relative h-16 rotate-180 overflow-hidden md:mt-[40px] md:h-24 lg:h-32 xl:h-48">
            <div className="absolute bottom-0 h-8 w-full bg-pink-600 sm:hidden md:h-2" />
          </div>
        </div>
        <div className="mx-auto my-8 max-w-3xl">
          <div className="card h-card vcard p-author author mx-auto flex max-w-4xl flex-row gap-8 bg-pink-50">
            <Image className="size-[100px] rounded-lg" alt="Avatar for Meagan Waller" loading="lazy" src="/images/logo.svg" width={100} height={100} />
            <Image className="u-photo hidden" alt="Avatar for Meagan Waller" loading="lazy" src="/images/logo.svg" width={100} height={100} />
          </div>
          <div>
            <div className="mb-2">
              <p className="font-semibold">Hi there! 👋</p>
              <p>
                I am{' '}
                <Link className="p-name fn u-url" href={String(process.env.NEXT_PUBLIC_BASE_URL)} rel="author">
                  Meagan
                </Link>
                ,{' '}
                <span className="p-note">
                  a senior software developer in Jacksonville, FL. I miss when the web felt smaller.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 hidden max-w-3xl md:block">
          <p className="text-right">
            <Link href="#" className="flex-inline items-center text-sm text-pink-300">
              <span className="pr-1">Back to Top</span>
              <TbArrowBigUp size="8" className="inline size-4" />
            </Link>
          </p>
        </div>
      </div>

    </article>
  );
}
