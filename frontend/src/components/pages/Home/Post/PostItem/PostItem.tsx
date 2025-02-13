import Link from 'next/link';
import styles from './PostItem.module.scss';
import { url } from '@/utils/url';

type Props = {
    title: string,
    description: string,
    thumbnailImage: string,
    mainTag: string,
    regDate: string,
    tags: string[],
}

export const PostItem: React.FC<Props> = ({
    title,
    description,
    // thumbnailImage,
    regDate,
    tags,
}) => {
    const href = url.postDetail(title);
    return (
        <div className={styles.container}>
            <Link href={href}>
                <div className={styles.title}>{title}</div>
                <div className={styles.regDate}>{regDate}</div>
                <div className={styles.description}>{description}</div>
                <div className={styles.tag}>
                    {tags.map((item, index) => <span key={`post-${index}`}>{item}</span>)}
                </div>
            </Link>
        </div>
    );
};

PostItem.displayName = 'PostItem';