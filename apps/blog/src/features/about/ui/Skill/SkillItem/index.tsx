import type { SkillProps } from '../';
import styles from './SkillItem.module.scss';

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
