import type { Metadata } from 'next'

import { config } from '@/config'

export const createMetadata = (data: {
  title: string;
  description: string;
  keywords?: string | Array<string> | null;
  exactUrl?: string;
  image?: string;
}): Metadata => {
  const { title, description, keywords, exactUrl, image: imageURL } = data;

  const metadata: Metadata = {
    title,
    description,
    authors: [{ name: 'Meagan Waller', url: 'https://meaganwaller.com' }],
    openGraph: {
      title,
      description,
      url: exactUrl || 'https://meaganwaller.com',
      siteName: title,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      title,
      description,
      card: 'summary_large_image',
      creator: '@meaganewaller',
      site: '@meaganewaller',
    },
    metadataBase: new URL('https://meaganwaller.com')
  };

  if (imageURL && Boolean(imageURL)) {
    const image = {
      url: imageURL,
      type: config.contentType,
      width: config.size.width,
      height: config.size.height,
    };

    if (metadata.openGraph) {
      metadata.openGraph['images'] = [image];
    }
    if (metadata.twitter) {
      metadata.twitter['images'] = imageURL;
    }
  }

  return metadata;
}

export const colorMetaTags = [
  'theme-color',
  'msapplication-TileColor',
  'msapplication-navbutton-color',
  'apple-mobile-web-app-status-bar-style',
]
