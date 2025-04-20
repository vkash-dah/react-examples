import Link from 'next/link';
import { getAllPosts, PostMeta } from '@/lib';

export default function Home() {
  const posts: PostMeta[] = getAllPosts();

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug} className="border p-4 rounded-2xl shadow-sm hover:shadow-md transition">
            <Link href={`/blog/${post.slug}`} className="text-xl font-semibold text-blue-600 hover:underline">
              {post.title}
            </Link>
            <p className="text-sm text-gray-500">{post.date}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}