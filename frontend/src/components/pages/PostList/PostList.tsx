import Link from 'next/link';
import { PostContent } from './PostContent';
import { PostInfo } from './PostInfo';
import styles from './PostList.module.scss';
import { PostTitle } from './PostTitle';
import { Breadcrumbs } from '@/components/ui/links/Breadcrumbs';
import { PostType } from "@/models/pages/slug";
import { url } from '@/utils/url';

type Props = {
    postList: PostType[];
};

export const PostList: React.FC<Props> = ({ postList }) => {

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
                    해당 영역은 검색창 영역입니다.
                </div>
                <div className={styles.postListWrap}>
                    {postList.map((post) => (
                        <div key={post.title} className={styles.post}>
                            <PostTitle title={post.title}/>
                            <PostInfo 
                                regDate={post.regDate} 
                                tags={post.tags} 
                            />
                            <PostContent content={post.content}/>
                            <div className={styles.detailButton}>
                                <div className={styles.overlay}></div>
                                <Link className={styles.button} href={url.postDetail(post.slug)}>
                                    상세보기
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
PostList.displayName = 'PostList';