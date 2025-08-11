import Image from 'next/image';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Experience.module.scss';
import naedamLogoImg from './assets/neadam_logo.png';
import Title from '@/components/common/Title';

export default function Experience() {
	const { t } = useTranslation();

	const calculateDuration = useMemo(() => {
		const durationStart = t(
			'component.pages.about.experience.naedam.durationStart'
		);
		const durationEnd = t(
			'component.pages.about.experience.naedam.durationEnd'
		);

		const startDate = new Date(durationStart);
		const endDate =
			durationEnd === '재직중' ? new Date() : new Date(durationEnd);

		let years = endDate.getFullYear() - startDate.getFullYear();
		let months = endDate.getMonth() - startDate.getMonth();

		if (months < 0) {
			years--;
			months += 12;
		}

		const yearText = years > 0 ? `${years}년` : '';
		const monthText = months > 0 ? `${months}개월` : '';
		const duration = `${yearText} ${monthText}`.trim();

		return duration;
	}, [t]);

	const experienceList = useMemo(() => {
		const experience = t('component.pages.about.experience.experience');
		return experience.split('<br />').map(item => item.trim());
	}, [t]);

	return (
		<section>
			<Title title={t('component.pages.about.experience.title')} />
			<div className={styles.experience}>
				<div className={styles.details}>
					<Image
						className={styles.companyImg}
						src={naedamLogoImg.src}
						alt="companyImg"
						width={128}
						height={128}
						priority
					/>
					<div className={styles.companyWrap}>
						<h4 className={styles.companyName}>
							{t('component.pages.about.experience.naedam.name')}
						</h4>
						<div className={styles.duration}>
							<div className={styles.durationDate}>
								{t('component.pages.about.experience.naedam.durationStart')}
								<span>~</span>
								{t('component.pages.about.experience.naedam.durationEnd')}
							</div>
							<span className={styles.calculateDuration}>
								{calculateDuration}
							</span>
						</div>
					</div>
				</div>
				<div className={styles.divider}></div>
				<ul className={styles.description}>
					{experienceList.map((experience, idx) => (
						<li key={idx}>{experience}</li>
					))}
				</ul>
			</div>
		</section>
	);
}
