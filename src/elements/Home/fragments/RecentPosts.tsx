import { Post } from 'contentlayer/generated';

import Col from '@/components/common/_Grid/Col';
import BlogPost from '@/components/features/BlogPost';
import { vars } from '@/styles/vars.css';

import * as styles from './RecentPosts.css';

interface RecentPostsProps {
  posts: Array<Post>;
}

const RecentPosts = ({ posts }: RecentPostsProps) => {
  return (
    <section>
      <Col>
        <h1>최근 게시물</h1>
      </Col>
      <Col
        justify="center"
        align="center"
        gap={vars.space.s30}
        className={styles.articlesWrapper}
      >
        {posts.slice(0, 5).map(post => (
          <BlogPost key={post._id} post={post} />
        ))}
      </Col>
    </section>
  );
};

export default RecentPosts;
