import styles from './Post.module.scss';
import { PostItem } from './PostItem';
import { PostType } from '@/models/pages/slug';

type Props = {
    postList: PostType[];
}

export const Post: React.FC<Props> = ({
    postList,
}) => {
    return (
        <div className={styles.container}>
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