"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { PostsList } from "./_components/PostsList";
import { fetchData } from "@/utils/fetchData";
import type { Pagy, PostResponse } from "@/types";

interface PostData {
  posts: PostResponse[];
  pagy: Pagy;
}

const getPosts = async (
  limit = 10,
  page = 1,
  tag?: string,
  category?: string,
  search?: string,
): Promise<PostData> => {
  let urlString = `?page=${page}&limit=${limit}`;

  if (tag) {
    urlString += `&tag=${tag}`;
  }

  if (category) {
    urlString += `&category=${category}`;
  }

  if (search) {
    urlString += `&query=${search}`;
  }

  return await fetchData<PostData>(
    // Assuming fetchData returns PostData
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/posts${urlString}`,
  );
};

export default function BlogPage() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const tag = searchParams.get("tag") || undefined;
  const search = searchParams.get("query") || undefined;
  const currentPage = Number.parseInt(page as string, 10) || 1;
  const category = searchParams.get("category") || undefined;

  const [isLoading, setIsLoading] = useState<boolean>(false); // Change any to boolean
  const [blogData, setBlogData] = useState<PostData | null>(null); // Use PostData type

  useEffect(() => {
    setIsLoading(true); // Start loading
    getPosts(10, currentPage, tag, category, search).then((res) => {
      setBlogData(res);
      setIsLoading(false); // Finish loading
    });
  }, [currentPage, tag, category, search]);

  let postUrl = `/blog?page=${currentPage}`;
  const previousPostUrl = `/blog?page=${currentPage - 1}`;

  if (tag) {
    postUrl += `&tag=${tag}`;
  }

  if (search) {
    postUrl += `&query=${search}`;
  }

  if (category) {
    postUrl += `&category=${category}`;
  }

  if (blogData === null) {
    return (
      <main className="h-screen w-full flex items-center justify-center">
        <h1>Error: Cannot fetch data from backend.</h1>
      </main>
    );
  }

  if (!isLoading) {
    // Check if isLoading is true
    return (
      <div>
        <PostsList
          posts={blogData.posts}
          url={postUrl}
          pagination={blogData.pagy.series}
          page={currentPage}
          previousPostUrl={previousPostUrl}
          totalPages={blogData.pagy.pages}
        />
      </div>
    );
  }

  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
}
