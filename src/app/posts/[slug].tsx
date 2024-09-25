import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPostSlugs, getPostData, PostData } from '../lib/posts.ts';
import { remark } from 'remark';
import html from 'remark-html';

interface PostProps {
    postData: PostData & { contentHtml: string };
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostSlugs();
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostData(params?.slug as string);
    return {
        props: {
            postData,
        },
    };
};

const Post: React.FC<PostProps> = ({ postData }) => {
    return (
        <article>
            <h1>{postData.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
    );
};

export default Post;
