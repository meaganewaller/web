import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import requests from './requests';

export interface BlogPost {
  source: MDXRemoteSerializeResult;
  data: { [key: string]: any };
  content: string;
}

export const getPosts = async (): Promise<BlogPost[]> => {
  const posts = await fetch(`${requests.fetchAllPosts}`).then((res) => res.json());
  const serializedPosts = await Promise.all(
    posts.map(async (post: any) => {
      const source = await serialize(post.content);
      return {
        source,
        data: post,
        content: post.content,
      };
    })
  );

  return serializedPosts;
}

export const getPost = async (slug: string): Promise<BlogPost> => {
  const post = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/posts/${slug}`).then((res) => res.json());
  const source = await serialize(post.content);

  return {
    source,
    data: post,
    content: post.content,
  };
}
