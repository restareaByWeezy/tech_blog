import { allPosts } from 'contentlayer/generated';
import { InferGetStaticPropsType } from 'next';

import HomeContent from '@/components/elements/Home';

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <HomeContent posts={posts} />;
};

export default Home;

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
