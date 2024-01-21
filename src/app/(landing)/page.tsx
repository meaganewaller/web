import RecentPosts from "./_components/RecentPosts";
import Connections from "./_components/Connections";
import Intro from "./_components/Intro";
import requests from "@/utils/requests";

async function getRecentPosts() {
  const res = await fetch(requests.fetchRecentPosts, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch recent posts from API");
  }

  return res.json();
}

export default async function Landing() {
  const data = await getRecentPosts();

  return (
    <main>
      {data.posts.length > 0 && <RecentPosts posts={data.posts} />}
      <Intro />
      <Connections />
    </main>
  );
}
