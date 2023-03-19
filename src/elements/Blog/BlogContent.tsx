import { BlogStaticProps } from '.';
import Posts from './fragments/Posts';

const BlogContent = ({ posts }: BlogStaticProps) => {
  return (
    <>
      <Posts posts={posts} />
    </>
  );
};

export default BlogContent;
