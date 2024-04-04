import { NextRequest } from 'next/server';
import { getSessionId } from '@/utils/session';
import { getErrorMessage, response } from "@/utils/api";
import { getGuestbookEntries } from '@/actions/guestbook'

export const GET = async () => {
  try {
    const entries = await getGuestbookEntries()

    return response(entries)
  } catch (err) {
    return response({ message: getErrorMessage(err) }, 500)
  }
}

export async function POST(req: NextRequest) {
  const sessionId = getSessionId(req);

  const body = await req.json();
  const data = {
    name: body.name,
    email: body.email,
    session_id: sessionId,
    website: body.website,
    body: body.message,
  }
  try {
    const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/guestbook`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ guestbook_entry: data }),
    });

    if (!resp.ok) {
      throw new Error("Error");
    }

    return new Response("ok", { status: 200 });
  } catch (e) {
    return new Response("error", { status: 500 });
  }
}
