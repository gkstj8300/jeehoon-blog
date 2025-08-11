import styles from './SkillItem.module.scss';
import type { SkillProps } from '@/components/pages/about/Skill';

export default function SkillItem({ title, skills }: SkillProps) {
	return (
		<div className={styles.skillItem}>
			<div className={styles.title}>{title}</div>
			<div className={styles.skillWrap}>
				<ul className={styles.skillList}>
					{skills.map((skill, index) => (
						<li key={index}>{skill}</li>
					))}
				</ul>
			</div>
		</div>
	);
}
