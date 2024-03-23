"use server";

import { fetchData } from "@/utils/fetchData";

interface ViewParams {
  type: string;
  slug: string;
  sessionId: string;
}

interface CreateViewParams extends ViewParams { }
interface CountUserViewsParams extends ViewParams { }
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
  const [data, error] = await fetchData<ViewResponse[]>(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/views?viewable_type=${type}&viewable_slug=${slug}`,
  );

  if (error) {
    throw new Error(`Failed to fetch views: ${error}`);
  }

  if (data && data.length > 0) {
    return data[0].count;
  }

  return 0;
};

export const countUserViews = async ({
  type,
  slug,
  sessionId,
}: CountUserViewsParams): Promise<number> => {
  const [data, error] = await fetchData<ViewResponse[]>(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/views?viewable_type=${type}&viewable_slug=${slug}&session_id=${sessionId}`,
  );

  if (error) {
    throw new Error(`Failed to fetch views: ${error}`);
  }

  if (data && data.length > 0) {
    return data[0].count;
  }

  return 0;
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
