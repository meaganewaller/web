"use server";

import { fetchData } from "@/utils/fetchData";

interface ViewParams {
	type: string;
	slug: string;
	sessionId: string;
}

interface CreateViewParams extends ViewParams {}
interface CountUserViewsParams extends ViewParams {}
interface CountContentViewsParams {
	type: string;
	slug: string;
}

interface ViewResponse {
	type: string;
	slug: string;
	count: number;
}

export const countContentViews = async ({
	type,
	slug,
}: CountContentViewsParams): Promise<number> => {
	const result = await fetchData(
		`${process.env.NEXT_PUBLIC_BASE_API_URL}/views?viewable_type=${type}&viewable_slug=${slug}`,
	).then((res: ViewResponse[]) => {
		return res[0];
	});

	return result.count;
};

export const countUserViews = async ({
	type,
	slug,
	sessionId,
}: CountUserViewsParams): Promise<number> => {
	return await fetchData(
		`${process.env.NEXT_PUBLIC_BASE_API_URL}/views?viewable_type=${type}&viewable_slug=${slug}&session_id=${sessionId}`,
	);
};

export const createView = async ({
	type,
	slug,
	sessionId,
}: CreateViewParams): Promise<void> => {
	const data = {
		view: {
			viewable_slug: slug,
			viewable_type: type,
			session_id: sessionId,
		},
	};

	await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/views`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});
};
