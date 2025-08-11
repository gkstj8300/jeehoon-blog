import styles from './PostInfo.module.scss';

interface PostInfoProps {
	regDate: string;
	tags: string[];
}

export default function PostInfo({ regDate, tags }: PostInfoProps) {
	const formattedDate = regDate.replace(/-/g, '.');
	return (
		<div className={styles.container}>
			<div className={styles.info}>
				<div className={styles.subInfo}>
					<div className={styles.author}>@BaakHan</div>
					<div className={styles.regDate}>{formattedDate}</div>
				</div>
			</div>
			<div className={styles.tags}>
				{tags.map((tag, index) => (
					<div key={index} className={styles.tag}>{`#${tag}`}</div>
				))}
			</div>
		</div>
	);
}
PostInfo.displayName = 'PostInfo';
