const author = {
  name: 'meagan waller',
  twitter: '@meaganewaller',
  github: '@meaganewaller',
  email: 'meagan@meaganwaller.com',
  website: 'https://meaganwaller.com',
}

const defaultTitle = 'meagan waller'
const defaultDescription = 'meagan waller is a software engineer based in jacksonville, fl'

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || `https://meaganwaller.com`

export const defaultMetadata = {
  title: {
    template: '%s | meagan waller',
    default: defaultTitle,
  },
  description: defaultDescription,
  keywords: [
    'meagan waller',
    'software engineer',
    'software developer',
    'open source',
    'javascript',
    'typescript',
    'nodejs',
    'react',
    'nextjs',
    'ruby',
    'rails',
    'ruby on rails',
  ],
  author,
  authors: [author],
  colorSchema: 'dark',
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    article: {
      published_time: '',
    },
    sitename: defaultTitle,
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    shortcut: './favicon.ico',
  },
}

export const createMetadata = ({
  date,
  description,
  tags = [],
  title,
}: {
  date: string;
  description: string;
  tags: string[];
  title: string;
}) => {
  const metadata = { ...defaultMetadata }
  metadata.title.default = title
  metadata.description = description
  metadata.keywords = [...tags, ...metadata.keywords]
  metadata.openGraph.title = title
  metadata.openGraph.description = description
  metadata.openGraph.article.published_time = date
  return metadata
}

export default createMetadata
