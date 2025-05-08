import styles from './SkillTitle.module.scss';

type Props = {
    title: string;
}

export const SkillTitle: React.FC<Props> = ({ title }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
        </div>
    );
};
SkillTitle.displayName = 'SkillTitle';