import { allPosts } from 'contentlayer/generated';
import { InferGetStaticPropsType } from 'next';

import BlogContent from '@/components/elements/Blog';

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <BlogContent posts={posts} />
);

export default Blog;

export const getStaticProps = async () => {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date)),
  );

  return {
    props: {
      posts,
    },
  };
};
