import { HomeStaticProps } from '.';
import RecentPosts from './fragments/RecentPosts';

const HomeContent = ({ posts }: HomeStaticProps) => {
  return <RecentPosts posts={posts} />;
};

export default HomeContent;
