import styles from './Skill.module.scss';

type Props = {
    skill: string
}

export const Skill: React.FC<Props> = ({
    skill
}) => {
    return (
        <span className={styles.skill}>{skill}</span>
    )
}