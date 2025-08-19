import styles from './Skill.module.scss';
import SkillItem from './SkillItem';
import { skill } from './skill.data';
import Title from '@/shared/ui/Title';

const skillKeys = ['languages', 'frameworksAndLibraries', 'infrastructureAndDatabases', 'toolsAndIdes'] as const;

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
			<Title title='Skill' />
			<div className={styles.skill}>
				{skills.map((item, index) => (
					<SkillItem key={index} {...item} />
				))}
			</div>
		</section>
	);
}
