
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

export async function generateStaticParams() {
  // 動的ルートに必要なパラメータを提供します
  const paths = [
    { params: { id: '1' } },
    { params: { id: '2' } },
    // 他の ID をここに追加します
  ];

  return {
    paths,
    fallback: false, // 必要に応じて true または 'blocking' に変更できます
  };
}
