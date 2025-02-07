import styles from './PostItem.module.scss';

type Props = {
    title: string,
    description: string,
    thumbnailImage: string,
    regDate: string,
    tag: string[],
}

export const PostItem: React.FC<Props> = ({
    title,
    description,
    // thumbnailImage,
    regDate,
    tag,
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>{title}</div>
            <div className={styles.regDate}>{regDate}</div>
            <div className={styles.description}>{description}</div>
            <div className={styles.tag}>
                {tag.map(item => <span>{item}</span>)}
            </div>
        </div>
    );
};

PostItem.displayName = 'PostItem';