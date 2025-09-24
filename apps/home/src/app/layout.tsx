import "@jeehoon/theme";
import { Infra, pretendard } from '@jeehoon/ui';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import StandardLayout from '@/shared/layouts/StandardLayout';
import '@/styles/globals.scss';

export const metadata: Metadata = {
	title: 'FE 개발자 박지훈의 포트폴리오 | FE 박지훈',
	description:
		'프론트엔드 개발과 관련된 최신 기술, 개발 경험, 문제 해결 과정을 공유합니다.',
	openGraph: {
		url: 'https://www.baakhan.com/',
		siteName: 'baakhan',
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
	const themeCookie = cookies().get('theme')?.value;
  const theme = themeCookie === 'dark' || themeCookie === 'light' ? themeCookie : 'light';

	return (
		<html lang="ko" data-theme={theme} suppressHydrationWarning>
			<body className={pretendard.variable}>
        <StandardLayout>{children}</StandardLayout>
				{gaId ? <Infra.GoogleAnalytics gaId={gaId} /> : null}
			</body>
		</html>
	);
}
