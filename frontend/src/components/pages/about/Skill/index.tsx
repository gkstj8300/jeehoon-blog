import { useTranslation } from 'react-i18next';
import styles from './Skill.module.scss';
import SkillItem from './SkillItem';
import Title from '@/components/common/Title';

export interface SkillProps {
	title: string;
	skills: string[];
}

export default function Skill() {
	const { t } = useTranslation();

	const skillKeys = [
		'languages',
		'frameworksAndLibraries',
		'infrastructureAndDatabases',
		'toolsAndIdes',
	];

	const skills: SkillProps[] = skillKeys.map(key => ({
		title: t(`component.pages.about.skill.${key}.title`),
		skills: t(`component.pages.about.skill.${key}.skills`).split(','),
	}));

	return (
		<section>
			<Title title={t(`component.pages.about.skill.title`)} />
			<div className={styles.skill}>
				{skills.map((item, index) => (
					<SkillItem key={index} {...item} />
				))}
			</div>
		</section>
	);
}
