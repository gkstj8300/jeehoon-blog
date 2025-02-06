import styles from './Post.module.scss';
import { PostItem } from './PostItem';
import { Title } from '@/components/ui/title';

export const Post: React.FC = () => {
    return (
        <div className={styles.container}>
            <Title className={styles.title} title='Posts'/>
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
        </div>
    );
};

Post.displayName = 'Post';