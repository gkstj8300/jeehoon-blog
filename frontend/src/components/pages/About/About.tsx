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

    const handleOpenResumePdf = () => {
        window.open('https://d2ut7x8yqv441q.cloudfront.net/posts/resume.pdf', '_blank');
    }

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
                <div className={styles.pdf} onClick={handleOpenResumePdf}>PDF 열기</div>
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