import Head from 'next/head';

export default function Meta() {
	return (
		<Head>
			<title>박지훈 기술 블로그</title>
			<meta
				name="description"
				content='프론트엔드 개발과 관련된 최신 기술, 개발 경험, 문제 해결 과정 등을 공유하는 기술 블로그입니다.'
			/>
			<meta name="keywords" content='프론트엔드, React, JavaScript, TypeScript, Next.js, 웹 개발, UI/UX, 성능 최적화, 코드 리팩토링, 개발 블로그, CSS, HTML, Node.js, 상태 관리, Redux, Zustand, 프레임워크, 디자인 시스템, Webpack, Vite, Babel, 테스트, Jest, Cypress, TDD, 클린 코드, 코드 리뷰, 웹 접근성, SEO, 애니메이션, 인터랙션 디자인, SSR, CSR, 웹 성능, 개발자 성장, 기술 면접, CS' />

			{/* Facebook Meta Tags */}
			<meta property="og:url" content='https://www.baakhan.com/' />
			<meta property="og:type" content="website" />
			<meta
				property="og:site_name"
				content='박지훈 기술 블로그'
			/>
			<meta
				property="og:title"
				content='박지훈 기술 블로그'
			/>
			<meta
				property="og:description"
				content='프론트엔드 개발과 관련된 최신 기술, 개발 경험, 문제 해결 과정 등을 공유하는 기술 블로그입니다.'
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
				content='박지훈 기술 블로그'
			/>
			<meta
				name="twitter:description"
				content='프론트엔드 개발과 관련된 최신 기술, 개발 경험, 문제 해결 과정 등을 공유하는 기술 블로그입니다.'
			/>
			<meta
				name="twitter:image"
				content='https://d2ut7x8yqv441q.cloudfront.net/posts/baakhan.png'
			/>
			<meta name="twitter:label1" content="Baakhan" />
			<meta
				name="twitter:data1"
				content='프론트엔드, React, JavaScript, TypeScript, Next.js, 웹 개발, UI/UX, 성능 최적화, 코드 리팩토링, 개발 블로그, CSS, HTML, Node.js, 상태 관리, Redux, Zustand, 프레임워크, 디자인 시스템, Webpack, Vite, Babel, 테스트, Jest, Cypress, TDD, 클린 코드, 코드 리뷰, 웹 접근성, SEO, 애니메이션, 인터랙션 디자인, SSR, CSR, 웹 성능, 개발자 성장, 기술 면접, CS'
			/>
		</Head>
	);
}
Meta.displayName = 'Meta';
