import type { Metadata } from 'next';
import RecentPosts from './_components/RecentPosts';
import Connections from './_components/Connections';
import Intro from './_components/Intro';

export const metadata: Metadata = {
  title: "meagan waller | it's a blog!",
};

export default async function Landing() {
  const response = await fetch('http://localhost:5000/api/v1/posts?recent=true', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const data = await response.json();

  return (
    <main className="grid-areas-landingMobile md:grid-areas-landing grid-cols-landing my-auto grid max-w-full grid-flow-row flex-col gap-2 p-2 text-gray-950 dark:text-gray-50">
      {data['posts'].length > 0 && <RecentPosts posts={data['posts']} />}
      <Intro />
      <Connections />
    </main>
  );
}
