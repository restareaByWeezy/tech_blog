import { allPosts } from 'contentlayer/generated';
import { InferGetStaticPropsType } from 'next';

import Home from '@/elements/Home';

const HomePage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => <Home posts={posts} />;

export default HomePage;

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
