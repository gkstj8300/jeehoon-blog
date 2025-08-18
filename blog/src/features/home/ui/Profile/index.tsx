import { useTranslation } from 'react-i18next';
import styles from './Profile.module.scss';
import Title from '@/shared/ui/Title';

export default function Profile() {
	const { t } = useTranslation();

	return (
		<div className={styles.profile}>
			<Title title="Profile" />
			<div className={styles.mainProfile}>
				<div className={styles.image} />
				<div className={styles.sub}>
					<div className={styles.developer}>
						{t('component.pages.home.profile.developer')}
					</div>
					<div className={styles.author}>
						{t('component.pages.home.profile.author')}
					</div>
					<div className={styles.description}>
						{t('component.pages.home.profile.description')}
					</div>
				</div>
			</div>
		</div>
	);
}
Profile.displayName = 'Profile';
