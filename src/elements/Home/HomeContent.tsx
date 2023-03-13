import { HomeStaticProps } from '.';
import About from './fragments/About';
import RecentPosts from './fragments/RecentPosts';

const HomeContent = ({ posts }: HomeStaticProps) => {
  return (
    <>
      <About />
      <RecentPosts posts={posts} />
    </>
  );
};

export default HomeContent;
