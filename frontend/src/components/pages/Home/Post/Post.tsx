import styles from './Post.module.scss';
import { PostItem } from './PostItem';
import { Title } from '@/components/ui/title';
import { PostType } from '@/pages/posts/[slug].types';

type Props = {
    postList: PostType[];
}

export const Post: React.FC<Props> = ({
    postList
}) => {
    return (
        <div className={styles.container}>
            <Title className={styles.title} title='Posts'/>
            {postList.map(post => (
                <PostItem key={post.title} {...post} />
            ))}
        </div>
    );
};

Post.displayName = 'Post';