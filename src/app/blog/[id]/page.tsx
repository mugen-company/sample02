import { FC } from 'react';

interface BlogPostProps {
  params: {
    id: string;
  };
}

const BlogPost: FC<BlogPostProps> = ({ params }) => {
  const { id } = params;

  return (
    <div>
      <h1>Blog Post ID: {id}</h1>
      <p>This is the blog post with the dynamic ID: {id}</p>
    </div>
  );
};

export default BlogPost;
