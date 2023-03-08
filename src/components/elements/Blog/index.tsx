import { Post } from 'contentlayer/generated';

import Layout from '@/components/layouts/Layout';

import BlogContent from './BlogContent';

export interface BlogStaticProps {
  posts: Post[];
}

const Blog = ({ posts }: BlogStaticProps) => (
  <Layout content={<BlogContent posts={posts} />} />
);

export default Blog;
