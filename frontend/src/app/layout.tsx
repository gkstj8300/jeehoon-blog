import type { Metadata } from 'next';
import Providers from './providers';
import StandardLayout from '@/components/layout/StandardLayout';
import { pretendard } from '@/styles/fonts/Pretendard/pretendard';
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
	return (
		<html lang="ko">
			<body className={pretendard.variable}>
				<Providers>
					<StandardLayout>{children}</StandardLayout>
				</Providers>
			</body>
		</html>
	);
}
