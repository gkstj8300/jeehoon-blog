import { UrlObject } from 'url';
import { resolveHref } from 'next/dist/client/resolve-href';
import Router from 'next/router';

export const url = {
    // 깃허브 링크
    github: 'https://github.com/gkstj8300/',
    // 포트폴리오 링크
    portfolio: 'https://parkjeehoon-portfolio.vercel.app/',
    // 경력기술서 링크
    careerDescription: 'https://parkjeehoon-career-description.vercel.app/',
    // 게시글 상세
    postDetail: (slug: string) => {
        return `/posts/${slug}`
    },
}

export function convertToURLString(url: UrlObject) {
	const [resolved, interpolated] = resolveHref(
		Router,
		url,
		true
	) as unknown as string[];
	return `/${interpolated ?? resolved}`;
}