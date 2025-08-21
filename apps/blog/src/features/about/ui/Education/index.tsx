import styles from './Education.module.scss';
import EducationItem from './EducationItem';
import { education } from './education.data';
import Title from '@/shared/ui/Title';

const educationKeys = ['highSchool', 'university1', 'education', 'university2'] as const;
type EducationKey = typeof educationKeys[number];

export interface EducationProps {
  name: string;
  major: string;
  durationStart: string;
  durationEnd: string;
}

export default function Education() {
	const educationKeys: Array<EducationKey> = ['highSchool', 'university1', 'education', 'university2'];

	const educations: EducationProps[] = educationKeys.map((key) => {
		const { name, major, durationStart, durationEnd } = education[key];
		return { name, major, durationStart, durationEnd };
	});

	return (
		<section>
			<Title title='Education' />
			<div className={styles.education}>
				{educations.map((item, index) => (
					<EducationItem key={index} {...item} />
				))}
			</div>
		</section>
	);
}
