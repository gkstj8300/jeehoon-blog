import "@jeehoon/theme";
import { Layout, Infra, pretendard } from '@jeehoon/ui';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import StandardLayout from '@/shared/layouts/StandardLayout';
import '@/styles/globals.scss';

export const metadata: Metadata = {
	title: '실험실 | FE 박지훈',
	description:
		'현재 실험실 페이지는 개발중입니다.',
	openGraph: {
		url: 'https://lab.baakhan.com/',
		siteName: 'baakhan-lab',
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
				<Layout.Blob />
				<StandardLayout>{children}</StandardLayout>
				{gaId ? <Infra.GoogleAnalytics gaId={gaId} /> : null}
			</body>
		</html>
	);
}
