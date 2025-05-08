import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { SkillDetail } from '@/components/pages/SkillDetail';
import { SkillType } from '@/models/pages/slug';
import { getParams } from '@/utils/getParams';
import getMarkdownSkill from '@/utils/markDown/getMarkdownSkill';

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
    const post = await getMarkdownSkill(String(slug));

    return {
        props: { post }
    }
};

export default SkillDetailPage;