const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

const requests = {
  fetchRecentPosts: `${BASE_API_URL}/posts?recent=true`,
  fetchAllPosts: `${BASE_API_URL}/posts`,
  fetchPostBySlug: (slug: string) => `${BASE_API_URL}/posts/${slug}`,
  fetchAllCategories: `${BASE_API_URL}/categories`,
  fetchCategoryBySlug: (slug: string) => `${BASE_API_URL}/categories/${slug}`,
  fetchPostsByCategorySlug: (slug: string) =>
    `${BASE_API_URL}/posts?category=${slug}`,
  fetchPostsByTag: (tag: string) => `${BASE_API_URL}/posts?tag=${tag}`,
  fetchPostsByCategoryAndTag: (categorySlug: string, tag: string) =>
    `${BASE_API_URL}/posts?category=${categorySlug}&tag=${tag}`,
  fetchPostsBySearchQuery: (query: string) =>
    `${BASE_API_URL}/posts?search=${query}`,
  fetchPostsByPage: (page: number) => `${BASE_API_URL}/posts?page=${page}`,
  fetchPostsByCategoryAndSearchQuery: (categorySlug: string, query: string) =>
    `${BASE_API_URL}/posts?category=${categorySlug}&search=${query}`,
  fetchPostsByTagAndSearchQuery: (tag: string, query: string) =>
    `${BASE_API_URL}/posts?tag=${tag}&search=${query}`,
};

export default requests;
