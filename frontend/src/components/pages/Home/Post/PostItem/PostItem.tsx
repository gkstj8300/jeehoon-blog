import Link from 'next/link';
import styles from './PostItem.module.scss';
import { url } from '@/utils/url';

type Props = {
    slug: string;
    title: string;
    description: string;
    thumbnailImage?: string;
    regDate: string;
    mainTag: string;
    tags: string[];
};

export const PostItem: React.FC<Props> = ({
    slug, 
    title, 
    description, 
    thumbnailImage, 
    regDate,
    tags,
}) => {
    return (
        <article className={styles.container}>
            <Link href={url.postDetail(slug)}>
                {thumbnailImage && (
                    <div className={styles.thumbnail}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={thumbnailImage} alt={`${title}`} />
                    </div>
                )}
                <div>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.regDate}>{regDate}</div>
                    <div className={styles.description}>{description}</div>
                    <div className={styles.tag}>
                        {tags.map((item, index) => <span key={`post-${index}`}>{item}</span>)}
                    </div>
                </div>
            </Link>
        </article>
    );
};

PostItem.displayName = 'PostItem';
