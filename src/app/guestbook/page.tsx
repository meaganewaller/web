'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import EntriesList from '@/components/EntriesList';
import GuestbookPanel from '@/components/GuestbookPanel';
import { fetchData } from '@/utils/fetchData';
import type { Pagy, GuestbookEntry } from '@/types';
import requests from '@/utils/requests';
import EmptyState from '@/components/EmptyState';

import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';
import { createMetadata } from '@/utils/metadata';
import Pagination from '@/components/Pagination';

interface GuestbookData {
  entries: GuestbookEntry[];
  pagy: Pagy;
}

createMetadata({
  title: 'guestbook',
  description: 'the official guestbook of meaganwaller.com',
})

export default function GuestbookPage() {
  const searchParams = useSearchParams();
  const page = searchParams.get('page');
  const currentPage = Number.parseInt(page as string, 10) || 1;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [guestbookData, setGuestbookData] = useState<GuestbookData | null>(null);

  const onSendMessage = async (message: string, name: string, email: string) => {
    try {
      await addEntry(message, name, email);
    } catch (error) {
      console.error('Error adding guestbook entry', error);
    }
  };

  const onRemoveMessage = async (id: string) => {
    try {
      await deleteEntry(id);
    } catch (error) {
      console.error('Error deleting guestbook entry', error);
    }
  }

  useEffect(() => {
    const fetchGuestbookEntries = async () => {
      setIsLoading(true);
      try {
        const data = await getEntries(10, currentPage);
        setGuestbookData(data);
      } catch (error) {
        console.error('Error fetching guestbook entries', error);
        setGuestbookData(null);
      }
      setIsLoading(false);
    };
    fetchGuestbookEntries();
  }, [currentPage]);

  const getEntries = async (limit = 10, page = 1): Promise<GuestbookData | null> => {
    let urlString = `?page=${page}&limit=${limit}`;
    const [data, error] = await fetchData<GuestbookData>(`${requests.guestbook.fetchAll}${urlString}`);
    if (error) {
      throw new Error(`Failed to fetch guestbook entries: ${error}`);
    }
    return data;
  };

  const addEntry = async (message: string, name: string, email: string): Promise<GuestbookEntry | null> => {
    const [data, error] = await fetchData<GuestbookEntry>(`api/guestbook`, {
      method: 'POST',
      body: {
        name,
        email,
        message,
      }
    });

    if (error) {
      throw new Error(`Failed to add guestbook entry: ${error}`);
    }
    return data;
  }

  const deleteEntry = async (id: string): Promise<void> => {
    const [data, error] = await fetchData(`/api/guestbook/${id}`, {
      method: 'DELETE',
    });
    if (error) {
      throw new Error(`Failed to delete guestbook entry: ${error}`);
    }
  }

  let entryUrl = `/guestbook?page=${currentPage}`;
  const previousEntryUrl = currentPage > 1 ? `/guestbook?page=${currentPage - 1}` : undefined;

  return (
    <>
      <PageHeader title="the guestbook" description="welcome to my guestbook" />
      <Container>
        {!isLoading && guestbookData?.entries && guestbookData.entries.length ? (
          <>
            <GuestbookPanel onSendMessage={onSendMessage} />
            <EntriesList
              entries={guestbookData.entries}
              url={entryUrl}
              page={currentPage}
            />
            {guestbookData.pagy.next && (
              <Pagination
                page={currentPage}
                url={entryUrl}
                previousPostUrl={previousEntryUrl}
                series={guestbookData.pagy.series}
              />
            )}
          </>
        ) : (
          <EmptyState message={"The posts are playing hide and seek - we just can't find them!"} />
        )}
      </Container>
    </>
  )
}
