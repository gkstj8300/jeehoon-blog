import styles from './Skill.module.scss';

interface SkillProps {
	skill: string;
}

export default function Skill({ skill }: SkillProps) {
	return <span className={styles.skill}>{skill}</span>;
}
