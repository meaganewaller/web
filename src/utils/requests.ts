const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL

const requests = {
  posts: {
    fetchRecent: `${BASE_API_URL}/posts?recent=true`,
    fetchAll: `${BASE_API_URL}/posts`,
    fetchBySlug: (slug: string) => `${BASE_API_URL}/posts/${slug}`,
    fetchByCategorySlug: (slug: string) => `${BASE_API_URL}/posts?category=${slug}`,
    fetchByTag: (tag: string) => `${BASE_API_URL}/posts?tag=${tag}`,
    fetchByCategoryAndTag: (categorySlug: string, tag: string) =>
      `${BASE_API_URL}/posts?category=${categorySlug}&tag=${tag}`,
    fetchBySearchQuery: (query: string) => `${BASE_API_URL}/posts?search=${query}`,
    fetchByPage: (page: number) => `${BASE_API_URL}/posts?page=${page}`,
    fetchByCategoryAndSearchQuery: (categorySlug: string, query: string) =>
      `${BASE_API_URL}/posts?category=${categorySlug}&search=${query}`,
    fetchByTagAndSearchQuery: (tag: string, query: string) => `${BASE_API_URL}/posts?tag=${tag}&search=${query}`,
    fetchCommentsForSlug: (slug: string) => `${BASE_API_URL}/posts/${slug}/comments`,
    createCommentForSlug: (slug: string) => `${BASE_API_URL}/posts/${slug}/comments`,
  },
  categories: {
    fetchAll: `${BASE_API_URL}/categories`,
    fetchBySlug: (slug: string) => `${BASE_API_URL}/categories/${slug}`,
  },
  guestbook: {
    fetchAll: `${BASE_API_URL}/guestbook`,
    create: `${BASE_API_URL}/guestbook`,
  },
}

export default requests
