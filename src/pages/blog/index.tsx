import { allPosts } from 'contentlayer/generated';
import { InferGetStaticPropsType } from 'next';

import Blog from '@/elements/Blog';

const blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Blog posts={posts} />
);

export default blog;

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
