import { BASE_URL } from '@/utils/env/client'
import type { TGuestbookPayload, TGuestbookResponse } from '@/types'

const API_URL = `${BASE_URL}/api/guestbook`

export const useGuestbook = async () => {
  try {
    const response = await fetch(API_URL)
    if (!response.ok) {
      throw new Error('Failed to fetch guestbook data')
    }
    const data: TGuestbookResponse = await response.json()
    return { message: '', data: data }
  } catch (error: any) {
    throw new Error('Failed to fetch guestbook data: ' + error.message)
  }
}

export const useMutateGuestbook = async (payload: TGuestbookPayload) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    if (!response.ok) {
      throw new Error('Failed to post guestbook data')
    }
    return { success: true, message: 'Guestbook entry added successfully' }
  } catch (error: any) {
    throw new Error('Failed to post guestbook data: ' + error.message)
  }
}

export const useDeleteGuestbook = async (params: { guestbookId: string }) => {
  try {
    const response = await fetch(`${API_URL}/${params.guestbookId}`, {
      method: 'DELETE',
    })
    if (!response.ok) {
      throw new Error('Failed to delete guestbook entry')
    }
    return { success: true, message: 'Guestbook entry deleted successfully' }
  } catch (error: any) {
    throw new Error('Failed to delete guestbook entry: ' + error.message)
  }
}
