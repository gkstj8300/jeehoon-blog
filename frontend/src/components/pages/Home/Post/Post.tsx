import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Post.module.scss';
import { PostItem } from './PostItem';
import { PostTItle } from './PostTItle';
import { Sort, SearchType } from "@/components/pages/Home/Home.types";
import { PostType } from '@/models/pages/slug';

type Props = {
    postList: PostType[];
    search?: SearchType;
    handleFindPosts: (search: SearchType) => void;
}

export const Post: React.FC<Props> = ({
    postList,
    search,
    handleFindPosts
}) => {
    const { t } = useTranslation();

    const handleClickSort = useCallback((sort: Sort) => {
        handleFindPosts({ sort });
    }, [handleFindPosts]);

    return (
        <div className={styles.container}>
            <PostTItle 
                className={styles.title}
                title={t('component.pages.post.title')}
                sort={search?.sort || 'desc'}
                handleClickSort={handleClickSort}
            />
            {postList.map((post, idx) => (
                <PostItem 
                    key={idx} 
                    slug={post.slug}
                    title={post.title}
                    description={post.description}
                    thumbnailImage={post.thumbnailImage}
                    mainTag={post.mainTag}
                    regDate={post.regDate}
                    tags={post.tags}
                />
            ))}
        </div>
    );
};

Post.displayName = 'Post';