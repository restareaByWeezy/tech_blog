import { useMDXComponent } from 'next-contentlayer/hooks';

import BlogPostDetail from '@/components/features/BlogPostDetail';

import { BlogSlugStaticProps } from '.';

const BlogSlugContent = ({ post }: BlogSlugStaticProps) => {
  const MDXComponent = useMDXComponent(post.body.code);
  return (
    <div className="post">
      <h1>{post.title}</h1>
      <MDXComponent />
    </div>
  );
};

export default BlogSlugContent;
