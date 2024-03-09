import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Article } from "@/components/Article";

type Props = {
	params: {
		type: string;
		slug: string;
	};
};

export const dynamic = "force-static";
export const revalidate = 3600;

export async function generateMetadata({
	params: { type, slug },
}: Props): Promise<Metadata | undefined> {
	let resourceType = type;
	if (type === "blog") {
		resourceType = "posts";
	}

	if (type !== "blog") {
		return notFound();
	}

	const data = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_API_URL}/${resourceType}/${slug}`,
	).then((res) => res.json());

	if (!data) {
		return;
	}

	const publishedAt = new Date(data.published_date).toISOString();
	const modifiedAt = new Date(data.notion_updated_at).toISOString();
	const authors = ["Meagan Waller"];

	return {
		title: data.title,
		description: data.description,
		alternates: {
			canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/${type}/${slug}`,
		},
		openGraph: {
			title: `${data.title} | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
			publishedTime: publishedAt,
			modifiedTime: modifiedAt,
			description: data.meta_description,
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/${type}/${slug}`,
			siteName: process.env.NEXT_PUBLIC_SITE_NAME,
			images: [
				{
					url: data.cover_image,
					alt: data.alt,
					width: 1300,
					height: 630,
				},
			],
			locale: "en_US",
			type: "article",
			authors: authors.length > 0 ? authors : ["Unknown"],
		},
		twitter: {
			card: "summary_large_image",
			title: `${data.title} | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
			description: data.meta_description,
			images: [data.cover_image],
		},
	};
}

export default async function Page({ params: { type, slug } }: Props) {
	if (type === "blog") {
		type = "posts";
	}
	const data = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_API_URL}/${type}/${slug}`,
	).then((res) => res.json());

	if (!data) {
		return notFound();
	}

	return <Article article={data} />;
}
