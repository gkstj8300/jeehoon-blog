import Link from 'next/link';
import { ChangeEvent, useState, useMemo } from 'react';
import { PostContent } from './PostContent';
import { PostInfo } from './PostInfo';
import styles from './PostList.module.scss';
import { PostTitle } from './PostTitle';
import { Breadcrumbs } from '@/components/ui/links/Breadcrumbs';
import { Title } from '@/components/ui/title';
import { PostType } from "@/models/pages/slug";
import { url } from '@/utils/url';

type Props = {
    postList: PostType[];
};

export const PostList: React.FC<Props> = ({ postList }) => {
    const [keyDownValue, setKeyDownValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setKeyDownValue(value);
    };

    const renderedPostList = useMemo(() => {
        return postList.map((post) => (
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
    }, [postList]);

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
                    <div className={styles.search}>
                        <Title className={styles.searchTitle} title='Search' />
                        <input 
                            value={keyDownValue}
                            className={styles.searchBox} 
                            type="text" 
                            placeholder='keyword input'
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className={styles.postListWrap}>
                    {renderedPostList}
                </div>
            </div>
        </>
    );
};
PostList.displayName = 'PostList';