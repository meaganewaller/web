'use client';

import type { GuestbookEntry } from '@/types';
import { useMemo } from 'react';
import pluralize from '@/utils/pluralize'
import EntryCard from '@/components/EntryCard';

interface EntriesListProps {
  entries: GuestbookEntry[];
  page?: number;
  url?: string;
  showSeparator?: boolean;
}

interface EntriesCountProps {
  entries: GuestbookEntry[];
  year: number;
}

export const EntriesCount = ({ entries, year }: EntriesCountProps) => {
  const count = useMemo(() => {
    return entries.filter((a) => {
      if (!a.created_at) {
        return false;
      }
      return new Date(a.created_at).getFullYear() === year;
    }).length;
  }, [entries, year]);

  return (
    <span className="mb-1 block rounded-full border border-solid border-primary-400 bg-primary-300 p-2 font-mono text-xs uppercase text-primary-800">
      {count} {pluralize('entry', count)}
    </span>
  )
}

interface EntryTimelineSeparatorProps {
  entries: GuestbookEntry[];
  currentEntry: GuestbookEntry;
  previousEntry: GuestbookEntry | null;
}

export const EntryTimelineSeparator = ({
  entries,
  currentEntry,
  previousEntry,
}: EntryTimelineSeparatorProps) => {
  if (!currentEntry.created_at || (previousEntry && !previousEntry.created_at)) {
    return <></>;
  }

  const currentEntryDate = new Date(currentEntry.created_at);
  const currentEntryYear = currentEntryDate.getFullYear();

  let previousEntryYear: number | null = null;


  if (previousEntry?.created_at) {
    const previousEntryDate = new Date(previousEntry.created_at);
    previousEntryYear = previousEntryDate.getFullYear();
  }

  if (!Number.isNaN(currentEntryYear) && currentEntryYear !== previousEntryYear) {
    return (
      <div className="mt-8 flex items-baseline justify-between border-b border-primary-700 md:mt-12">
        <span className="font-pixel my-4 inline-block text-xl font-bold text-orange-500">
          {currentEntryYear}
        </span>
        <EntriesCount entries={entries} year={currentEntryYear} />
      </div>
    );
  }

  return <></>;
}

const EntriesList = ({ entries, page = 1, url, showSeparator = false }: EntriesListProps) => {
  return (
    <>
      {entries.length === 0 && <p>No entries found.</p>}
      {entries.length > 0 &&
        entries.map((entry: GuestbookEntry, index: number) => (
          <div key={`${entry.id}-${entry.created_at}`}>
            {showSeparator && (
              <EntryTimelineSeparator
                entries={entries}
                currentEntry={entry}
                previousEntry={index > 0 ? entries[index - 1] : null}
              />
            )}
            <EntryCard index={index} entry={entry} />
          </div>
        ))
      }
    </>
  )
}

export default EntriesList;

// import * as React from 'react'
//
// function EntriesList() {
//   return <div></div>
// }
//
// export default EntriesList
