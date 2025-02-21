import Link from 'next/link';
import styles from './PostItem.module.scss';
import { url } from '@/utils/url';

type Props = {
    slug: string;
    title: string;
    description: string;
    thumbnailImage: string;
    mainTag: string;
    regDate: string;
    tags: string[];
}

export const PostItem: React.FC<Props> = ({
    slug,
    title,
    description,
    regDate,
    tags,
}) => {
    return (
        <div className={styles.container}>
            <Link href={`${url.postDetail(slug)}`}>
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