import Link from 'next/link';
import styles from './PostItem.module.scss';
import { PostType } from '@/models/pages/slug';
import { url } from '@/utils/url';

type Props = {
    post: PostType;
    handlePostClick: (post: PostType) => void;
};

export const PostItem: React.FC<Props> = ({
    post,
    handlePostClick,
}) => {
    const { slug, title, description, thumbnailImage, regDate,mainTag } = post;
    return (
        <Link 
            className={styles.container} 
            href={url.postDetail(slug)}
            onClick={() => handlePostClick(post)}
        >
            <div className={styles.thumbnail}>
                <div className={styles.thumbnailImg}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                        className={styles.img}
                        src={thumbnailImage ? thumbnailImage : '/React.png'} 
                        alt={`${title}`} 
                    />
                </div>
                <div className={styles.mainTag}>{mainTag}</div>
            </div>
            <div className={styles.title}>{title}</div>
            <div className={styles.regDate}>{regDate}</div>
            <div className={styles.description}>{description}</div>
        </Link>
    );
};

PostItem.displayName = 'PostItem';
