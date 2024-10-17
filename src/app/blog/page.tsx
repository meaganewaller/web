'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import PostsList from './_components/PostsList'
import { fetchData } from '@/utils/fetchData'
import type { Pagy, PostResponse } from '@/types'
import cn from '@/utils/cn'
import requests from '@/utils/requests'
import Input from '@/components/Input'
import { LuSearch as Search } from 'react-icons/lu'
import EmptyState from '@/components/EmptyState'

import Container from '@/components/Container'
import PageHeader from '@/components/PageHeader'
import Pagination from '@/components/Pagination'

interface PostData {
  page: number
  totalPages: number
  url: string
  posts: PostResponse[]
  pagy: Pagy
}

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

  const [data] = await fetchData<PostData>(`${requests.posts.fetchAll}${urlString}`)

  return data
}

export default function BlogPage() {
  const searchParams = useSearchParams()
  const page = searchParams.get('page')
  const tag = searchParams.get('tag') || undefined
  const currentPage = Number.parseInt(page as string, 10) || 1
  const category = searchParams.get('category') || undefined

  const [search, setSearch] = useState<string | undefined>(searchParams.get('query') || '')
  const [isLoading, setIsLoading] = useState<boolean>(false) // Change any to boolean
  const [blogData, setBlogData] = useState<PostData | null>(null) // Use PostData type

  useEffect(() => {
    setIsLoading(true) // Start loading
    const delaySearch = setTimeout(() => {
      getPosts(10, currentPage, tag, category, search).then((res) => {
        setBlogData(res)
        setIsLoading(false)
      })
    }, 300)
    return () => clearTimeout(delaySearch)
  }, [currentPage, tag, category, search])

  let postUrl = `/blog?page=${currentPage}`
  const previousPostUrl = currentPage > 1 ? `/blog?page=${currentPage - 1}` : undefined

  if (tag) {
    postUrl += `&tag=${tag}`
  }

  if (search) {
    postUrl += `&query=${search}`
  }

  if (category) {
    postUrl += `&category=${category}`
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setSearch(event.target.value)
  }

  const renderSearchComponent = () => {
    return (
      <div className={cn('relative flex-1')}>
        <Input
          aria-label="Search posts"
          type="text"
          value={search}
          onChange={handleInputChange}
          placeholder="Search weblog"
          className="pl-12"
        />
        <Search className={cn('absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2')} />
      </div>
    )
  }

  return (
    <>
      <PageHeader title="the weblog" description="my thoughts, musings, and ramblings." />
      <Container>
        <div className="flex items-center gap-4">{renderSearchComponent()}</div>
        {!isLoading && blogData?.posts && blogData.posts.length ? (
          <>
            <PostsList posts={blogData.posts} page={currentPage} showSeparator={true} />
            <Pagination
              page={currentPage}
              url={postUrl}
              previousPostUrl={previousPostUrl}
              series={blogData.pagy.series}
            />
          </>
        ) : (
          <EmptyState
            message={
              search
                ? `No posts for "${search}" Perhaps the little guy is too busy running in the wheel of code.`
                : "The posts are playing hide and seek - we just can't find them!"
            }
          />
        )}
      </Container>
    </>
  )
}
