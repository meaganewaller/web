export type RecordTypes = 'blog' | 'projects' | 'talks' | 'workspaces' | 'categories' | 'posts';
export type ColorsType = 'pink-500 dark:pink-100';
export type Icons = 'arrow-left' | 'arrow-right' | 'external' | 'menu' | 'moon' | 'search' | 'star' | 'sun' | 'x';

export interface RecordPageProps {
  type: RecordTypes;
  slug: string;
}

export type CategoryResponse = {
  cover_image: string;
  description: string;
  notion_id?: string;
  slug: string;
  title: string;
};

export type Record = {
  slug: string;
};

export type Tag = {
  title: string
}

export interface Asset {
  id: number;
  objectUrl: {
    webp: string;
    original: string;
    thumbnail_300_: string;
    thumbnail_700_: string;
    thumbnail_blur_: string;
  };
  originUrl: string;
  sn: string;
  tags: string[];
  comment: string;
  fileSuffix: string;
  sha1: string;
  pHash: string;
  exif: object;
  metadata: object;
  size: {
    width: number;
    height: number;
  };
  alt: string;
}
