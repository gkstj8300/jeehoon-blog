import Link from 'next/link';
import { useState, useMemo, useCallback } from 'react';
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

export const PostList: React.FC<Props> = ({ postList }) => {
    const [posts, setPosts] = useState<PostType[]>(postList);

    const filterPosts = useCallback((posts: PostType[]) => {
        setPosts(posts);
    }, []);

    const renderedPostList = useMemo(() => {
        return posts.map((post) => (
            <div key={post.slug} className={styles.post}>
                <PostTitle title={post.title}/>
                <PostInfo regDate={post.regDate} tags={post.tags}/>
                <PostContent content={post.content}/>
                <div className={styles.detailButton}>
                    <div className={styles.overlay}></div>
                    <Link className={styles.button} href={url.postDetail(post.slug)}>
                        상세보기
                    </Link>
                </div>
            </div>
        ));
    }, [posts]);

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
                </div>
            </div>
        </>
    );
};
PostList.displayName = 'PostList';