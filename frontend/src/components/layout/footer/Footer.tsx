import { useTranslation } from 'react-i18next';
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <footer className={styles.footer}>
            <div className={styles.linkList}>
                <p>
                    <span>{t('component.ui.layouts.footer.email')}</span>
                </p>
                <a 
                    target="_blank" 
                    href='https://github.com/gkstj8300'
                >
                    <span>{t('component.ui.layouts.footer.github')}</span>
                </a>
            </div>
            <div>
                <span>{t('component.ui.layouts.footer.copyright')}</span>
            </div>
        </footer>
    );
};
Footer.displayName = 'Footer';