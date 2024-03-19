import type { GuestbookEntry } from '@/types'
import { fetchData } from '@/utils/fetchData'

export const getGuestbookEntries = async (): Promise<
  GuestbookEntry[] | undefined
> => {
  try {
    const entries: GuestbookEntry[] = await fetchData(`${process.env.NEXT_PUBLIC_BASE_API_URL}/guestbook`)

    console.log("entries", entries)
  } catch (error) {
    console.error('Error getting guestbook entries: ', error)
    return [];
  }
}

export const addEntry = async ({
  message,
  name,
  email,
  sessionId,
}: {
  message: string,
  name: string,
  email: string,
  sessionId: string,
}) => {
  const submitData = { guestbook_entry: { body: message, name, email, session_id: sessionId } }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/guestbook`, {
      method: 'POST',
      body: JSON.stringify(submitData),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    console.log("res", res)
    if (res.ok) {
      console.log('yeaaaaaa')
    } else {
      console.log('oops! something went wrong')
    }
  } catch (error) {
    console.log('error')
  }
}

export const findEntryById = async (id: string) => {
  return await fetchData(`${process.env.NEXT_PUBLIC_BASE_API_URL}/guestbook/${id}`)
}

export const deleteEntry = async (id: string, sessionId: string) => {
  await fetchData(`${process.env.NEXT_PUBLIC_BASE_API_URL}/guestbook/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({ guestbook_entry: { session_id: sessionId } }),
  })
}
