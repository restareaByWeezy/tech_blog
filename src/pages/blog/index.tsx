import { allPosts } from 'contentlayer/generated';
import { InferGetStaticPropsType } from 'next';

import Blog from '@/components/elements/Blog';

const blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Blog posts={posts} />
);

export default blog;

export const getStaticProps = async () => {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date)),
  );
  console.log('🚀 ~ file: index.tsx:16 ~ getStaticProps ~ posts:', posts);

  return {
    props: {
      posts,
    },
  };
};
