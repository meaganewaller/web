import type { TGuestbookPayload } from '@/types'

type ExtendConfig = {
  method?: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE',
  headers?: Record<string, string>,
  body?: string | TPayload | TGuestbookPayload
}

type TPayload = {
  guestbookId: string
  sessionId: string
}

export const fetchData = async <T = unknown>(url: string, config?: ExtendConfig) => {
  try {
    const response = await fetch(url, {
      method: config?.method ?? 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...config?.headers,
      },
      body: config?.body ? JSON.stringify(config?.body) : undefined,
    })

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data: T = await response.json();
    return [data, null] as const;
  } catch (error) {
    return [null, error] as const;
  }
}
