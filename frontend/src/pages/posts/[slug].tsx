import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { PostType } from './[slug].types';
import { getParams } from './[slug].utils';
import { PostDetail } from '@/components/pages/PostDetail';
import getMarkdownPost from '@/utils/markDown/getMarkdownPost';

type Props = {
    post: PostType;
};

const PostDetailPage: NextPage<Props> = ({
    post,
}) => {
	const { isReady, query } = useRouter();

	if (!isReady) {
		return null;
	}

    return (
        <PostDetail slug={String(query.slug)} {...post} />
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