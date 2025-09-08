import { Ui } from '@jeehoon/ui';
import Image from 'next/image';
import { useMemo } from 'react';
import styles from './Experience.module.scss';
import naedamLogoImg from './assets/neadam_logo.png';

export default function Experience() {
	const calculateDuration = useMemo(() => {
		const durationStart = '2022-03';
		const durationEnd = '2025-03';

		const startDate = new Date(durationStart);
		const endDate = new Date(durationEnd);

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
	}, []);

	const experienceList = useMemo(() => {
		const experience = `이커머스 플랫폼 마이그래이션 (4~6명)<br />
												성능 개선 및 기능 구현 (4명)<br />
												Naedam Admin 프로그램 구축 (3명)<br />
												Naedam New Homepage 신규개발 (3명)<br />
												한화생명 코어프로젝트 개발 (2명)`;
		return experience.split('<br />').map(item => item.trim());
	}, []);

	return (
		<section>
			<Ui.Title title='Experience' />
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
							내담씨앤씨
						</h4>
						<div className={styles.duration}>
							<div className={styles.durationDate}>
								2022-03<span>~</span>2025-03
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
