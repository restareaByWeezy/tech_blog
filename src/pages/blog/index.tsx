import { allPosts } from 'contentlayer/generated';
import { InferGetStaticPropsType } from 'next';

import Blog from '@/elements/Blog';

const BlogPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => <Blog posts={posts} />;

export default BlogPage;

export const getStaticProps = async () => {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date)),
  );

  return {
    props: {
      posts,
    },
  };
};
