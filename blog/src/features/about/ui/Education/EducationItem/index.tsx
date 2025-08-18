import { Trans } from 'react-i18next';
import type { EducationProps } from '../';
import styles from './EducationItem.module.scss';

export default function EducationItem({
	name,
	major,
	durationStart,
	durationEnd,
}: EducationProps) {
	return (
		<div className={styles.educationItem}>
			<div className={styles.duration}>
				{durationStart}
				<span>~</span>
				{durationEnd}
			</div>
			<div className={styles.body}>
				<h4 className={styles.name}>{name}</h4>
				<p className={styles.major}>
					<Trans>{major}</Trans>
				</p>
			</div>
		</div>
	);
}
