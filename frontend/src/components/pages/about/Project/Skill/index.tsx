import styles from './Skill.module.scss';

type Props = {
	skill: string;
};

export default function Skill({ skill }: Props) {
	return <span className={styles.skill}>{skill}</span>;
}
