import { Post } from 'contentlayer/generated';

import BlogPost from '@/components/features/BlogPost';

interface BlogContentProps {
  posts: Array<Post>;
}

const BlogContent = ({ posts }: BlogContentProps) => {
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
