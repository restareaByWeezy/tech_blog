import { Post } from 'contentlayer/generated';
import React from 'react';

import Layout from '@/components/layouts/Layout';

import BlogSlugContent from './BlogSlugContent';

export interface BlogSlugStaticProps {
  post: Post;
}

const BlogSlug = ({ post }: BlogSlugStaticProps) => (
  <Layout content={<BlogSlugContent post={post} />} />
);

export default BlogSlug;
