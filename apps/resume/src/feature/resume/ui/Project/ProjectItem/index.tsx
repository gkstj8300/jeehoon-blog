import Image from 'next/image';
import { useMemo } from 'react';
import Skill from '../Skill';
import styles from './ProjectItem.module.scss';

interface ProjectItemProps {
	idx: number;
	name: string;
	projectName: string;
	logoImg: string;
	durationStart: string;
	durationEnd: string;
	skillKeywords: string;
	development: string;
}

export default function ProjectItem({
	name,
	projectName,
	logoImg,
	durationStart,
	durationEnd,
	skillKeywords,
	development,
}: ProjectItemProps) {
	const skillList = useMemo(() => skillKeywords.split(','), [skillKeywords]);

	const calculateDuration = useMemo(() => {
		const startDate = new Date(durationStart);
		const endDate =
			durationEnd === '진행중' ? new Date() : new Date(durationEnd);

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
	}, [durationStart, durationEnd]);

	const Item = (
		<div className={styles.projectItem}>
			<div className={styles.projectDetailWrap}>
				<Image
					className={styles.projectLogo}
					src={logoImg}
					alt={projectName}
					priority
					width={320}
					height={208}
				/>
				<div className={styles.detailBody}>
					<div>
						<h3 className={styles.name}>{name}</h3>
						<h3 className={styles.projectName}>{projectName}</h3>
						<div className={styles.duration}>
							<div>
								{durationStart}
								<span>~</span>
								{durationEnd}
							</div>
							<span className={styles.calculateDuration}>
								{calculateDuration}
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.description}>
				<div className={styles.skill}>
					{skillList.map(skill => (
						<Skill key={skill} skill={skill} />
					))}
				</div>
				<div className={styles.development}>
					{development.split('<br />').map((item, idx) => (
						<li key={`description_${idx}`}>{item}</li>
					))}
				</div>
			</div>
		</div>
	);

	return Item;
}
