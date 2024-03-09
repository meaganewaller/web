if (!URL.canParse(process.env.NEXT_PUBLIC_BASE_API_URL)) {
  throw new Error(`
    Invalid NEXT_PUBLIC_BASE_API_URL.
    Add to your environment variables: NEXT_PUBLIC_BASE_API_URL=URL_TO_YOUR_NEXT_PUBLIC_BASE_API_URL
  `)
}

import withTwin from './withTwin.mjs'

/**
 * @type {import('next').NextConfig}
 */
export default withTwin({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
})
