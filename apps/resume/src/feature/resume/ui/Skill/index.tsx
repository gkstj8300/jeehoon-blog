import { Ui } from '@jeehoon/ui';
import styles from './Skill.module.scss';
import SkillItem from './SkillItem';
import { skill } from './skill.data';

const skillKeys = ['coreStack', 'stateManagement', 'styling'] as const;

export interface SkillProps {
	title: string;
	skills: string[];
}

export default function Skill() {
	const skills: SkillProps[] = skillKeys.map((key) => {
		const { title, skills: list } = skill[key];
		return { title, skills: [...list] };
	});

	return (
		<section>
			<Ui.Title title='사용하는 기술' />
			<div className={styles.skill}>
				{skills.map((item, index) => (
					<SkillItem key={index} {...item} />
				))}
			</div>
		</section>
	);
}
