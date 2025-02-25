import Head from 'next/head';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
	title: string;
    description: string;
	mainTag: string;
	tags: string[];
}

export const Meta: React.FC<Props> = ({
	title,
	description,
    mainTag,
    tags,
}) => {
    const { t } = useTranslation();
	const keywords = useMemo(() => [mainTag, ...tags].join(', '), []);

	return (
		<Head>
			<title>{t('component.pages.postDetail.meta.title', { title })}</title>
			<meta name="description" content={t('component.pages.postDetail.meta.description', { description })} />
			<meta name="keywords" content={t('component.pages.postDetail.meta.keywords', { keywords })} />
		</Head>
	);
};
Meta.displayName = 'Meta';