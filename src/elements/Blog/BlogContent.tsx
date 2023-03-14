import BlogPost from '@/components/features/BlogPost';

import { BlogStaticProps } from '.';

const BlogContent = ({ posts }: BlogStaticProps) => {
  return (
    <div>
      <div>
        {posts.map(post => (
          <BlogPost key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogContent;
