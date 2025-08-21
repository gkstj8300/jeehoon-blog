import { useCallback } from 'react';

interface PostContentParams {
	content: string;
}

export function usePostContent({ content }: PostContentParams) {
	const getPostContentHeadings = useCallback(() => {
		const headingMatches = content.match(/^#{1,3} .+/gm) || [];

		return headingMatches.map(heading => {
			const level = heading.match(/^#{1,3}/)?.[0].length || 0;
			const text = heading.replace(/^#{1,3} /, '');
			const id = text.replace(/\s+/g, '-').toLowerCase(); // ID 생성

			return { level, text, id };
		});
	}, [content]);

	return {
		getPostContentHeadings,
	};
}
