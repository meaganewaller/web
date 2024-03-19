import type { NextRequest } from 'next/server'
import { getSessionId } from '@/utils/session'

import { addEntry, getGuestbookEntries } from '@/actions/guestbook'
import { getErrorMessage, response } from '@/utils/api'

export const GET = async () => {
  try {
    const entries = await getGuestbookEntries()

    return response(entries)
  } catch (err) {
    return response({ message: getErrorMessage(err) }, 500)
  }
}

export const POST = async (req: NextRequest) => {
  try {
    const session = getSessionId(req)

    if (!session) {
      return response({ message: 'Invalid session' }, 400)
    }

    const data = await req.json()
    const { message, name, email } = data

    const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/guestbook`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ guestbook_entry: { body: message, name, email, session_id: session } }),
    })

    return response({ message: 'Message created successfully' }, 201)
  } catch (err) {
    return response({ message: getErrorMessage(err) }, 500)
  }
}
// import type { NextRequest } from "next/server";
//
// import { getAllEntries, createEntry } from '@/actions/guestbook';
// import type { GuestbookEntryResponse, GuestbookPayload } from '@/types';
// import { getErrorMessage, response } from "@/utils/api";
// import { getSessionId } from "@/utils/session";
//
// import { revalidatePath } from 'next/cache';
//
// export async function GET() {
//   const [err, entries] = await getAllEntries();
//   if (err) {
//     return response({ message: getErrorMessage(err) }, 500);
//   }
//
//   return response<GuestbookEntryResponse[]>(entries);
// }
//
// export const POST = async (req: NextRequest) => {
//   const body = (await req.json()) as GuestbookPayload;
//
//   if (!body.message || !body.name || !body.email) {
//     return response({ message: 'Invalid request' }, 400);
//   }
//
//   const sessionId = getSessionId(req);
//
//   if (!sessionId) {
//     return response({ message: 'Invalid session' }, 400);
//   }
//
//   const messageId = await createEntry({ name: body.name, email: body.email, message: body.message, session_id: sessionId });
//   if (!messageId) {
//     return response({ message: 'Error creating message' }, 500);
//   }
//
//   revalidatePath('/guestbook', 'layout');
//   return response({ message: 'Message created successfully', messageId }, 201);
// }
//
// export async function DELETE(req: NextRequest) {
//   const guestbookEntryId = req.nextUrl.searchParams.get('guestbookEntryId');
//
//   if (!guestbookEntryId) {
//     return response({ message: 'Invalid request' }, 400);
//   }
//
//   const session = getSessionId(req);
//
//   if (!session) {
//     return response({ message: 'Invalid session' }, 400);
//   }
//
//   const ok = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/guestbook/${guestbookEntryId}`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ session_id: session }),
//   });
//
//   if (!ok) {
//     return response({ message: 'Error deleting message' }, 500);
//   }
//
//   revalidatePath('/guestbook', 'layout');
//   return response({ message: 'Message deleted successfully' });
// }
//
//
