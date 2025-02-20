import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Post.module.scss';
import { PostItem } from './PostItem';
import { PostTItle } from './PostTItle';
import { PostType } from '@/models/pages/slug';

export type Sort = 'desc' | 'asc';

type Props = {
    postList: PostType[];
    setPosts: React.Dispatch<React.SetStateAction<PostType[]>>;
}

export const Post: React.FC<Props> = ({
    postList,
    setPosts
}) => {
    const { t } = useTranslation();
    const [sort, setSort] = useState<Sort>('desc');

    const handleClickSort = useCallback((sort: Sort) => {
        const sortedPosts = [...postList].sort((a, b) => 
            (sort === 'desc' ? -1 : 1) * 
            (new Date(a.regDate).getTime() - new Date(b.regDate).getTime())
        );
        setSort(sort);
        setPosts(sortedPosts);
    }, [postList, setPosts]);

    return (
        <div className={styles.container}>
            <PostTItle 
                className={styles.title} 
                title={t('component.pages.post.title')}
                sort={sort}
                handleClickSort={handleClickSort}
            />
            {postList.map((post, idx) => (
                <PostItem key={idx} {...post} />
            ))}
        </div>
    );
};

Post.displayName = 'Post';