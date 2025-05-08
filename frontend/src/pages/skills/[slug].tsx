import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { SkillDetail } from '@/components/pages/SkillDetail';
import { SkillType } from '@/models/pages/slug';
import { getParams } from '@/utils/getParams';
import getMarkdownPost from '@/utils/markDown/getMarkdownPost';

type Props = {
    post: SkillType;
};

const SkillDetailPage: NextPage<Props> = ({
    post,
}) => {
	const { isReady } = useRouter();

	if (!isReady) {
		return null;
	}

    return (
        <SkillDetail {...post} />
    );
};
SkillDetailPage.displayName = 'SkillDetailPage';

export const getServerSideProps: GetServerSideProps<Props> = async ({
	query,    
}) => {
    const { slug } = getParams(query);
    const post = await getMarkdownPost(String(slug));

    return {
        props: { post }
    }
};

export default SkillDetailPage;