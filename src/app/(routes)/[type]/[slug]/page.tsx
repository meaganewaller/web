import { Record, RecordPageProps } from '@/types';
import { toHTML } from '@/utils/markdown';
import Link from 'next/link';

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
    <div>
      <h1>{data.title}</h1>
      <p>{data.published_date}</p>
      <p>{data.description}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
