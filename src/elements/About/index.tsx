import { Post } from 'contentlayer/generated';

import Layout from '@/components/layouts/Layout';

import AboutContent from './AboutContent';

export interface HomeStaticProps {
  posts: Post[];
}

const Home = () => <Layout content={<AboutContent />} />;

export default Home;
