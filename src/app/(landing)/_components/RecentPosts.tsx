export default function RecentPosts({ posts }) {
  return (
    <main>
      <h1>Recent Posts</h1>
      {posts.map((post) => (
        <h2>{post.title}</h2>
      ))}
    </main>
  );
}
