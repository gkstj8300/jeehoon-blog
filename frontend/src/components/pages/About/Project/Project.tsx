import { useTranslation } from 'react-i18next';
import styles from './Project.module.scss';
import { ProjectItem } from './ProjectItem';
import hanwhaLogo from './assets/hanwhaLogo.png';
import misumiLogo from './assets/misumiLogo.svg';
import naedamLogo from './assets/naedamLogo.jpg';
import { Title } from '@/components/ui/title';

type ProjectItem = {
    name: string;
    projectName: string;
    logoImg: string;
    durationStart: string;
    durationEnd: string;
    skillKeywords: string;
    description: string;
};

const projectData = [
    { key: 'hanwha', logoImg: hanwhaLogo.src },
    { key: 'naedam', logoImg: naedamLogo.src },
    { key: 'misumiMaintenance', logoImg: misumiLogo.src },
    { key: 'misumiRenewal', logoImg: misumiLogo.src },
];

export const Project: React.FC = () => {
    const { t } = useTranslation();

    const projects: ProjectItem[] = projectData.map(({ key, logoImg }) => ({
        name: t(`component.pages.about.project.${key}.name`),
        projectName: t(`component.pages.about.project.${key}.projectName`),
        logoImg,
        durationStart: t(`component.pages.about.project.${key}.durationStart`),
        durationEnd: t(`component.pages.about.project.${key}.durationEnd`),
        skillKeywords: t(`component.pages.about.project.${key}.skillKeywords`),
        description: t(`component.pages.about.project.${key}.description`),
    })).reverse();

    return (
        <section>
            <Title title={t('component.pages.about.project.title')} />
            <div className={styles.projects}>
                {projects.map((item, index) => (
                    <ProjectItem
                        key={index}
                        idx={index}
                        {...item}
                    />
                ))}
            </div>
        </section>
    );
};
