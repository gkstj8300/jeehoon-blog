import styles from './PostTitle.module.scss';

type Props = {
    title: string;
}

export const PostTitle: React.FC<Props> = ({ title }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
        </div>
    );
};
PostTitle.displayName = 'PostTitle';