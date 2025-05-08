import { GetServerSideProps, NextPage } from 'next';
import { SkillList } from '@/components/pages/SkillList/SkillList';
import { SkillType } from "@/models/pages/slug";
import getMarkdownAllPosts from "@/utils/markDown/getMarkdownAllPosts";

type Props = {
    skillList: SkillType[];
};

const SkillListPage: NextPage<Props> = props => {
    return (
        <>
            <SkillList {...props} />
        </>
    );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const { postList } = await getMarkdownAllPosts();

    return {
        props: {
            skillList: Array.isArray(postList) ? postList : [],
        },
    };
};

export default SkillListPage;
