import { useTranslation } from 'react-i18next';
import styles from './Profile.module.scss';
import { Title } from '@/components/ui/title';

export const Profile: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.profile}>
            <Title title='Profile' />
            <div className={styles.image} />
            <div className={styles.sub}>
                <div className={styles.developer}>
                    {t('component.pages.profile.developer')}
                </div>
                <div className={styles.author}>
                    {t('component.pages.profile.author')}
                </div>
                <div className={styles.description}>
                    {t('component.pages.profile.description')}
                </div>
            </div>
        </div>
    );
};
Profile.displayName = 'Profile';