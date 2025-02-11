import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { PostType } from './[slug].types';
import { getParams } from './[slug].utils';
import { PostDetail } from '@/components/pages/PostDetail';
import { None } from '@/layouts/none';
import getMarkdownPost from '@/utils/markDown/getMarkdownPost';
import { NextPageWithLayout } from '@/utils/types';

type Props = {
    post: PostType;
};

const PostDetailPage: NextPageWithLayout<Props> = ({
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
PostDetailPage.getLayout = None;

export const getServerSideProps: GetServerSideProps<Props> = async ({
	query,    
}) => {
    const { slug } = getParams(query);
    try {
        const post = await getMarkdownPost(String(slug));

        return {
            props: { post }
        }

    } catch(error) {
        throw error;
    }
};

export default PostDetailPage;