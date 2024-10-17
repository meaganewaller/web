import type { Metadata } from 'next'
import RecentPosts from './_components/RecentPosts'
import Connections from './_components/Connections'
import Intro from './_components/Intro'
import { fetchData } from '@/utils/fetchData'
import type { PostResponse } from '@/types'
import { Suspense } from 'react'
import requests from '@/utils/requests'
import createMetadata from '@/utils/metadata'

export const metadata: Metadata = createMetadata({
  title: 'home',
  tags: ['home', 'landing'],
  date: String(new Date()),
  description: "meagan waller's personal website and blog",
})

interface PostData {
  posts: PostResponse[]
}

export default async function Landing() {
  const [data] = await fetchData<PostData>(`${requests.posts.fetchRecent}`)

  return (
    <div className="my-10 sm:my-12 md:my-14 lg:my-16 xl:my-18 2xl:my-20 max-w-[80%] mx-auto">
      <div className="pt-[10%] md:pt-0 no-scrollbar overflow-clip overscroll-none">
        <main className="grid-areas-landingMobile md:grid-areas-landing grid-cols-landing my-auto grid max-w-full grid-flow-row flex-col gap-2 px-2 overflow-hidden no-scrollbar">
          <Suspense fallback={<>Loading...</>}>{data?.posts && <RecentPosts posts={data.posts} />}</Suspense>

          <Intro />
          <Connections />
        </main>
      </div>
    </div>
  )
}
