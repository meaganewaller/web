export interface Link {
  url: string;
  title: string;
}

export interface Project {
  slug: string;
  tags?: string[];
  links: Link[];
  description: string;
  category: string;
  state: "idea" | "development" | "live" | "retired" | "transferred" | "left";
  state_description: string;
  title: string;
  icon_url: string;
  date_started: Date;
  date_ended?: Date;
}

export interface PostResponse {
  comment_count: number;
  content: string;
  cover_image: string;
  description: string;
  meta_description: string;
  notion_created_at: string;
  notion_updated_at: string;
  published: boolean;
  published_date: string;
  slug: string;
  tags: string[];
  title: string;
  views: number;
  category: {
    id: string;
    slug: string;
    description: string;
    cover_image: string;
    title: string;
  };
}

export interface Pagy {
  count: number;
  firstUrl: string;
  from: number;
  in: number;
  items: number;
  last: number;
  lastUrl: string;
  next: number;
  nextUrl: string;
  page: number;
  pageUrl: string;
  pages: number;
  prev: null;
  prevUrl: string;
  scaffoldUrl: string;
  series: string[];
  to: number;
}

export interface Article {
  id: number;
  slug: string;
  title: string;
  content?: string;
  publish_date: string;
  readingTime?: number;
  external: boolean;
  url: string;
  featuredImage?: string;
  allowComments?: boolean;
  allowPings?: boolean;
  commentCount: number;
  tags?: string[];
  categories?: Category[];
  excerpt?: string;
  comments?: Comment[];
}

export interface Post extends Article { }
export interface Page extends Article { }
export interface PhotoPost extends Article { }

export interface ArticlesListType {
  articles: Article[];
}

export interface Category {
  id: string;
  title: string;
  description: string;
  slug: string;
}

export interface Tag {
  name: string;
}
export type RecordTypes =
  | "blog"
  | "projects"
  | "talks"
  | "workspaces"
  | "categories"
  | "posts";
export type ColorsType = "pink-500 dark:pink-100";
export type Icons =
  | "arrow-left"
  | "arrow-right"
  | "external"
  | "menu"
  | "moon"
  | "search"
  | "star"
  | "sun"
  | "x";

interface Avatar {
  url?: string;
  width?: number;
  height?: number;
}

export interface Author {
  url?: string;
  name: string;
  avatar: Avatar;
}

export interface Webmention {
  source_url: string;
  target_url: string;
}

export type CommentType = "mention" | "comment" | "like" | "repost";
export interface Comment {
  author: Author;
  content: string;
  id: number;
  date: string;
  type: CommentType;
  webmention: Webmention;
  root: boolean;
  parentDatabaseId: number;
  replies: Comment[];
}

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
