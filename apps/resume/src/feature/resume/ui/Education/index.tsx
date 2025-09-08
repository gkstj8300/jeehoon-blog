import { Ui } from '@jeehoon/ui';
import styles from './Education.module.scss';
import EducationItem from './EducationItem';
import { education } from './education.data';

const educationKeys = ['university2', 'education', 'university1', 'highSchool'] as const;
type EducationKey = typeof educationKeys[number];

export interface EducationProps {
  name: string;
  major: string;
  durationStart: string;
  durationEnd: string;
}

export default function Education() {
	const educationKeys: Array<EducationKey> = ['university2', 'education', 'university1', 'highSchool'];

	const educations: EducationProps[] = educationKeys.map((key) => {
		const { name, major, durationStart, durationEnd } = education[key];
		return { name, major, durationStart, durationEnd };
	});

	return (
		<section>
			<Ui.Title title='Education' />
			<div className={styles.education}>
				{educations.map((item, index) => (
					<EducationItem key={index} {...item} />
				))}
			</div>
		</section>
	);
}
