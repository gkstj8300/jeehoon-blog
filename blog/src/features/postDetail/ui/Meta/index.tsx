import Head from 'next/head';
import { useMemo } from 'react';

interface MetaProps {
	slug: string;
	title: string;
	description: string;
	mainTag: string;
	tags: string[];
	thumbnailImage: string;
}

export default function Meta({
	slug,
	title,
	description,
	mainTag,
	tags,
	thumbnailImage,
}: MetaProps) {
	const keywords = useMemo(
		() => [mainTag, ...tags].join(', '),
		[mainTag, tags]
	);

	return (
		<Head>
			<title>{title} | Baakhan</title>
			<meta
				name="description"
				content={`${description} | 박지훈 기술 블로그입니다.`}
			/>
			<meta
				name="keywords"
				content={`${keywords}, Baakhan, 박지훈, Frontend, 기술 블로그`}
			/>

			{/* Facebook Meta Tags */}
			<meta property="og:url" content={`https://baakhan.com/posts/${slug}`} />
			<meta property="og:type" content="website" />
			<meta
				property="og:site_name"
				content={`${title} | Baakhan`}
			/>
			<meta
				property="og:title"
				content={`${title} | Baakhan`}
			/>
			<meta
				property="og:description"
				content={`${description} | 박지훈 기술 블로그입니다.`}
			/>
			<meta property="og:image" content={thumbnailImage} />

			{/*  Twitter Meta Tags  */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta property="twitter:domain" content="baakhan.com" />
			<meta
				property="twitter:url"
				content={`https://baakhan.com/posts/${slug}`}
			/>
			<meta
				name="twitter:title"
				content={`${title} | Baakhan`}
			/>
			<meta
				name="twitter:description"
				content={`${description} | 박지훈 기술 블로그입니다.`}
			/>
			<meta name="twitter:image" content={thumbnailImage} />
			<meta name="twitter:label1" content="Baakhan" />
			<meta
				name="twitter:data1"
				content={`${keywords}, Baakhan, 박지훈, Frontend, 기술 블로그`}
			/>
		</Head>
	);
}
Meta.displayName = 'Meta';
