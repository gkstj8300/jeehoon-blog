import styles from './PostInfo.module.scss';

type Props = {
    regDate: string;
    mainTag: string;
    tags: string[];
}

export const PostInfo: React.FC<Props> = ({
    regDate,
    mainTag,
    tags,
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.author}>@BaakHan</div>
                <div className={styles.regDate}>{regDate}</div>
                <div className={styles.mainTag}>{mainTag}</div>
            </div>
            <div className={styles.tags}>
                {tags.map((tag, index) => (
                    <div key={index} className={styles.tag}>{tag}</div>
                ))}
            </div>
        </div>
    );
};
PostInfo.displayName = 'PostInfo';