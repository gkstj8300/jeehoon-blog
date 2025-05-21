import Link from 'next/link';
import { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { SkillContent } from './SkillContent';
import { SkillInfo } from './SkillInfo';
import styles from './SkillList.module.scss';
import { SkillSearch } from './SkillSearch';
import { SkillTitle } from './SkillTitle';
import { Breadcrumbs } from '@/components/ui/links/Breadcrumbs';
import { SkillType } from "@/models/pages/slug";
import { url } from '@/utils/url';

type Props = {
    skillList: SkillType[];
};

const PAGE_SIZE = 5;

export const SkillList: React.FC<Props> = ({ skillList }) => {
    const [posts, setPosts] = useState<SkillType[]>(skillList);
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
    const observerRef = useRef<HTMLDivElement | null>(null);

    const filterPosts = useCallback((posts: SkillType[]) => {
        setPosts(posts);
        setVisibleCount(PAGE_SIZE);
    }, []);

    const visiblePosts = useMemo(() => {
        return posts.slice(0, visibleCount);
    }, [posts, visibleCount]);

    useEffect(() => {
        if (visibleCount >= posts.length) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0]?.isIntersecting) {
                    setVisibleCount((prev) => {
                        const next = prev + PAGE_SIZE;
                        return next > posts.length ? posts.length : next;
                    });
                }
            },
            { 
                threshold: 1.0 
            }
        );

        const target = observerRef.current;
        
        if (target) {
            observer.observe(target)
        }

        return () => {
            if (target) {
                observer.unobserve(target)
            }
        };
    }, [posts, visibleCount]);

    const renderedSkillList = useMemo(() => {
        return visiblePosts.map((post) => (
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
    }, [visiblePosts]);

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
                    {visibleCount < posts.length && (
                        <div ref={observerRef} style={{ height: '1px' }} />
                    )}
                </div>
            </div>
        </>
    );
};

SkillList.displayName = 'SkillList';
