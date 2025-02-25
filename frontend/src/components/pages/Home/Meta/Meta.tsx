import Head from 'next/head';
import { useTranslation } from 'react-i18next';

export const Meta: React.FC = () => {
    const { t } = useTranslation();

	return (
		<Head>
			<title>{t('component.pages.home.meta.title')}</title>
			<meta name="description" content={t('component.pages.home.meta.description')} />
			<meta name="keywords" content={t('component.pages.home.meta.keywords')} />
		</Head>
	);
};
Meta.displayName = 'Meta';