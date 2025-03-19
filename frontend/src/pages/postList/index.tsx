import { GetServerSideProps, NextPage } from 'next';
import { PostType } from "@/models/pages/slug";
import getMarkdownAllPosts from "@/utils/markDown/getMarkdownAllPosts";

type Props = {
    postList: PostType[];
};

const PostListPage: NextPage<Props> = props => {
    return (
        <>
            PostListPage
        </>
    );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const { postList } = await getMarkdownAllPosts();

    return {
        props: {
            postList: Array.isArray(postList) ? postList : [],
        },
    };
};

export default PostListPage;
