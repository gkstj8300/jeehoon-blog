import styles from './PostItem.module.scss';

export const PostItem: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Title</div>
            <div className={styles.regDate}>2025-XX-XX</div>
            <div className={styles.description}>description.................</div>
            <div className={styles.tag}>
                <span>tag1</span>
                <span>tag2</span>
                <span>tag2</span>
            </div>
        </div>
    );
};

PostItem.displayName = 'PostItem';