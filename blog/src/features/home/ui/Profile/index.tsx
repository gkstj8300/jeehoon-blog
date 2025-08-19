import styles from './Profile.module.scss';
import Title from '@/shared/ui/Title';

export default function Profile() {
	return (
		<div className={styles.profile}>
			<Title title="Profile" />
			<div className={styles.mainProfile}>
				<div className={styles.image} />
				<div className={styles.sub}>
					<div className={styles.developer}>
						Frontend Developer
					</div>
					<div className={styles.author}>
						Park Jee Hoon
					</div>
					<div className={styles.description}>
						Step into my development journey
					</div>
				</div>
			</div>
		</div>
	);
}
Profile.displayName = 'Profile';
