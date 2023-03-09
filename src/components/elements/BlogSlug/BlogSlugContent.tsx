import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { BlogSlugStaticProps } from '.';

const BlogSlugContent = ({ post }: BlogSlugStaticProps) => {
  const MDXComponent = useMDXComponent(post.body.code);
  return (
    <div>
      <h1>{post.title}</h1>
      <MDXComponent />
      rsc
    </div>
  );
};

export default BlogSlugContent;
