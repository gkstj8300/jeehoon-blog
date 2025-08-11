import { useTranslation } from 'react-i18next';
import styles from './Project.module.scss';
import ProjectItem from './ProjectItem';
import hanwhaLogo from './assets/hanwhaLogo.png';
import misumiLogo from './assets/misumiLogo.svg';
import naedamLogo from './assets/naedamLogo.jpg';
import type { DevelopType } from '@/components/common/MiniTitle';
import Title from '@/components/common/Title';

export interface Develop {
	type: DevelopType;
	name: string;
	developmentStart: string;
	developmentEnd: string;
	description: string;
}

interface ProjectItemType {
	name: string;
	projectName: string;
	logoImg: string;
	durationStart: string;
	durationEnd: string;
	skillKeywords: string;
	description: string;
	development: Develop[];
}

const projectData = [
	{ key: 'hanwha', logoImg: hanwhaLogo.src },
	{ key: 'naedam', logoImg: naedamLogo.src },
	{ key: 'misumiMaintenance', logoImg: misumiLogo.src },
	{ key: 'misumiRenewal', logoImg: misumiLogo.src },
];

export default function Project() {
	const { t } = useTranslation();

	const projects: ProjectItemType[] = projectData
		.map(({ key, logoImg }) => {
			const development: Develop[] = [];

			for (let i = 1; i <= 5; i++) {
				const type: DevelopType = t(
					`component.pages.about.project.${key}.development.develop${i}.type`
				);
				if (
					!type ||
					type ===
						`component.pages.about.project.${key}.development.develop${i}.type`
				) {
					continue;
				}

				development.push({
					type,
					name: t(
						`component.pages.about.project.${key}.development.develop${i}.name`
					),
					developmentStart: t(
						`component.pages.about.project.${key}.development.develop${i}.developmentStart`
					),
					developmentEnd: t(
						`component.pages.about.project.${key}.development.develop${i}.developmentEnd`
					),
					description: t(
						`component.pages.about.project.${key}.development.develop${i}.description`
					),
				});
			}

			return {
				name: t(`component.pages.about.project.${key}.name`),
				projectName: t(`component.pages.about.project.${key}.projectName`),
				logoImg,
				durationStart: t(`component.pages.about.project.${key}.durationStart`),
				durationEnd: t(`component.pages.about.project.${key}.durationEnd`),
				skillKeywords: t(`component.pages.about.project.${key}.skillKeywords`),
				description: t(`component.pages.about.project.${key}.description`),
				development,
			};
		})
		.reverse();

	return (
		<section>
			<Title title={t('component.pages.about.project.title')} />
			<div className={styles.projects}>
				{projects.map((item, index) => (
					<ProjectItem key={index} idx={index} {...item} />
				))}
			</div>
		</section>
	);
}
