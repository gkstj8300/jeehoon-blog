import styles from './About.module.scss';
import { Education } from './Education';
import { Experience } from './Experience';
import { Introduce } from './Introduce';
import { Project } from './Project';
import { Skill } from './Skill';
import { Breadcrumbs } from '@/components/ui/links/Breadcrumbs';

export const About: React.FC = () => {

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