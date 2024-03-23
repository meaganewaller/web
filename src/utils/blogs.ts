import { serialize } from "next-mdx-remote/serialize";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import requests from "./requests";
import type { PostResponse } from "@/types";
import { fetchData } from "./fetchData";

export interface BlogPost {
  source: MDXRemoteSerializeResult;
  data: PostResponse;
  content: string;
}

export const getPosts = async (): Promise<BlogPost[]> => {
  const [postsResponse, error] = await fetchData<PostResponse[]>(`${requests.posts.fetchAll}`);
  if (error || !postsResponse) {
    console.error("Error fetching posts", error);
    return [];
  }

  const posts: PostResponse[] = postsResponse;

  const serializedPosts = await Promise.all(
    posts.map(async (post: PostResponse) => {
      const source = await serialize(post.content);

      return {
        source,
        data: post,
        content: post.content,
      };
    }),
  );

  return serializedPosts;
};

export const getPost = async (slug: string): Promise<BlogPost> => {
  const [postResponse, error] = await fetchData<PostResponse>(`${requests.posts.fetchBySlug(slug)}`);
  if (error || !postResponse) {
    throw new Error(`Error fetching post with slug ${slug}: ${error}`);
  }

  const post: PostResponse = postResponse;

  const source = await serialize(post.content);

  return {
    source,
    data: post,
    content: post.content,
  };
};
