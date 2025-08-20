import styles from './Project.module.scss';
import ProjectItem from './ProjectItem';
import hanwhaLogo from './assets/hanwhaLogo.png';
import misumiLogo from './assets/misumiLogo.svg';
import naedamLogo from './assets/naedamLogo.jpg';
import { project } from './project.data';
import type { DevelopType } from '@/shared/ui/MiniTitle';
import Title from '@/shared/ui/Title';

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

type ProjectKey = Exclude<keyof typeof project, 'title'>;

type RawDevelopment = {
	type: DevelopType;
	name: string;
	developmentStart: string;
	developmentEnd: string;
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

function toDevelopmentList(devObj: RawProject['development']): Develop[] {
	return Object.entries(devObj)
		.sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
		.map(([, v]) => ({
			type: v.type,
			name: v.name,
			developmentStart: v.developmentStart,
			developmentEnd: v.developmentEnd,
			description: v.description,
		}));
}

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
				description: p.description,
				development: toDevelopmentList(p.development),
			};
		})
		.reverse();

	return (
		<section>
			<Title title={project.title} />
			<div className={styles.projects}>
				{projects.map((item, index) => (
					<ProjectItem key={index} idx={index} {...item} />
				))}
			</div>
		</section>
	);
}
