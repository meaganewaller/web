import { Metadata } from 'next';
import { PostsList } from './_components/PostsList';

export const metadata: Metadata = {
  title: 'the web blog',
  description: 'all posts by meagan waller',
  openGraph: {
    title: 'the web blog',
    description: 'all posts by meagan waller',
  },
  twitter: {
    title: 'the web blog',
    site: '@meaganewaller',
    card: 'summary',
    description: 'all posts by meagan waller',
    images: [
      {
        url: '/images/og/blog.jpeg',
        height: 1200,
        width: 1200,
      },
    ],
  },
};

export default async function BlogPage() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/posts?published=true`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const data = await response.json();

  return (
    <div>
      <h1 className="font-pixel mb-2 text-6xl text-pink-700 dark:text-purple-300">the web blog</h1>
      <PostsList posts={data?.posts} />
    </div>
  );
}
