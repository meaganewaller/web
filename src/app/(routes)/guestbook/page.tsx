'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Container from '@/components/Container'
import PageHeader from '@/components/PageHeader'
import Form from './_components/Form'
import EntriesList from '@/components/EntriesList'
import type { GuestbookEntry, Pagy } from '@/types'
import { fetchData } from '@/utils/fetchData'
import { toast } from 'react-hot-toast'
import Pagination from '@/components/Pagination'
import requests from '@/utils/requests'
import EmptyState from '@/components/EmptyState'

interface GuestbookData {
  entries: GuestbookEntry[]
  pagy: Pagy
}

export default function GuestbookPage() {
  const searchParams = useSearchParams()
  const page = searchParams.get('page')
  const currentPage = Number.parseInt(page as string, 10) || 1

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [guestbookData, setGuestbookData] = useState<GuestbookData | null>(null)

  useEffect(() => {
    const fetchGuestbookEntries = async () => {
      setIsLoading(true)
      try {
        const data = await getEntries(10, currentPage)
        setGuestbookData(data)
      } catch (error) {
        toast.error('Failed to fetch guestbook entries')
        setGuestbookData(null)
      }
      setIsLoading(false)
    }
    fetchGuestbookEntries()
  }, [currentPage])

  const getEntries = async (limit = 10, page = 1): Promise<GuestbookData | null> => {
    let urlString = `?page=${page}&limit=${limit}`
    const [data, error] = await fetchData<GuestbookData>(`${requests.guestbook.fetchAll}${urlString}`)
    if (error) {
      toast.error('Failed to fetch guestbook entries')
      throw new Error(`Failed to fetch guestbook entries: ${error}`)
    }
    return data
  }

  let entryUrl = `/guestbook?page=${currentPage}`
  const previousEntryUrl = currentPage > 1 ? `/guestbook?page=${currentPage - 1}` : undefined

  return (
    <>
      <PageHeader title="the guestbook" description="welcome to my guestbook" />
      <Container>
        {!isLoading && guestbookData?.entries && guestbookData.entries.length ? (
          <>
            <EntriesList entries={guestbookData.entries} url={entryUrl} page={currentPage} />
            {guestbookData.pagy.next && (
              <Pagination
                page={currentPage}
                url={entryUrl}
                previousPostUrl={previousEntryUrl}
                series={guestbookData.pagy.series}
              />
            )}
            <Form />
          </>
        ) : (
          <EmptyState message={"The entries are playing hide and seek - we just can't find them!"} />
        )}
      </Container>
    </>
  )
}
