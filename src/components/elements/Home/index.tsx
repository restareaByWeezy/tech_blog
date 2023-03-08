import { Post } from 'contentlayer/generated';

import RecentPosts from './fragments/RecentPosts';

interface HomeProps {
  posts: Array<Post>;
}

const HomeContent = ({ posts }: HomeProps) => {
  return (
    <div>
      <RecentPosts posts={posts} />
    </div>
  );
};

export default HomeContent;
