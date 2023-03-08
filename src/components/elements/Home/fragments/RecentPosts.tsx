import { Post } from 'contentlayer/generated';
import Link from 'next/link';

interface RecentPostsProps {
  posts: Array<Post>;
}

const RecentPosts = ({ posts }: RecentPostsProps) => {
  return (
    <section>
      <h1>최근 게시물</h1>
      <div>
        {posts.slice(0, 5).map(post => (
          <Link
            key={post._id}
            href={`/blog/${post._raw.flattenedPath}`}
            passHref
          >
            <a>
              <div>{post.title}</div>
              <div>{post.description}</div>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;