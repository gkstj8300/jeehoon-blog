import { GetServerSideProps, NextPage } from 'next';
import { SkillList } from '@/components/pages/SkillList/SkillList';
import { SkillType } from "@/models/pages/slug";
import getMarkdownAllSkills from "@/utils/markDown/getMarkdownAllSkills";

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
    const { skillList } = await getMarkdownAllSkills();

    return {
        props: {
            skillList: Array.isArray(skillList) ? skillList : [],
        },
    };
};

export default SkillListPage;
