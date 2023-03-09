import BlogPost from '@/components/features/BlogPost';

import { BlogStaticProps } from '.';

const BlogContent = ({ posts }: BlogStaticProps) => {
  return (
    <div>
      <div>
        {posts.map(post => (
          <BlogPost
            date={post.date}
            title={post.title}
            des={post.description}
            slug={post._raw.flattenedPath}
            key={post._id}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogContent;
