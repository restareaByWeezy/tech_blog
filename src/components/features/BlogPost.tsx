import { Post } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';

import Card from '../common/Card';
import Text from '../common/Text/Text';
import * as styles from './BlogPost.css';

interface BlogPostProps {
  post: Post;
}

const BlogPost = ({ post }: BlogPostProps) => {
  return (
    <Link href={`/blog/${post._raw.flattenedPath}`} key={post._id} passHref>
      <div className={styles.glowParent}>
        <a>
          <Card size="full" className={styles.cardWrapper}>
            <figure className={styles.thumbnailWrapper}>
              <Image
                className={styles.thumbnail}
                layout="fill"
                src={post.image}
                alt={post.title}
              />
            </figure>
            <Text type="h2" size="h3" weight="semiBold">
              {post.title}
            </Text>
            <Text>{post.description}</Text>
            <Text>{post.date}</Text>
          </Card>
        </a>
        <div className={styles.glowBox}></div>
      </div>
    </Link>
  );
};

export default BlogPost;
