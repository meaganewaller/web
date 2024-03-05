import { RecordPageProps } from '@/types';
import { Markdown } from "@/components/Markdown";
import { getPost } from '@/utils/blogs';

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

  const { data, content } = await getPost(slug);

  return (
    <>
    <div className="m-0 px-8 pb-24 pt-32 text-center leading-7 text-pink-600 dark:text-purple-200">
      <div className="mx-0 mb-4 mt-0 text-center font-sans text-base font-medium leading-7 text-pink-400 dark:text-purple-400">
          {data.category.title}
        </div>
        <h1 className="m-0 break-words text-center font-sans text-4xl font-semibold leading-10 text-pink-500 dark:text-purple-300">{data.title}</h1>
        <h2 className="mx-0 mb-0 mt-4 break-words text-center font-sans text-2xl font-normal leading-9 text-pink-700 dark:text-purple-50">
          {data.description}
        </h2>
      </div>
      <main className="z-2 relative mx-auto my-0 w-full max-w-2xl px-8 leading-7 text-neutral-800 dark:text-neutral-50">
        <article className="m-0 pb-8 leading-7">
          {content && (
            <Markdown
            >
              {content}
            </Markdown>
          )
          }
        </article>
      </main>
    </>
  );
}
