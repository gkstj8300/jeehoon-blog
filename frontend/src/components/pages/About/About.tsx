import styles from './About.module.scss';
import { Education } from './Education';
import { Experience } from './Experience';
import { Introduce } from './Introduce';
import { Project } from './Project';
import { Skill } from './Skill';
import { Breadcrumbs } from '@/components/ui/links/Breadcrumbs';
import { useOnMounted } from '@/hooks/useOnMounted';
import { ga } from '@/logs/analytics';

export const About: React.FC = () => {
    useOnMounted(ga.pageView.about);

    return (
        <>
            <Breadcrumbs
                className={styles.breadcrumb}
                breadcrumbList={[{
                    text: 'About',
                    strong: true,
                }]}
            />
            <div className={styles.container}>
                <Introduce />
                <Skill />
                <Experience />
                <Project />
                <Education />
            </div>
        </>
    );
};
About.displayName = 'About';