import styles from './Post.module.scss';
import { Title } from '@/components/ui/title';
import { PostItem } from './PostItem';

export const Post: React.FC = () => {
    return (
        <div className={styles.container}>
            <Title className={styles.title} title='Posts'/>
            <PostItem />
        </div>
    );
};

Post.displayName = 'Post';