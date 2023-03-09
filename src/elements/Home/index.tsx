import { Post } from 'contentlayer/generated';

import Layout from '@/components/layouts/Layout';

import HomeContent from './HomeContent';

export interface HomeStaticProps {
  posts: Post[];
}

const Home = ({ posts }: HomeStaticProps) => (
  <Layout content={<HomeContent posts={posts} />} />
);

export default Home;
