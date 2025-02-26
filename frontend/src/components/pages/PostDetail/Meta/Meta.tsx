import Head from 'next/head';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
	slug: string;
	title: string;
    description: string;
	mainTag: string;
	tags: string[];
	thumbnailImage: string;
}

export const Meta: React.FC<Props> = ({
	slug,
	title,
	description,
    mainTag,
    tags,
	thumbnailImage,
}) => {
    const { t } = useTranslation();
	const keywords = useMemo(() => [mainTag, ...tags].join(', '), [mainTag, tags]);

	return (
		<Head>
			<title>{t('component.pages.postDetail.meta.title', { title })}</title>
			<meta name="description" content={t('component.pages.postDetail.meta.description', { description })} />
			<meta name="keywords" content={t('component.pages.postDetail.meta.keywords', { keywords })} />

			{/* Facebook Meta Tags */}
			<meta property="og:url" content={`https://baakhan.com/posts/${slug}`} />
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content={t('component.pages.postDetail.meta.title', { title })} />
			<meta property="og:title" content={t('component.pages.postDetail.meta.title', { title })} />
			<meta property="og:description" content={t('component.pages.postDetail.meta.description', { description })} />
			<meta property="og:image" content={`https://baakhan.com/${thumbnailImage}`} />

			{/*  Twitter Meta Tags  */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta property="twitter:domain" content="baakhan.com" />
			<meta property="twitter:url" content={`https://baakhan.com/posts/${slug}`} />
			<meta name="twitter:title" content={t('component.pages.postDetail.meta.title', { title })} />
			<meta name="twitter:description" content={t('component.pages.postDetail.meta.description', { description })} />
			<meta name="twitter:image" content={`https://baakhan.com/${thumbnailImage}`} />
			<meta name="twitter:label1" content="Baakhan" />
			<meta name="twitter:data1" content={t('component.pages.postDetail.meta.keywords', { keywords })} />
		</Head>
	);
};
Meta.displayName = 'Meta';