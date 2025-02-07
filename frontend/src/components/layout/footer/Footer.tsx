import { useTranslation } from 'react-i18next';
import styles from './Footer.module.scss';
import { url } from '@/utils/url';

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
                    href={url.github}
                >
                    <span>{t('component.ui.layouts.footer.github')}</span>
                </a>
                <a 
                    target="_blank" 
                    href={url.portfolio}
                >
                    <span>{t('component.ui.layouts.footer.portfolio')}</span>
                </a>
            </div>
            <div>
                <span>{t('component.ui.layouts.footer.copyright')}</span>
            </div>
        </footer>
    );
};
Footer.displayName = 'Footer';