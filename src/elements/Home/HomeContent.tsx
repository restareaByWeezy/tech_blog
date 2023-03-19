import { HomeStaticProps } from '.';
import Hero from './fragments/Hero';
import RecentPosts from './fragments/RecentPosts';

const HomeContent = ({ posts }: HomeStaticProps) => {
  return (
    <>
      <Hero />
      <RecentPosts posts={posts} />
    </>
  );
};

export default HomeContent;
