import styles from './Notice.module.scss';

export const Notice: React.FC = () => {

    return (
        <div className={styles.container}>
            현재 블로그 리펙토링 작업중입니다.
        </div>
    );
};
Notice.displayName = 'Notice';