import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import styles from './Profile.module.scss';

export const Profile: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <div className={styles.profile}>
                <div className={styles.image} />
                <div className={styles.sub}>
                    <div className={styles.author}>
                        {t('component.ui.profile.author')}
                    </div>
                    <div className={styles.description}>
                        {t('component.ui.profile.description')}
                    </div>
                    <div className={styles.link}>
                        <Link href={'https://github.com/gkstj8300/'}>
                            <i className={styles.gitHubIcon}></i>
                        </Link>
                        <Link href={'https://parkjeehoon-portfolio.vercel.app/'}>
                            <i className={styles.portfolioicon}></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}