import { Post } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';

import Col from '@/components/common/_Grid/Col';
import Card from '@/components/common/Card';
import Text from '@/components/common/Text/Text';
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
          <Link key={post._id} href={`/blog/${post._raw.flattenedPath}`}>
            <Card className={styles.card} size="full">
              <Text type="h2">{post.title}</Text>
              <Text>{post.description}</Text>
              <Image
                width={200}
                height={200}
                src={post.image}
                alt={post.title}
              />
            </Card>
          </Link>
        ))}
      </Col>
    </section>
  );
};

export default RecentPosts;
