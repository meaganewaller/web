import { formatDateToISO } from '@/utils/date';
import type { TGuestbook, TGuestbookPayload } from '@/types'
import { fetchData } from './fetchData';
import { cache } from 'react'

export const getGuestbook = cache(async () => {
  try {
    const [res, error] = await fetchData(`${process.env.NEXT_PUBLIC_BASE_API_URL}/guestbook`);
    if (error) {
      throw new Error('Failed to fetch guestbook data: ' + (error as Error).message);
    }

    const guestbook = (res as TGuestbook[]).map((item: TGuestbook) => ({
      ...item,
      created_at: formatDateToISO(new Date(item.created_at)),
    }))

    console.log('guestbook', guestbook)

    return [guestbook, null] as const;
  } catch (error) {
    return [null, error as Error] as const;
  }
})

export async function createGuestbook(payload: TGuestbookPayload) {
  try {
    const [res, error] = await fetchData(`${process.env.NEXT_PUBLIC_BASE_API_URL}/guestbook`, {
      method: 'POST',
      body: payload,
    });
    if (error) {
      throw new Error('Failed to create guestbook entry: ' + (error as Error).message);
    }
    return (res as { id: string }).id; // Adjust this according to your API response
  } catch (error) {
    return null
  }
}

type TPayload = {
  guestbookId: string
  sessionId: string
}

export async function deleteGuestbook(payload: TPayload) {
  try {
    const [error] = await fetchData(`${process.env.NEXT_PUBLIC_BASE_API_URL}/guestbook/${payload.guestbookId}`, {
      method: 'DELETE',
      body: payload,
    });
    if (error) {
      throw new Error('Failed to delete guestbook entry: ' + (error as Error).message);
    }
    return true; // Adjust this according to your API response
  } catch (error) {
    return false
  }
}
