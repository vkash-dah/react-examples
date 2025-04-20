import Link from 'next/link';
import { getAllPosts, getPostBySlug } from '@/lib';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogDetail({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  return (
    <main className="max-w-3xl mx-auto p-6">
      <Link href="/" className="text-blue-500 hover:underline">← Back to Blog</Link>
      <h1 className="text-4xl font-bold mt-4 mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{post.date}</p>
      <article className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </main>
  );
}