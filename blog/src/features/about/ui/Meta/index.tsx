import Head from 'next/head';
import React from 'react';

export default function Meta() {
	return (
		<Head>
			<title>About | Baakhan</title>
			<meta
				name="description"
				content='반갑습니다, 프론트엔드 개발자 박지훈입니다. 프론트엔드 개발, 코어 개발, 신규/리뉴얼 개발, 유지보수 및 운영 경험을 지니고 있습니다.'
			/>
			<meta name="keywords" content='프론트엔드, 개발자, 프론트엔드 개발자, 리액트, 리액트 개발자, SPA, SPA 개발자, 리뉴얼 개발, 유지보수, 운영' />
			<meta name="viewport" content="width=device-width, initial-scale=1" />

			{/* Facebook Meta Tags */}
			<meta property="og:url" content='https://www.baakhan.com/' />
			<meta property="og:type" content="website" />
			<meta
				property="og:site_name"
				content='About | Baakhan'
			/>
			<meta
				property="og:title"
				content='About | Baakhan'
			/>
			<meta
				property="og:description"
				content='반갑습니다, 프론트엔드 개발자 박지훈입니다. 프론트엔드 개발, 코어 개발, 신규/리뉴얼 개발, 유지보수 및 운영 경험을 지니고 있습니다.'
			/>
			<meta
				property="og:image"
				content='https://d2ut7x8yqv441q.cloudfront.net/posts/baakhan.png'
			/>

			{/*  Twitter Meta Tags  */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta property="twitter:domain" content="www.baakhan.com" />
			<meta property="twitter:url" content='https://www.baakhan.com/' />
			<meta
				name="twitter:title"
				content='About | Baakhan'
			/>
			<meta
				name="twitter:description"
				content='반갑습니다, 프론트엔드 개발자 박지훈입니다. 프론트엔드 개발, 코어 개발, 신규/리뉴얼 개발, 유지보수 및 운영 경험을 지니고 있습니다.'
			/>
			<meta
				name="twitter:image"
				content='https://d2ut7x8yqv441q.cloudfront.net/posts/baakhan.png'
			/>
			<meta name="twitter:label1" content="Baakhan" />
			<meta
				name="twitter:data1"
				content='프론트엔드, 개발자, 프론트엔드 개발자, 리액트, 리액트 개발자, SPA, SPA 개발자, 리뉴얼 개발, 유지보수, 운영'
			/>
		</Head>
	);
}

Meta.displayName = 'Meta';
