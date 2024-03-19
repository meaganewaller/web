import type { Metadata } from "next";
import RecentPosts from "./_components/RecentPosts";
import Connections from "./_components/Connections";
import Intro from "./_components/Intro";
import { fetchData } from "@/utils/fetchData";
import type { PostResponse } from "@/types";
import { Suspense } from "react";
import requests from "@/utils/requests";

export const metadata: Metadata = {
  title: "home",
};

interface PostData {
  posts: PostResponse[];
}

export default async function Landing() {
  const [data] = await fetchData<PostData>(`${requests.posts.fetchRecent}`)

  return (
    <main className="grid-areas-landingMobile md:grid-areas-landing grid-cols-landing my-auto grid max-w-full grid-flow-row flex-col gap-2 p-2 text-neutral-800">
      <Suspense fallback={<>Loading...</>}>
        {data?.posts && <RecentPosts posts={data.posts} />}
      </Suspense>

      <Intro />
      <Connections />
    </main>
  );
}
