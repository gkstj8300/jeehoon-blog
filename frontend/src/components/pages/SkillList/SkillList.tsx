import Link from 'next/link';
import { useState, useMemo, useCallback } from 'react';
import { SkillContent } from './SkillContent';
import { SkillInfo } from './SkillInfo';
import styles from './SkillList.module.scss';
import { SkillSearch } from './SkillSearch';
import { SkillTitle } from './SkillTitle';
import { Breadcrumbs } from '@/components/ui/links/Breadcrumbs'
import { SkillType } from "@/models/pages/slug";
import { url } from '@/utils/url';

type Props = {
    skillList: SkillType[];
};

export const SkillList: React.FC<Props> = ({ skillList }) => {
    const [posts, setPosts] = useState<SkillType[]>(skillList);

    const filterPosts = useCallback((posts: SkillType[]) => {
        setPosts(posts);
    }, []);

    const renderedSkillList = useMemo(() => {
        return posts.map((post) => (
            <div key={post.slug} className={styles.skill}>
                <SkillTitle title={post.title}/>
                <SkillInfo regDate={post.regDate} tags={post.tags}/>
                <SkillContent content={post.content}/>
                <div className={styles.detailButton}>
                    <div className={styles.overlay}></div>
                    <Link 
                        className={styles.button} 
                        href={url.skillDetail(post.slug)}
                    >
                        상세보기
                    </Link>
                </div>
            </div>
        ));
    }, [posts]);

    return (
        <>
            <Breadcrumbs
                className={styles.breadcrumb}
                breadcrumbList={[{
                    text: '전체글',
                    strong: true,
                }]}
            />
            <div className={styles.container}>
                <div className={styles.searchWrap}>
                    <SkillSearch 
                        skillList={skillList}
                        filterPosts={filterPosts}
                    />
                </div>
                <div className={styles.skillListWrap}>
                    {renderedSkillList}
                </div>
            </div>
        </>
    );
};
SkillList.displayName = 'SkillList';