import { Ui } from '@jeehoon/ui';
import styles from './Project.module.scss';
import ProjectItem from './ProjectItem';
import hanwhaLogo from './assets/hanwhaLogo.png';
import misumiLogo from './assets/misumiLogo.svg';
import naedamLogo from './assets/naedamLogo.jpg';
import { project } from './project.data';

interface ProjectItemType {
	name: string;
	projectName: string;
	logoImg: string;
	durationStart: string;
	durationEnd: string;
	skillKeywords: string;
	development: string;
}

type ProjectKey = Exclude<keyof typeof project, 'title'>;

type RawDevelopment = {
	description: string;
};

type RawProject = {
	name: string;
	projectName: string;
	durationStart: string;
	durationEnd: string;
	skillKeywords: string;
	description: string;
	development: Record<string, RawDevelopment>;
};

const logoByKey: Record<ProjectKey, string> = {
	hanwha: hanwhaLogo.src,
	naedam: naedamLogo.src,
	misumiMaintenance: misumiLogo.src,
	misumiRenewal: misumiLogo.src,
};

export default function Project() {
	const projects: ProjectItemType[] = Object.keys(project)
		.filter((k): k is ProjectKey => k !== 'title')
		.map((key) => {
			const p = project[key];
			return {
				name: p.name,
				projectName: p.projectName,
				logoImg: logoByKey[key],
				durationStart: p.durationStart,
				durationEnd: p.durationEnd,
				skillKeywords: p.skillKeywords,
				development: p.development,
			};
		})
		.reverse();

	return (
		<section>
			<Ui.Title title={project.title} />
			<div className={styles.projects}>
				{projects.map((item, index) => (
					<ProjectItem key={index} idx={index} {...item} />
				))}
			</div>
		</section>
	);
}
