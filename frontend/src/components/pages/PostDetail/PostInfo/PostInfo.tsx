import styles from './PostInfo.module.scss';

type Props = {
    regDate: string;
    tags: string[];
}

export const PostInfo: React.FC<Props> = ({
    regDate,
    tags,
}) => {

    return (
        <div className={styles.container}>
            <div>
                <div className={styles.author}>@BaakHan</div>
                <div className={styles.regDate}>{regDate}</div>
            </div>
            <div>
                {tags.map((tag, index) => (
                    <div key={index}>{tag}</div>
                ))}
            </div>
        </div>
    );
};
PostInfo.displayName = 'PostInfo';