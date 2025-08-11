import { Trans, useTranslation } from 'react-i18next';
import styles from './Introduce.module.scss';

export default function Introduce() {
	const { t } = useTranslation();

	return (
		<section>
			<div className={styles.container}>
				<h3 className={styles.title}>
					{t('component.pages.about.introduce.title')}
				</h3>
				<div className={styles.introduce}>
					<p>
						<Trans>{t('component.pages.about.introduce.introduce')}</Trans>
					</p>
				</div>
			</div>

			<div className={styles.footer}>
				<small className={styles.lastUpdate}>
					{t('component.pages.about.introduce.lastUpdate')}
				</small>
				<span className={styles.updateDate}>
					{t('component.pages.about.introduce.updateDate')}
				</span>
			</div>
		</section>
	);
}
