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
