import "@jeehoon/theme";
import { Infra, pretendard } from '@jeehoon/ui';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import StandardLayout from '@/shared/layouts/StandardLayout';
import '@/styles/globals.scss';

export const metadata: Metadata = {
	title: '박지훈 기술 블로그',
	description:
		'프론트엔드 개발과 관련된 최신 기술, 개발 경험, 문제 해결 과정을 공유합니다.',
	openGraph: {
		url: 'https://www.baakhan.com/',
		siteName: 'baakhan-techBlog',
		locale: 'ko',
		type: 'website',
	},
	icons: { icon: '/favicon.ico' },
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const gaId = process.env.GTM_ID;
	const theme = cookies().get('theme')?.value as 'light' | 'dark' | undefined;

	return (
		<html lang="ko" data-theme={theme} suppressHydrationWarning>
			<body className={pretendard.variable}>
        <StandardLayout>{children}</StandardLayout>
				{gaId ? <Infra.GoogleAnalytics gaId={gaId} /> : null}
			</body>
		</html>
	);
}
