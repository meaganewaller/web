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
  const posts: PostResponse[] = await fetchData(`${requests.posts.fetchAll}`)

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
  const post: PostResponse = await fetchData(`${requests.posts.fetchBySlug(slug)}`)
  const source = await serialize(post.content);

  return {
    source,
    data: post,
    content: post.content,
  };
};
