import { useCallback } from 'react';
import styles from './Post.module.scss';
import { PostItem } from './PostItem';
import { ga } from '@/logs/analytics';
import { PostType } from '@/models/pages/slug';

type Props = {
    postList: PostType[];
}

const LAYOUT = 'Home';

export const Post: React.FC<Props> = ({
    postList,
}) => {

    const handlePostClick = useCallback((post: PostType) => {
        ga.events.selectPost(post, LAYOUT);
    }, []);

    return (
        <div className={styles.container}>
            {postList.map((post, idx) => (
                <PostItem 
                    key={idx}
                    post={post}
                    handlePostClick={handlePostClick}
                />
            ))}
        </div>
    );
};

Post.displayName = 'Post';