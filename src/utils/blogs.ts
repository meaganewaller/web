import { serialize } from "next-mdx-remote/serialize";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import requests from "./requests";
import type { Article, Comment } from "@/types";

export interface BlogPost {
	source: MDXRemoteSerializeResult;
	data: { [key: string]: any };
	content: string;
}

export const getPosts = async (): Promise<BlogPost[]> => {
	const posts = await fetch(`${requests.posts.fetchAll}`).then((res) =>
		res.json(),
	);
	const serializedPosts = await Promise.all(
		posts.map(async (post: Article) => {
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
	const post = await fetch(`${requests.posts.fetchBySlug(slug)}`).then((res) =>
		res.json(),
	);
	const source = await serialize(post.content);

	return {
		source,
		data: post,
		content: post.content,
	};
};
