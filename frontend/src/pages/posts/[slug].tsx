import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { PostDetail } from '@/components/pages/PostDetail';
import { PostType } from '@/models/pages/slug';
import { getParams } from '@/utils/getParams';
import getMarkdownPost from '@/utils/markDown/getMarkdownPost';

type Props = {
    post: PostType;
};

const PostDetailPage: NextPage<Props> = ({
    post,
}) => {
	const { isReady } = useRouter();

	if (!isReady) {
		return null;
	}

    return (
        <PostDetail {...post} />
    );
};
PostDetailPage.displayName = 'PostDetailPage';

export const getServerSideProps: GetServerSideProps<Props> = async ({
	query,    
}) => {
    const { slug } = getParams(query);
    const post = await getMarkdownPost(String(slug));

    return {
        props: { post }
    }
};

export default PostDetailPage;