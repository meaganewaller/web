import { useEffect } from 'react'

import useRequest from './use-request'

const useView = ({ slug, type, trackView }: { slug: string; type: string; trackView?: boolean }) => {
  const { data, loading } = useRequest<{ count: number }>(`/api/views/${type}/${slug}`)

  useEffect(() => {
    const registerView = async (slug: string, type: string) => {
      await fetch(`/api/views/${type}/${slug}`, { method: 'POST' })
    }

    if (trackView) {
      registerView(slug, type)
    }
  }, [slug, type, trackView])

  return { views: data, loading }
}

export default useView
