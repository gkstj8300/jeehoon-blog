import Link from 'next/link';
import { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { PostContent } from './PostContent';
import { PostInfo } from './PostInfo';
import styles from './PostList.module.scss';
import { PostSearch } from './PostSearch';
import { PostTitle } from './PostTitle';
import { Breadcrumbs } from '@/components/ui/links/Breadcrumbs';
import { useOnMounted } from '@/hooks/useOnMounted';
import { ga } from '@/logs/analytics';
import { PostType } from "@/models/pages/slug";
import { url } from '@/utils/url';

type Props = {
    postList: PostType[];
};

const LAYOUT = 'PostList';
const PAGE_SIZE = 5;

export const PostList: React.FC<Props> = ({ postList }) => {
    const [posts, setPosts] = useState<PostType[]>(postList);
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
    const observerRef = useRef<HTMLDivElement | null>(null);

    const filterPosts = useCallback((posts: PostType[]) => {
        setPosts(posts);
        setVisibleCount(PAGE_SIZE);
    }, []);

    const handlePostClick = useCallback((post: PostType) => {
        ga.events.selectPost(post, LAYOUT);
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

    const renderedPostList = useMemo(() => {
        return visiblePosts.map((post) => (
            <div key={post.slug} className={styles.post}>
                <PostTitle title={post.title}/>
                <PostInfo regDate={post.regDate} tags={post.tags}/>
                <PostContent content={post.content}/>
                <div className={styles.detailButton}>
                    <div className={styles.overlay}></div>
                    <Link 
                        className={styles.button} 
                        href={url.postDetail(post.slug)}
                        onClick={() => handlePostClick(post)}
                    >
                        상세보기
                    </Link>
                </div>
            </div>
        ));
    }, [visiblePosts, handlePostClick]);

    useOnMounted(ga.pageView.postList);

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
                    <PostSearch 
                        postList={postList}
                        filterPosts={filterPosts}
                    />
                </div>
                <div className={styles.postListWrap}>
                    {renderedPostList}
                    {visibleCount < posts.length && (
                        <div ref={observerRef} style={{ height: '1px' }} />
                    )}
                </div>
            </div>
        </>
    );
};
PostList.displayName = 'PostList';