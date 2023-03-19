import React from 'react';

import Col from '@/components/common/_Grid/Col';
import BlogPost from '@/components/features/BlogPost';
import { vars } from '@/styles/vars.css';

import { BlogStaticProps } from '..';
import * as styles from './Posts.css';

const Posts = ({ posts }: BlogStaticProps) => {
  return (
    <section>
      <Col>
        <h1>블로그</h1>
      </Col>
      <Col
        justify="center"
        align="center"
        gap={vars.space.s30}
        className={styles.articlesWrapper}
      >
        {posts.map(post => (
          <BlogPost key={post._id} post={post} />
        ))}
      </Col>
    </section>
  );
};

export default Posts;
