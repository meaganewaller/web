interface Author {
  name: string
  url: string
  avatar: string
  email: string
  linkedIn?: string
  twitter?: string
}

interface Site {
  url: string
  name: string
  title: string
  description: string
  author: Author
  keywords?: string[]
}

export const BASE_URL = process.env.BASE_URL || `http://localhost:5100`;

const site: Site = {
  url: BASE_URL,
  name: 'meagan waller',
  title: 'meagan waller',
  description: 'a web log',
  author: {
    name: 'meagan waller',
    url: 'https://meaganwaller.com',
    email: 'meagan@meaganwaller.com',
    linkedIn: 'https://linkedin.com/in/meaganwaller',
    avatar: 'https://meaganwaller.com/avatar.jpg',
    twitter: '@meaganewaller',
  },
  keywords: ['web', 'log', 'blog', 'meagan', 'waller', 'meaganwaller'],
}

export const config = {
  size: {
    width: 1200,
    height: 630,
  },
  contentType: 'image/png',
}

export default site
