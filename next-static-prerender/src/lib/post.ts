import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
}

export const getAllPosts = (): PostMeta[] => {
  const postsDir = path.join(process.cwd(), '/src/posts');
  const filenames = fs.readdirSync(postsDir);

  return filenames.map((filename) => {
    const filePath = path.join(postsDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);

    return {
      slug: filename.replace(/\.md$/, ''),
      title: data.title,
      date: data.date,
    };
  });
};

export const getPostBySlug = (slug: string) => {
  const filePath = path.join(process.cwd(), '/src/posts', `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    title: data.title,
    date: data.date,
    contentHtml: marked(content),
  };
};
