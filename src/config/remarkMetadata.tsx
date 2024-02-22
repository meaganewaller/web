import type React from 'react';
import type { MarkdownMetadata } from '@/types/metadata';
import { formatDate } from '@/utils/date';

export const remarkMetadata = ((metadataRef?: React.MutableRefObject<MarkdownMetadata>) => {
  return (draft: any) => {
    const { children } = draft;
    const formatted = [];
    const {
      date = new Date().toISOString(),
    }


  }
})
