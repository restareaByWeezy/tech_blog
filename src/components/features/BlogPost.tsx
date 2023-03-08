import Link from 'next/link';

interface BlogPostProps {
  date: string;
  title: string;
  des: string;
  slug: string;
}

const BlogPost = ({ date, title, des, slug }: BlogPostProps) => {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <div>{date}</div>
      <div>{title}</div>
      <div>{des}</div>
    </Link>
  );
};

export default BlogPost;
