import Head from 'next/head';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const Meta = () => {
	const { t } = useTranslation();
	return (
		<Head>
            <title>{t('component.pages.about.meta.title')}</title>
            <meta name="description" content={t('component.pages.about.meta.description')} />
			<meta name="keywords" content={t('component.pages.about.meta.keyword')} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

			{/* Facebook Meta Tags */}
			<meta property="og:url" content={`https://www.baakhan.com/`} />
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content={t('component.pages.about.meta.title')} />
			<meta property="og:title" content={t('component.pages.about.meta.title')} />
			<meta property="og:description" content={t('component.pages.about.meta.description')} />
			<meta property="og:image" content={`https://www.baakhan.com/favicon.icon`} />

			{/*  Twitter Meta Tags  */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta property="twitter:domain" content="www.baakhan.com" />
			<meta property="twitter:url" content={`https://www.baakhan.com/`} />
			<meta name="twitter:title" content={t('component.pages.about.meta.title')} />
			<meta name="twitter:description" content={t('component.pages.about.meta.description')} />
			<meta name="twitter:image" content={`https://www.baakhan.com/favicon.icon`} />
			<meta name="twitter:label1" content="Baakhan" />
			<meta name="twitter:data1" content={t('component.pages.about.meta.keyword')} />
		</Head>
	);
};

Meta.displayName = 'Meta';
