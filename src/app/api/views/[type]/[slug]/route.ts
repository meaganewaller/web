import type { NextRequest } from "next/server";

import { countContentViews, countUserViews, createView } from "@/actions/views";
import { MAX_VIEWS_PER_SESSION } from "@/config/constants";
import type { MessageResponse } from "@/utils/api";
import { getErrorMessage, response } from "@/utils/api";
import { getSessionId } from "@/utils/session";

export const GET = async (
	_req: NextRequest,
	{ params }: { params: { type: string; slug: string } },
) => {
	try {
		const { type, slug } = params;

		const count = await countContentViews({ type, slug });

		return response<{ count: number }>({ count });
	} catch (err) {
		return response<MessageResponse>({ message: getErrorMessage(err) }, 500);
	}
};

export const POST = async (
	req: NextRequest,
	{ params }: { params: { type: string; slug: string } },
) => {
	try {
		const { type, slug } = params;
		const sessionId = getSessionId(req);

		const currentViews = await countUserViews({ type, slug, sessionId });

		if (currentViews < MAX_VIEWS_PER_SESSION) {
			await createView({ type, slug, sessionId });

			return response({}, 201);
		}

		// conflict exceeded maximum limit
		return response<MessageResponse>(
			{ message: "Maximum limit exceeded" },
			409,
		);
	} catch (err) {
		return response<MessageResponse>({ message: getErrorMessage(err) }, 500);
	}
};
