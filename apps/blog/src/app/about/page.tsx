import type { Metadata } from 'next';
import AboutPage from "@/features/about/ui/AboutPage";

export const metadata: Metadata = {
	title: '박지훈 기술 블로그',
  description:
    '프론트엔드 개발과 관련된 최신 기술, 개발 경험, 문제 해결 과정 등을 공유하는 기술 블로그입니다.',
  keywords: [
    '프론트엔드','React','JavaScript','TypeScript','Next.js',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    url: 'https://www.baakhan.com',
    type: 'website',
    siteName: '박지훈 기술 블로그',
    title: '박지훈 기술 블로그',
    description:
      '프론트엔드 개발과 관련된 최신 기술, 개발 경험, 문제 해결 과정 등을 공유하는 기술 블로그입니다.',
    images: [
      {
        url: 'https://d2ut7x8yqv441q.cloudfront.net/posts/baakhan.webp',
        width: 1200,
        height: 630,
        alt: 'Baakhan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '박지훈 기술 블로그',
    description:
      '프론트엔드 개발과 관련된 최신 기술, 개발 경험, 문제 해결 과정 등을 공유하는 기술 블로그입니다.',
    images: ['https://d2ut7x8yqv441q.cloudfront.net/posts/baakhan.webp'],
    site: '@Baakhan',
  },
}

export default function About() {
	return <AboutPage />;
}
