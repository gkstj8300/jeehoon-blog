import styles from './PostInfo.module.scss';

interface PostInfoProps {
	tags: string[];
}

export default function PostInfo({ tags }: PostInfoProps) {
	return (
		<div className={styles.container}>
			<div className={styles.info}>
				<div className={styles.subInfo}>
					<div className={styles.author}>@BaakHan</div>
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
