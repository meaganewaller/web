import { inject } from '@vercel/analytics'
import { useEffect } from 'react'

export const useAnalytics = () => {
  useEffect(() => {
    inject({
      beforeSend: (event: any) => {
        if (event.url.includes('localhost')) {
          return false
        }

        return event
      },
    })
  }, [])
}
