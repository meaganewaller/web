'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { PostsList } from './_components/PostsList'

const getPosts = async (limit = 10, page = 1, tag?: string, category?: string, search?: string) => {
  let urlString = `?page=${page}&limit=${limit}`

  if (tag) {
    urlString += `&tag=${tag}`
  }

  if (category) {
    urlString += `&category=${category}`
  }

  if (search) {
    urlString += `&query=${search}`
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/posts${urlString}`)
  const data = await res.json()
  return data
}

export default function BlogPage() {
  const searchParams = useSearchParams()
  const page = searchParams.get('page')
  const tag = searchParams.get('tag') || undefined
  const search = searchParams.get('query') || undefined
  const currentPage = parseInt(page as string, 10) || 1
  const category = searchParams.get('category') || undefined
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(0)
  const [blogData, setBlogData] = useState<any>(null)

  useEffect(() => {
    setIsLoading(0)
    getPosts(1, currentPage, tag, category, search).then((res) => {
      setBlogData(res)
      setIsLoading(1)
    })
  }, [searchParams, router])

  let postUrl = `/blog?page=${currentPage}`
  const previousPostUrl = `/blog?page=${currentPage - 1}`

  if (tag) {
    postUrl += `&tag=${tag}`
  }

  if (search) {
    postUrl += `&query=${search}`
  }

  if (category) {
    postUrl += `&category=${category}`
  }

  if (blogData === null) {
    return (
      <main className="h-screen w-full flex items-center justify-center">
        <h1>Error: Cannot fetch data from backend.</h1>
      </main>
    )
  }

  if (isLoading === 1) {
    return (
      <div>
        <PostsList
          posts={blogData.posts}
          url={postUrl}
          pagination={blogData.pagy.series}
          page={currentPage}
          previousPostUrl={previousPostUrl}
          totalPages={blogData.pagy.pages}
        />
      </div>
    )
  }

  return (
    <div>
      <h1>Loading...</h1>
    </div>
  )
}
