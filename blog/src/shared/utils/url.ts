import { UrlObject } from 'url';
import { resolveHref } from 'next/dist/client/resolve-href';
import Router from 'next/router';

export const url = {
	// 깃허브 링크
	github: 'https://github.com/gkstj8300/',
	// 포트폴리오 링크
	portfolio:
		'https://stealth-silicon-085.notion.site/20c3f6eec87b800580c2d4686640e284/',
	// 경력기술서 링크
	careerDescription: 'https://parkjeehoon-career-description.vercel.app/',
	// 게시글 상세
	postDetail: (slug: string) => {
		return `/post/detail/${slug}`;
	},
	// 스킬 상세
	skillDetail: (slug: string) => {
		return `/skills/${slug}`;
	},
};

export function convertToURLString(url: UrlObject) {
	const [resolved, interpolated] = resolveHref(
		Router,
		url,
		true
	) as unknown as string[];
	return `/${interpolated ?? resolved}`;
}
