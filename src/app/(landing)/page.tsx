import type { Metadata } from "next";
import RecentPosts from "./_components/RecentPosts";
import Connections from "./_components/Connections";
import Intro from "./_components/Intro";
import { fetchData } from "@/utils/fetchData";

export const metadata: Metadata = {
  title: "meagan waller | it's a blog!",
};

export default async function Landing() {
  const data = await fetchData(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/posts?recent=true`,
  );

  console.log("DATA IS:", data);

  return (
    <main className="grid-areas-landingMobile md:grid-areas-landing grid-cols-landing my-auto grid max-w-full grid-flow-row flex-col gap-2 p-2 text-gray-950 dark:text-gray-50">
      {data.posts?.length > 0 && <RecentPosts posts={data.posts} />}
      <Intro />
      <Connections />
    </main>
  );
}
