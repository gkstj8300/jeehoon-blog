import Head from 'next/head';
import { useTranslation } from 'react-i18next';

export default function Meta() {
	const { t } = useTranslation();

	return (
		<Head>
			<title>{t('component.pages.home.meta.title')}</title>
			<meta
				name="description"
				content={t('component.pages.home.meta.description')}
			/>
			<meta name="keywords" content={t('component.pages.home.meta.keywords')} />

			{/* Facebook Meta Tags */}
			<meta property="og:url" content={`https://www.baakhan.com/`} />
			<meta property="og:type" content="website" />
			<meta
				property="og:site_name"
				content={t('component.pages.home.meta.title')}
			/>
			<meta
				property="og:title"
				content={t('component.pages.home.meta.title')}
			/>
			<meta
				property="og:description"
				content={t('component.pages.home.meta.description')}
			/>
			<meta
				property="og:image"
				content={`https://d2ut7x8yqv441q.cloudfront.net/posts/baakhan.png`}
			/>

			{/*  Twitter Meta Tags  */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta property="twitter:domain" content="www.baakhan.com" />
			<meta property="twitter:url" content={`https://www.baakhan.com/`} />
			<meta
				name="twitter:title"
				content={t('component.pages.home.meta.title')}
			/>
			<meta
				name="twitter:description"
				content={t('component.pages.home.meta.description')}
			/>
			<meta
				name="twitter:image"
				content={`https://d2ut7x8yqv441q.cloudfront.net/posts/baakhan.png`}
			/>
			<meta name="twitter:label1" content="Baakhan" />
			<meta
				name="twitter:data1"
				content={t('component.pages.home.meta.keywords')}
			/>
		</Head>
	);
}
Meta.displayName = 'Meta';
