import { allPosts } from 'contentlayer/generated';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import React from 'react';

import BlogSlug from '@/components/elements/BlogSlug';

const blogSlug = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <BlogSlug post={post} />
);

export default blogSlug;

export const getStaticPaths = async () => {
  return {
    paths: allPosts.map(p => ({ params: { slug: p._raw.flattenedPath } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = allPosts.find(p => p._raw.flattenedPath === params?.slug);
  return {
    props: {
      post,
    },
  };
};
