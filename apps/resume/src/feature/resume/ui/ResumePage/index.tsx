'use client';

import { useOnMounted } from '@jeehoon/hooks';
import Education from '../Education';
import Experience from '../Experience';
import Introduce from '../Introduce';
import Project from '../Project';
import Skill from '../Skill';
import styles from './ResumePage.module.scss';
// import { ga } from '@/shared/lib/logs/analytics';
// import Breadcrumbs from '@/shared/ui/Breadcrumbs';

export default function ResumePage() {
	// useOnMounted(ga.pageView.about);

	const handleOpenResumePdf = () => {
		window.open(
			'https://d2ut7x8yqv441q.cloudfront.net/posts/resume.pdf',
			'_blank'
		);
	};

	return (
		<>
			{/* <Breadcrumbs
				className={styles.breadcrumb}
				breadcrumbList={[
					{
						text: 'About',
						strong: true,
					},
				]}
			/> */}
			<div className={styles.container}>
				<div className={styles.pdf} onClick={handleOpenResumePdf}>
					PDF 열기
				</div>
				<Introduce />
				<Skill />
				<Experience />
				<Project />
				<Education />
			</div>
		</>
	);
}
ResumePage.displayName = 'ResumePage';
